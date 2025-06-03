var fs = require('fs')
var path = require('path')

// Configuration
var CONFIG = {
  TRIMMED_DIR: path.join(__dirname, 'trimmed_prs'),
  ORIGINAL_PR_DIR: path.join(__dirname, 'PRs')
}

// Helper function to extract issue numbers from text
function extractIssueNumbers(text) {
  if (!text) return []
  
  // Match patterns like #123 or fixes #1234 or Fixes #123
  // Exclude common year patterns (e.g., 2021, 2022, etc.)
  const issueRegex = /(?:^|\s)(?:fixes\s+)?#?(\d{3,4})(?=\D|$)/gi
  const matches = []
  let match
  
  // Skip common screenshot/date patterns
  if (text.match(/\d{4}-\d{2}-\d{2}/) || text.match(/screenshot-\d{4}/i)) {
    return []
  }
  
  while ((match = issueRegex.exec(text)) !== null) {
    const issueNumber = parseInt(match[1], 10)
    // Exclude years (e.g., 2021, 2022, etc.)
    if (issueNumber >= 2000 && issueNumber <= 2100) continue
    if (!matches.includes(issueNumber)) {
      matches.push(issueNumber)
    }
  }
  
  return matches
}

// Get issue number from PR title
function getIssueFromTitle(prData) {
  if (!prData.title) return null
  
  // Match PR titles like "123: Fix something" or "123 - Fix something"
  const titleMatch = prData.title.match(/^(\d{3,4})[\s:-]/)
  return titleMatch ? parseInt(titleMatch[1], 10) : null
}

// Get issue numbers from PR comments
function getIssuesFromComments(prData) {
  const issueNumbers = []
  
  // Check regular comments
  if (prData.comments_data && Array.isArray(prData.comments_data)) {
    prData.comments_data.forEach(comment => {
      const numbers = extractIssueNumbers(comment.body)
      numbers.forEach(num => {
        if (!issueNumbers.includes(num)) issueNumbers.push(num)
      })
    })
  }
  
  // Check review comments
  if (prData.review_comments_data && Array.isArray(prData.review_comments_data)) {
    prData.review_comments_data.forEach(comment => {
      const numbers = extractIssueNumbers(comment.body)
      numbers.forEach(num => {
        if (!issueNumbers.includes(num)) issueNumbers.push(num)
      })
    })
  }
  
  return issueNumbers
}

// Get issue number from branch name in original PR data
function getIssueFromBranch(prNumber) {
  try {
    const prFilePath = path.join(CONFIG.ORIGINAL_PR_DIR, `pr-${prNumber}.json`)
    if (!fs.existsSync(prFilePath)) return null
    
    const prData = JSON.parse(fs.readFileSync(prFilePath, 'utf8'))
    if (!prData.head || !prData.head.ref) return null
    
    const branchMatch = prData.head.ref.match(/(?:^|[-_/])(\d{3,4})(?:[-_]|$)/)
    return branchMatch ? parseInt(branchMatch[1], 10) : null
  } catch (error) {
    console.error(`Error reading PR file for #${prNumber}:`, error.message)
    return null
  }
}

// Process a single PR file
function processPRFile(file) {
  try {
    const filePath = path.join(CONFIG.TRIMMED_DIR, file)
    const prData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    
    // Always reprocess to fix any existing year patterns
    // Remove existing issue_numbers if it exists
    if (prData.issue_numbers !== undefined) {
      console.log(`Reprocessing PR #${prData.number} to update issue numbers`)
      delete prData.issue_numbers
    }
    
    const issueNumbers = new Set()
    
    // Get issue from title
    const titleIssue = getIssueFromTitle(prData)
    if (titleIssue) issueNumbers.add(titleIssue)
    
    // Get issues from comments
    const commentIssues = getIssuesFromComments(prData)
    commentIssues.forEach(issue => issueNumbers.add(issue))
    
    // Get issue from branch name if we don't have any yet
    if (issueNumbers.size === 0) {
      const branchIssue = getIssueFromBranch(prData.number)
      if (branchIssue) issueNumbers.add(branchIssue)
    }
    
    // Update PR data if we found any issues
    if (issueNumbers.size > 0) {
      prData.issue_numbers = Array.from(issueNumbers).sort((a, b) => a - b)
      fs.writeFileSync(filePath, JSON.stringify(prData, null, 2), 'utf8')
      console.log(`PR #${prData.number}: Added issue numbers`, prData.issue_numbers)
    } else {
      console.log(`PR #${prData.number}: No issue numbers found`)
    }
    
  } catch (error) {
    console.error(`Error processing file ${file}:`, error.message)
  }
}

// Main function
function main() {
  try {
    // Get all JSON files in the trimmed PRs directory
    const files = fs.readdirSync(CONFIG.TRIMMED_DIR)
      .filter(file => file.endsWith('.json') && file.startsWith('pr-'))
    
    console.log(`Found ${files.length} PR files to process`)
    
    // Process each file
    files.forEach((file, index) => {
      console.log(`\nProcessing ${index + 1}/${files.length}: ${file}`)
      processPRFile(file)
    })
    
    console.log('\nProcessing complete!')
    
  } catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }
}

// Run the script
main()
