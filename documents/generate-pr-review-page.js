var fs = require('fs')
var path = require('path')

// Configuration
var CONFIG = {
  TRIMMED_DIR: path.join(__dirname, 'trimmed_prs'),
  OUTPUT_FILE: path.join(__dirname, 'pr_review.html'),
  MAX_PRS: 200
}

// Calculate a score for a PR based on importance factors
function calculatePRScore(pr) {
  var score = 0
  
  // Changed files (5 points per file)
  if (pr.changed_files) {
    score += pr.changed_files * 5
  }
  
  // Changed lines (1 point per 100 lines)
  if (pr.additions && pr.deletions) {
    score += (pr.additions + pr.deletions) / 100
  }
  
  // Comments (10 points per comment)
  if (pr.comments_count) {
    score += pr.comments_count * 10
  }
  
  // Has images (50-point bonus)
  if (pr.images && pr.images.length > 0) {
    score += 50
  }
  
  // Body length (0.1 points per 100 characters)
  if (pr.body) {
    score += (pr.body.length / 100) * 0.1
  }
  
  // Enhancement label (30-point bonus)
  if (pr.labels && pr.labels.some(function(label) {
    return (typeof label === 'string' ? label : label.name).toLowerCase() === 'enhancement'
  })) {
    score += 30
  }
  
  return Math.round(score * 100) / 100
}

// Format date as 'MMM YYYY'
function formatDate(dateString) {
  if (!dateString) return 'N/A'
  var date = new Date(dateString)
  return date.toLocaleString('default', { month: 'short' }) + ' ' + date.getFullYear()
}

// Generate HTML for image thumbnails
function generateImageThumbnails(images) {
  if (!images || !images.length) return ''
  
  return images.map(function(img, index) {
    // Create a smaller version of the image URL if it's from GitHub
    var thumbnailUrl = img
    if (img.includes('github.com') && !img.includes('=s') && !img.includes('width=')) {
      if (img.includes('?')) {
        thumbnailUrl += '&width=100'
      } else {
        thumbnailUrl += '?width=100'
      }
    }
    
    return '<img src="' + thumbnailUrl + '" alt="Screenshot ' + (index + 1) + '" style="max-width: 50px; max-height: 50px; margin: 2px;" class="pr-image">'
  }).join('')
}

// Generate the HTML page
function generateHTML(prs) {
  var html = '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '  <meta charset="UTF-8">\n' +
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
    '  <title>PR Review - Select Important PRs</title>\n' +
    '  <style>\n' +
    '    body {\n' +
    '      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n' +
    '      line-height: 1.6;\n' +
    '      color: #333;\n' +
    '      max-width: 1200px;\n' +
    '      margin: 0 auto;\n' +
    '      padding: 20px;\n' +
    '    }\n' +
    '    h1 {\n' +
    '      color: #2c3e50;\n' +
    '      text-align: center;\n' +
    '      margin-bottom: 20px;\n' +
    '    }\n' +
    '    table {\n' +
    '      width: 100%;\n' +
    '      border-collapse: collapse;\n' +
    '      margin-bottom: 20px;\n' +
    '    }\n' +
    '    th, td {\n' +
    '      padding: 12px 15px;\n' +
    '      text-align: left;\n' +
    '      border-bottom: 1px solid #ddd;\n' +
    '    }\n' +
    '    th {\n' +
    '      background-color: #f2f2f2;\n' +
    '      position: sticky;\n' +
    '      top: 0;\n' +
    '      z-index: 10;\n' +
    '    }\n' +
    '    tr {\n' +
    '      outline: none;\n' +
    '      cursor: pointer;\n' +
    '    }\n' +
    '    tr:focus {\n' +
    '      box-shadow: inset 0 0 0 2px #0366d6;\n' +
    '    }\n' +
    '    tr:hover {\n' +
    '      background-color: #f5f5f5;\n' +
    '    }\n' +
    '    .pr-title {\n' +
    '      max-width: 300px;\n' +
    '      white-space: nowrap;\n' +
    '      overflow: hidden;\n' +
    '      text-overflow: ellipsis;\n' +
    '    }\n' +
    '    .pr-title a {\n' +
    '      color: #0366d6;\n' +
    '      text-decoration: none;\n' +
    '    }\n' +
    '    .pr-title a:hover {\n' +
    '      text-decoration: underline;\n' +
    '    }\n' +
    '    .images {\n' +
    '      white-space: nowrap;\n' +
    '      overflow-x: auto;\n' +
    '      max-width: 200px;\n' +
    '    }\n' +
    '    .images img {\n' +
    '      transition: transform 0.2s;\n' +
    '      cursor: default;\n' +
    '    }\n' +
    '    .images img:hover {\n' +
    '      transform: scale(2);\n' +
    '      z-index: 100;\n' +
    '      position: relative;\n' +
    '      background: white;\n' +
    '      box-shadow: 0 0 10px rgba(0,0,0,0.3);\n' +
    '    }\n' +
    '    .save-btn {\n' +
    '      display: block;\n' +
    '      width: 200px;\n' +
    '      margin: 20px auto;\n' +
    '      padding: 10px 20px;\n' +
    '      background-color: #28a745;\n' +
    '      color: white;\n' +
    '      border: none;\n' +
    '      border-radius: 4px;\n' +
    '      font-size: 16px;\n' +
    '      cursor: pointer;\n' +
    '    }\n' +
    '    .save-btn:hover {\n' +
    '      background-color: #218838;\n' +
    '    }\n' +
    '    .priority-select {\n' +
    '      padding: 5px;\n' +
    '      border-radius: 4px;\n' +
    '      border: 1px solid #ddd;\n' +
    '      cursor: pointer;\n' +
    '    }\n' +
    '    .priority-1 { background-color: #ffebee; }\n' +
    '    .priority-2 { background-color: #fff8e1; }\n' +
    '    .priority-3 { background-color: #e8f5e9; }\n' +
    '    .score {\n' +
    '      font-family: monospace;\n' +
    '      text-align: right;\n' +
    '    }\n' +
    '  </style>\n' +
    '</head>\n' +
    '<body>\n' +
    '  <h1>PR Review - Select Important PRs</h1>\n' +
    '  <table>\n' +
    '    <thead>\n' +
    '      <tr>\n' +
    '        <th>Priority</th>\n' +
    '        <th>PR #</th>\n' +
    '        <th>Title</th>\n' +
    '        <th>Date</th>\n' +
    '        <th>Lines Changed</th>\n' +
    '        <th>Images</th>\n' +
    '        <th>Score</th>\n' +
    '      </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n';

  // Add rows for each PR
  prs.forEach(function(pr, index) {
    html += '      <tr tabindex="0" data-pr="' + pr.number + '">\n' +
      '        <td>\n' +
      '          <select class="priority-select" data-pr="' + pr.number + '" onchange="updateRowStyle(this)" tabindex="-1">\n' +
      '            <option value="0">-</option>\n' +
      '            <option value="1">1 - Low</option>\n' +
      '            <option value="2">2 - Medium</option>\n' +
      '            <option value="3">3 - High</option>\n' +
      '          </select>\n' +
      '        </td>\n' +
      '        <td>#' + pr.number + '</td>\n' +
      '        <td class="pr-title" title="' + (pr.title || '').replace(/"/g, '&quot;') + '">' +
      '          ' + (pr.title || '') + '</td>\n' +
      '        <td>' + formatDate(pr.created_at) + '</td>\n' +
      '        <td>' + ((pr.additions || 0) + (pr.deletions || 0)) + '</td>\n' +
      '        <td class="images">' + generateImageThumbnails(pr.images) + '</td>\n' +
      '        <td class="score">' + pr.score + '</td>\n' +
      '      </tr>\n';
  });

  // Close the table and add scripts
  html += '    </tbody>\n' +
    '  </table>\n' +
    '  <button id="saveSelection" class="save-btn">Save Priorities</button>\n' +
    '  <script>\n' +
    '    function updateRowStyle(select) {\n' +
    '      var row = select.closest(\'tr\');\n' +
    '      row.classList.remove(\'priority-1\', \'priority-2\', \'priority-3\');\n' +
    '      if (select.value !== \'0\') {\n' +
    '        row.classList.add(\'priority-\' + select.value);\n' +
    '      }\n' +
    '      // Move to next row on Enter/Return\n' +
    '      var nextRow = row.nextElementSibling;\n' +
    '      if (nextRow) {\n' +
    '        nextRow.focus();\n' +
    '      }\n' +
    '    }\n' +
    '\n' +
    '    // Handle keyboard navigation\n' +
    '    document.addEventListener(\'keydown\', function(e) {\n' +
    '      if (e.key === \'Enter\' || e.key === \' \') {\n' +
    '        var active = document.activeElement;\n' +
    '        if (active.tagName === \'TR\') {\n' +
    '          var select = active.querySelector(\'select\');\n' +
    '          if (select) {\n' +
    '            select.focus();\n' +
    '            e.preventDefault();\n' +
    '          }\n' +
    '        }\n' +
    '      }\n' +
    '    });\n' +
    '    document.getElementById(\'saveSelection\').addEventListener(\'click\', function() {\n' +
    '      var priorityPRs = { low: [], medium: [], high: [] };\n' +
    '      var selects = document.querySelectorAll(\'.priority-select\');\n' +
    '      for (var i = 0; i < selects.length; i++) {\n' +
    '        var select = selects[i];\n' +
    '        var prNumber = parseInt(select.dataset.pr);\n' +
    '        var priority = parseInt(select.value);\n' +
    '        if (priority === 1) priorityPRs.low.push(prNumber);\n' +
    '        else if (priority === 2) priorityPRs.medium.push(prNumber);\n' +
    '        else if (priority === 3) priorityPRs.high.push(prNumber);\n' +
    '      }\n' +
    '      function sortNumber(a, b) { return a - b; }\n' +
    '      priorityPRs.low.sort(sortNumber);\n' +
    '      priorityPRs.medium.sort(sortNumber);\n' +
    '      priorityPRs.high.sort(sortNumber);\n' +
    '      console.log(\'Prioritized PRs:\', priorityPRs);\n' +
    '      var total = priorityPRs.low.length + priorityPRs.medium.length + priorityPRs.high.length;\n' +
    '      alert("Saved priorities for " + total + " PRs:\\n- High: " + priorityPRs.high.length + "\\n- Medium: " + priorityPRs.medium.length + "\\n- Low: " + priorityPRs.low.length + "\\n\\nCheck browser console for the complete list.");\n' +
    '    });\n' +
    '  </script>\n' +
    '</body>\n' +
    '</html>';

  return html;
}

// Main function
function generateReviewPage() {
  try {
    var files = fs.readdirSync(CONFIG.TRIMMED_DIR)
      .filter(function(file) {
        return file.endsWith('.json') && file.startsWith('pr-')
      })
    
    console.log('Found ' + files.length + ' PRs to analyze')
    
    var prs = []
    
    // Calculate scores for all PRs
    files.forEach(function(file) {
      try {
        var prData = JSON.parse(fs.readFileSync(path.join(CONFIG.TRIMMED_DIR, file), 'utf8'))
        prData.score = calculatePRScore(prData)
        prs.push(prData)
      } catch (error) {
        console.error('Error processing ' + file + ':', error.message)
      }
    })
    
    // Sort by score (descending)
    prs.sort(function(a, b) {
      return b.score - a.score
    })
    
    // Take top N PRs
    var topPRs = prs.slice(0, CONFIG.MAX_PRS)
    
    // Generate and save HTML
    var html = generateHTML(topPRs)
    fs.writeFileSync(CONFIG.OUTPUT_FILE, html, 'utf8')
    
    console.log('\nGenerated PR review page: ' + CONFIG.OUTPUT_FILE)
    console.log('Top PR score: ' + topPRs[0].score + ' (#' + topPRs[0].number + ')')
    console.log('Lowest shown score: ' + topPRs[topPRs.length - 1].score + ' (#' + topPRs[topPRs.length - 1].number + ')')
    
  } catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }
}

// Run the script
generateReviewPage()
