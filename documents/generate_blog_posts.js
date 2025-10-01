const fs = require('fs')
const path = require('path')

// Configuration
const CONFIG = {
  TRIMMED_PRS_DIR: path.join(__dirname, 'trimmed_prs'),
  PRS_AND_SCREENSHOTS: path.join(__dirname, 'prs_and_screenshots.json'),
  POSTINGS_DIR: path.join(__dirname, 'postings')
}

// Ensure the postings directory exists
if (!fs.existsSync(CONFIG.POSTINGS_DIR)) {
  fs.mkdirSync(CONFIG.POSTINGS_DIR, { recursive: true })
}

// Load the PRs and screenshots data
const prsAndScreenshots = JSON.parse(fs.readFileSync(CONFIG.PRS_AND_SCREENSHOTS, 'utf8'))

// Function to create a slug from a title
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
    .replace(/^-+/, '')       // Trim - from start of text
    .replace(/-+$/, '')       // Trim - from end of text
}

// Function to generate a descriptive title from PR data
function generateTitle(prData) {
  // Use the PR title if available, otherwise create a generic title
  if (prData.title) {
    // Remove feature/ or fix/ prefixes if present
    let title = prData.title
      .replace(/^(feature|fix)\/\d+\s+/i, '')
      .replace(/^(feature|fix)\/\d+\-/i, '')
    
    // Capitalize first letter
    return title.charAt(0).toUpperCase() + title.slice(1)
  }
  
  return `Changes for PR #${prData.number}`
}

// Function to generate benefit description from PR data
function generateBenefitDescription(prData) {
  let description = ''
  
  // Try to extract meaningful information from the PR body
  if (prData.body) {
    // Look for Overview or Reason sections
    const overviewMatch = prData.body.match(/## 🚀 Overview:?\s*([^\n#]+)/i)
    const reasonMatch = prData.body.match(/## 🤔 Reason:?\s*([^\n#]+)/i)
    
    if (overviewMatch && overviewMatch[1].trim()) {
      description += overviewMatch[1].trim() + '\n\n'
    }
    
    if (reasonMatch && reasonMatch[1].trim()) {
      description += reasonMatch[1].trim() + '\n\n'
    }
  }
  
  // If we have issue data, include that
  if (prData.issues && prData.issues.length > 0) {
    const issue = prData.issues[0]
    if (issue.body) {
      // Look for User Story section
      const userStoryMatch = issue.body.match(/## 📖 User Story\s*([^#]+)/i)
      if (userStoryMatch && userStoryMatch[1].trim()) {
        description += 'User Story: ' + userStoryMatch[1].trim() + '\n\n'
      }
      
      // Look for Brief description
      const briefMatch = issue.body.match(/## 💬 Brief description of feature\s*([^#]+)/i)
      if (briefMatch && briefMatch[1].trim()) {
        description += 'Feature description: ' + briefMatch[1].trim() + '\n\n'
      }
    }
  }
  
  // If we still don't have a good description, create a generic one
  if (!description.trim()) {
    description = `This change was implemented in PR #${prData.number}`
    if (prData.title) {
      description += ` titled "${prData.title}"`
    }
    description += '. '
    
    if (prData.additions || prData.deletions) {
      description += `It involved ${prData.additions || 0} additions and ${prData.deletions || 0} deletions `
      description += `across ${prData.changed_files || 0} files.`
    }
  }
  
  return description.trim()
}

// Function to generate metadata section
function generateMetadata(prData) {
  let metadata = '## Metadata\n\n'
  
  metadata += `- **PR Number**: [#${prData.number}](${prData.html_url})\n`
  
  if (prData.labels && prData.labels.length > 0) {
    metadata += `- **Labels**: ${prData.labels.join(', ')}\n`
  }
  
  if (prData.issue_numbers && prData.issue_numbers.length > 0) {
    metadata += `- **Related Issues**: ${prData.issue_numbers.map(num => `#${num}`).join(', ')}\n`
  }
  
  if (prData.created_at) {
    metadata += `- **Created**: ${new Date(prData.created_at).toLocaleDateString()}\n`
  }
  
  if (prData.merged_at) {
    metadata += `- **Merged**: ${new Date(prData.merged_at).toLocaleDateString()}\n`
  }
  
  return metadata
}

// Function to generate the blog post content
function generateBlogPost(prNumber, selectedImages, priority) {
  console.log(`Generating blog post for PR #${prNumber}...`)
  
  // Load the PR data
  const prFilePath = path.join(CONFIG.TRIMMED_PRS_DIR, `pr-${prNumber}.json`)
  
  if (!fs.existsSync(prFilePath)) {
    console.warn(`Warning: No data file found for PR #${prNumber}, skipping...`)
    return
  }
  
  const prData = JSON.parse(fs.readFileSync(prFilePath, 'utf8'))
  
  // Generate the blog post components
  const title = generateTitle(prData)
  const description = generateBenefitDescription(prData)
  const metadata = generateMetadata(prData)
  
  // Generate the image section
  let imagesSection = '## Screenshots\n\n'
  
  if (selectedImages && selectedImages.length > 0) {
    selectedImages.forEach((imageUrl, index) => {
      imagesSection += `![Screenshot ${index + 1}](${imageUrl})\n\n`
    })
  } else {
    imagesSection += '*No screenshots available*\n\n'
  }
  
  // Combine all sections into the final blog post
  const blogPost = `# PR-${prNumber} - ${title}\n\n${description}\n\n${imagesSection}${metadata}`
  
  // Create the file name
  const fileName = `PR-${prNumber}-${slugify(title)}.md`
  const filePath = path.join(CONFIG.POSTINGS_DIR, fileName)
  
  // Write the blog post to a file
  fs.writeFileSync(filePath, blogPost, 'utf8')
  
  console.log(`Blog post created: ${fileName}`)
}

// Main function to generate all blog posts
function generateAllBlogPosts() {
  console.log('Starting blog post generation...')
  
  // Process each PR in the prs_and_screenshots.json file
  for (const [prNumber, data] of Object.entries(prsAndScreenshots)) {
    generateBlogPost(prNumber, data.selectedImages, data.priority)
  }
  
  console.log('Blog post generation complete!')
}

// Run the script
generateAllBlogPosts()
