var fs = require('fs')
var path = require('path')

// Configuration
var PRS_DIR = path.join(__dirname, 'PRs')
var TRIMMED_DIR = path.join(__dirname, 'trimmed_prs')

// Create output directory if it doesn't exist
if (!fs.existsSync(TRIMMED_DIR)) {
  fs.mkdirSync(TRIMMED_DIR)
  console.log('Created directory:', TRIMMED_DIR)
}

// Function to trim a single PR file
function trimPR(prData) {
  return {
    number: prData.number,
    title: prData.title,
    state: prData.state,
    merged: prData.merged || false,
    created_at: prData.created_at,
    updated_at: prData.updated_at,
    closed_at: prData.closed_at,
    merged_at: prData.merged_at,
    author: {
      login: prData.user.login,
      html_url: prData.user.html_url
    },
    html_url: prData.html_url,
    comments_url: prData.comments_url,
    review_comments_url: prData.review_comments_url,
    review_comment_url: prData.review_comment_url,
    issue_url: prData.issue_url,
    body: prData.body,
    additions: prData.additions || 0,
    deletions: prData.deletions || 0,
    changed_files: prData.changed_files || 0,
    labels: prData.labels ? prData.labels.map(function(label) { 
      return typeof label === 'string' ? label : label.name 
    }) : []
  }
}

// Process all PR files
function processPRs() {
  try {
    // Get all JSON files in the PRs directory
    var files = fs.readdirSync(PRS_DIR).filter(function(file) {
      return file.endsWith('.json') && file.startsWith('pr-')
    })

    console.log('Found', files.length, 'PR files to process')

    var processed = 0
    var errors = 0

    files.forEach(function(file) {
      try {
        var filePath = path.join(PRS_DIR, file)
        var prData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
        
        // Skip if not a valid PR object
        if (!prData || typeof prData !== 'object' || !prData.number) {
          console.error('Skipping invalid PR file:', file)
          errors++
          return
        }

        // Trim the PR data
        var trimmed = trimPR(prData)
        
        // Save the trimmed version
        var outputFile = path.join(TRIMMED_DIR, file)
        fs.writeFileSync(
          outputFile,
          JSON.stringify(trimmed, null, 2),
          'utf8'
        )
        
        processed++
        if (processed % 10 === 0) {
          console.log('Processed', processed, 'PRs...')
        }
        
      } catch (error) {
        console.error('Error processing', file, ':', error.message)
        errors++
      }
    })

    console.log('\nProcessing complete!')
    console.log('Successfully processed:', processed, 'PRs')
    console.log('Errors:', errors)
    
  } catch (error) {
    console.error('Error processing PRs:', error.message)
    process.exit(1)
  }
}

// Run the script
processPRs()
