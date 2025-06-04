var fs = require('fs')
var path = require('path')
var https = require('https')

// Configuration
var TRIMMED_DIR = path.join(__dirname, 'trimmed_prs')
var GITHUB_TOKEN = process.env.GITHUB_TOKEN // Make sure to set this environment variable
var RATE_LIMIT_DELAY = 1000 // 1 second delay between requests to avoid rate limiting

// Check for GitHub token
if (!GITHUB_TOKEN) {
  console.error('Error: GITHUB_TOKEN environment variable is not set.')
  console.error('Please set it with: export GITHUB_TOKEN=your_github_token')
  process.exit(1)
}

// Make an HTTP request to GitHub API
function makeGitHubRequest(url) {
  return new Promise(function(resolve, reject) {
    var options = {
      hostname: 'api.github.com',
      path: url,
      method: 'GET',
      headers: {
        'User-Agent': 'Serge-Blog-Updater',
        'Authorization': 'token ' + GITHUB_TOKEN,
        'Accept': 'application/vnd.github.v3+json'
      }
    }

    var req = https.request(options, function(res) {
      var data = ''
      
      res.on('data', function(chunk) {
        data += chunk
      })
      
      res.on('end', function() {
        if (res.statusCode === 200) {
          try {
            var parsedData = JSON.parse(data)
            // For list endpoints, we get the length of the array
            // For single resource, we might get a single object
            resolve({
              data: parsedData,
              count: Array.isArray(parsedData) ? parsedData.length : 1,
              remaining: res.headers['x-ratelimit-remaining']
            })
          } catch (error) {
            reject(new Error('Failed to parse response: ' + error.message))
          }
        } else {
          reject(new Error('Request failed with status code ' + res.statusCode + ': ' + data))
        }
      })
    })
    
    req.on('error', function(error) {
      reject(error)
    })
    
    req.end()
  })
}

// Process a single PR file
async function processPRFile(file) {
  try {
    var filePath = path.join(TRIMMED_DIR, file)
    var prData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    
    // Skip if we've already processed this file
    if (prData.comments_count !== undefined && prData.review_comments_count !== undefined) {
      console.log('Skipping already processed PR #' + prData.number)
      return
    }
    
    console.log('Processing PR #' + prData.number)
    
    // Extract the API path from the comments URL
    var commentsPath = prData.comments_url.replace('https://api.github.com', '')
    var reviewCommentsPath = prData.review_comments_url.replace('https://api.github.com', '')
    
    try {
      // Get regular comments count
      var commentsResult = await makeGitHubRequest(commentsPath)
      var reviewCommentsResult = await makeGitHubRequest(reviewCommentsPath)
      
      // Update the PR data
      prData.comments_count = commentsResult.count
      prData.review_comments_count = reviewCommentsResult.count
      prData.total_comments = commentsResult.count + reviewCommentsResult.count
      
      // Save the updated PR data
      fs.writeFileSync(
        filePath,
        JSON.stringify(prData, null, 2),
        'utf8'
      )
      
      console.log('  - Added counts to PR #' + prData.number + 
                 ': ' + commentsResult.count + ' comments, ' + 
                 reviewCommentsResult.count + ' review comments')
      
      // Check rate limit
      if (commentsResult.remaining && commentsResult.remaining < 100) {
        console.log('  ⚠️  Rate limit getting low:', commentsResult.remaining, 'requests remaining')
      }
      
      // Add delay to avoid hitting rate limits
      await new Promise(function(resolve) {
        setTimeout(resolve, RATE_LIMIT_DELAY)
      })
      
    } catch (error) {
      console.error('  Error processing PR #' + prData.number + ':', error.message)
      // Continue with next PR even if one fails
    }
    
  } catch (error) {
    console.error('Error reading PR file', file, ':', error.message)
  }
}

// Main function to process all PRs
async function processAllPRs() {
  try {
    // Get all JSON files in the trimmed PRs directory
    var files = fs.readdirSync(TRIMMED_DIR).filter(function(file) {
      return file.endsWith('.json') && file.startsWith('pr-')
    })
    
    console.log('Found', files.length, 'PR files to process')
    
    // Process files in sequence to avoid rate limiting
    for (var i = 0; i < files.length; i++) {
      await processPRFile(files[i])
    }
    
    console.log('\nProcessing complete!')
    
  } catch (error) {
    console.error('Error processing PRs:', error.message)
    process.exit(1)
  }
}

// Run the script
processAllPRs()
