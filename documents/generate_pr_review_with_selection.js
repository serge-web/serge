const fs = require('fs')
const path = require('path')

// Configuration
const CONFIG = {
  TRIMMED_DIR: path.join(__dirname, 'trimmed_prs'),
  PRIORITIZED_FILE: path.join(__dirname, 'prioritised_prs.json'),
  OUTPUT_FILE: path.join(__dirname, '../pr_review.html')
}

// Format date as 'MMM YYYY'
function formatDate(dateString) {
  if (!dateString) return 'Unknown date'
  const date = new Date(dateString)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[date.getMonth()]} ${date.getFullYear()}`
}

// Generate HTML for image thumbnails with checkboxes
function generateImageThumbnails(prNumber, images = []) {
  if (!images || images.length === 0) {
    return '<div class="no-screenshots">No screenshots</div>'
  }
  
  return images.map((image, index) => {
    // Handle both string URLs and objects with url property
    const imageUrl = typeof image === 'string' ? image : (image.url || '')
    return `
      <div class="screenshot">
        <img src="${imageUrl}" alt="PR #${prNumber} screenshot ${index + 1}">
        <input type="checkbox" 
               data-pr="${prNumber}" 
               data-image="${encodeURIComponent(imageUrl)}"
               class="screenshot-checkbox">
      </div>`
  }).join('\n')
}

// Generate the HTML page
function generateHTML(prsByPriority, prData) {
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PR Review Tool</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      color: #333;
    }
    h1 {
      color: #2c3e50;
      border-bottom: 2px solid #eee;
      padding-bottom: 10px;
    }
    .priority-section {
      margin-bottom: 30px;
    }
    .priority-title {
      font-size: 1.5em;
      margin: 20px 0 10px;
      color: #2c3e50;
      padding: 5px 10px;
      background-color: #f8f9fa;
      border-left: 4px solid #3498db;
    }
    .pr-card {
      border: 1px solid #e1e4e8;
      border-radius: 6px;
      padding: 15px;
      margin-bottom: 15px;
      background-color: #fff;
    }
    .pr-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    .pr-title {
      font-size: 1.2em;
      font-weight: 500;
      margin: 0;
    }
    .pr-meta {
      color: #6a737d;
      font-size: 0.9em;
    }
    .screenshots {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-top: 15px;
    }
    .screenshot {
      position: relative;
      border: 2px solid #e1e4e8;
      border-radius: 4px;
      overflow: hidden;
      transition: border-color 0.2s;
    }
    .screenshot:hover {
      border-color: #0366d6;
    }
    .screenshot img {
      display: block;
      max-width: 200px;
      height: auto;
    }
    .screenshot input[type="checkbox"] {
      position: absolute;
      top: 5px;
      right: 5px;
      transform: scale(1.5);
    }
    .priority-select {
      padding: 5px;
      border-radius: 4px;
      border: 1px solid #d1d5da;
      background-color: #f6f8fa;
    }
    .export-btn {
      display: block;
      margin: 30px auto;
      padding: 10px 20px;
      background-color: #2ea44f;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 1em;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .export-btn:hover {
      background-color: #2c974b;
    }
    .no-screenshots {
      color: #6a737d;
      font-style: italic;
    }
  </style>
</head>
<body>
  <h1>PR Review Tool</h1>`

  // Generate sections for each priority
  const priorities = ['high', 'medium', 'low']
  
  priorities.forEach(priority => {
    const prIds = prsByPriority[priority] || []
    if (prIds.length === 0) return
    
    html += `
  <div class="priority-section">
    <h2 class="priority-title">${priority.charAt(0).toUpperCase() + priority.slice(1)} Priority (${prIds.length})</h2>`
    
    // Sort PR IDs numerically
    prIds.sort((a, b) => a - b)
    
    prIds.forEach(prId => {
      const pr = prData[prId] || { number: prId }
      
      html += `
    <div class="pr-card" data-pr="${prId}">
      <div class="pr-header">
        <h3 class="pr-title">PR #${prId}${pr.title ? ': ' + pr.title : ''}</h3>
        <select class="priority-select" data-pr="${prId}">
          <option value="high" ${priority === 'high' ? 'selected' : ''}>High</option>
          <option value="medium" ${priority === 'medium' ? 'selected' : ''}>Medium</option>
          <option value="low" ${priority === 'low' ? 'selected' : ''}>Low</option>
        </select>
      </div>
      <div class="pr-meta">
        ${pr.created_at ? `Created: ${formatDate(pr.created_at)}` : ''}
      </div>
      <div class="screenshots">
        ${generateImageThumbnails(prId, pr.images || [])}
      </div>
    </div>`
    })
    
    html += `
  </div>`
  })
  
  // Add export button and JavaScript
  html += `
  <button id="exportBtn" class="export-btn">Export Selections</button>
  
  <script>
    // Track selected images
    const selectedImages = {}
    
    // Initialize the page
    document.addEventListener('DOMContentLoaded', () => {
      // Set up event listeners for checkboxes
      document.querySelectorAll('.screenshot-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          const prId = checkbox.dataset.pr
          const imageUrl = decodeURIComponent(checkbox.dataset.image)
          
          if (!selectedImages[prId]) {
            selectedImages[prId] = []
          }
          
          if (checkbox.checked) {
            if (!selectedImages[prId].includes(imageUrl)) {
              selectedImages[prId].push(imageUrl)
            }
          } else {
            selectedImages[prId] = selectedImages[prId].filter(url => url !== imageUrl)
            if (selectedImages[prId].length === 0) {
              delete selectedImages[prId]
            }
          }
        })
      })
      
      // Set up event listeners for priority selects
      document.querySelectorAll('.priority-select').forEach(select => {
        select.addEventListener('change', (e) => {
          const prId = e.target.dataset.pr
          const prCard = e.target.closest('.pr-card')
          const newPriority = e.target.value
          
          // Update the priority in the data structure
          if (!selectedImages[prId]) {
            selectedImages[prId] = []
          }
        })
      })
      
      // Set up export button
      document.getElementById('exportBtn').addEventListener('click', () => {
        // Collect selected PRs with their priorities and selected images
        const result = {}
        
        // Get all PRs with their current priorities
        document.querySelectorAll('.pr-card').forEach(card => {
          const prId = card.dataset.pr
          const select = card.querySelector('.priority-select')
          const priority = select.value
          
          // Only include PRs with selected images or changed priorities
          const hasSelectedImages = selectedImages[prId] && selectedImages[prId].length > 0
          
          if (hasSelectedImages) {
            result[prId] = {
              priority: priority,
              selectedImages: selectedImages[prId] || []
            }
          }
        })
        
        // Output the result to console
        console.log(JSON.stringify(result, null, 2))
        
        // Show a simple alert with the number of selected items
        const totalPRs = Object.keys(result).length
        const totalImages = Object.values(result).reduce((sum, pr) => sum + pr.selectedImages.length, 0)
        
        alert(\`Exported \${totalImages} selected images from \${totalPRs} PRs to the console.\`)
      })
    })
  </script>
</body>
</html>`

  return html
}

// Main function to generate the PR review page
function generatePRReviewPage() {
  try {
    console.log('Generating PR review page...')
    
    // Load prioritized PRs
    console.log('Loading prioritized PRs from', CONFIG.PRIORITIZED_FILE)
    const prioritizedPRs = JSON.parse(fs.readFileSync(CONFIG.PRIORITIZED_FILE, 'utf8'))
    
    // Collect all PR IDs from all priority levels
    const allPrIds = []
    for (const priority in prioritizedPRs) {
      if (Array.isArray(prioritizedPRs[priority])) {
        allPrIds.push(...prioritizedPRs[priority])
      }
    }
    
    console.log(`Found ${allPrIds.length} prioritized PRs`)
    
    // Load PR details
    const prData = {}
    allPrIds.forEach(prId => {
      const prFilePath = path.join(CONFIG.TRIMMED_DIR, `pr-${prId}.json`)
      
      try {
        if (fs.existsSync(prFilePath)) {
          const prDetails = JSON.parse(fs.readFileSync(prFilePath, 'utf8'))
          prData[prId] = prDetails
        } else {
          console.warn(`Warning: No data file found for PR #${prId}`)
          // Still include the PR with minimal data
          prData[prId] = { number: prId }
        }
      } catch (error) {
        console.error(`Error loading PR #${prId}:`, error.message)
        // Include the PR with minimal data
        prData[prId] = { number: prId }
      }
    })
    
    // Generate HTML
    const html = generateHTML(prioritizedPRs, prData)
    
    // Write to file
    fs.writeFileSync(CONFIG.OUTPUT_FILE, html, 'utf8')
    
    console.log(`PR review page generated successfully: ${CONFIG.OUTPUT_FILE}`)
    console.log(`Total PRs included: ${allPrIds.length}`)
    
  } catch (error) {
    console.error('Error generating PR review page:', error)
    process.exit(1)
  }
}

// Run the script
generatePRReviewPage()
