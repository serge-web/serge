var fs = require('fs')
var path = require('path')
var https = require('https')

// Configuration
var config = {
  TRIMMED_DIR: path.join(__dirname, 'trimmed_prs'),
  GITHUB_TOKEN: process.env.GITHUB_TOKEN, // Make sure to set this environment variable
  RATE_LIMIT_DELAY: 1000, // 1 second delay between requests to avoid rate limiting
  MAX_COMMENTS_PER_PR: 50 // Maximum number of comments to fetch per PR
}

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
        'Accept': 'application/vnd.github.v3+json',
        'X-GitHub-Api-Version': '2022-11-28'
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
            resolve({
              data: parsedData,
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
function processPRFile(file) {
  return new Promise(function(resolve) {
  try {
    var filePath = path.join(TRIMMED_DIR, file)
    var prData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    
    // Skip if we've already processed comments for this PR
    if (prData.comments_data !== undefined || prData.review_comments_data !== undefined) {
      console.log('Skipping already processed PR #' + prData.number)
      return
    }
    
    // Skip if no comments or review comments
    if ((!prData.comments_count || prData.comments_count === 0) && 
        (!prData.review_comments_count || prData.review_comments_count === 0)) {
      console.log('Skipping PR #' + prData.number + ' - no comments')
      resolve()
      return
    }
    
    console.log('Processing PR #' + prData.number + 
               ' (' + (prData.comments_count || 0) + ' comments, ' + 
               (prData.review_comments_count || 0) + ' review comments)')
    
    // Process regular comments if they exist
    var processComments = prData.comments_count && prData.comments_count > 0
      ? function() {
          var commentsPath = prData.comments_url.replace('https://api.github.com', '')
          return makeGitHubRequest(commentsPath)
            .then(function(commentsResult) {
              // Store only the most recent comments, up to MAX_COMMENTS_PER_PR
              prData.comments_data = commentsResult.data
                .slice(0, MAX_COMMENTS_PER_PR)
                .map(function(comment) {
                  return {
                    id: comment.id,
                    user: comment.user ? comment.user.login : 'unknown',
                    created_at: comment.created_at,
                    updated_at: comment.updated_at,
                    body: comment.body
                  }
                })
              
              console.log('  - Added ' + prData.comments_data.length + ' comments')
              return commentsResult
            })
        }
      : function() {
          prData.comments_data = []
          return Promise.resolve()
        }
    
    // Process review comments if they exist
    var processReviewComments = prData.review_comments_count && prData.review_comments_count > 0
      ? function(prevResult) {
          var reviewCommentsPath = prData.review_comments_url.replace('https://api.github.com', '')
          return makeGitHubRequest(reviewCommentsPath)
            .then(function(reviewCommentsResult) {
              // Store only the most recent review comments, up to MAX_COMMENTS_PER_PR
              prData.review_comments_data = reviewCommentsResult.data
                .slice(0, MAX_COMMENTS_PER_PR)
                .map(function(comment) {
                  return {
                    id: comment.id,
                    user: comment.user ? comment.user.login : 'unknown',
                    created_at: comment.created_at,
                    updated_at: comment.updated_at,
                    body: comment.body,
                    path: comment.path,
                    diff_hunk: comment.diff_hunk,
                    html_url: comment.html_url
                  }
                })
              
              console.log('  - Added ' + prData.review_comments_data.length + ' review comments')
              return prevResult || reviewCommentsResult
            })
        }
      : function(prevResult) {
          prData.review_comments_data = []
          return Promise.resolve(prevResult)
        }
    
    // Process both types of comments in sequence
    processComments()
      .then(processReviewComments)
      .then(function(result) {
        // Save the updated PR data
        fs.writeFileSync(
          filePath,
          JSON.stringify(prData, null, 2),
          'utf8'
        )
        
        // Check rate limit if we have a result
        if (result && result.remaining && result.remaining < 100) {
          console.log('  ⚠️  Rate limit getting low:', result.remaining, 'requests remaining')
        }
        
        // Add delay to avoid hitting rate limits
        return new Promise(function(resolveDelay) {
          setTimeout(function() {
            resolveDelay()
            resolve()
          }, RATE_LIMIT_DELAY)
        })
      })
      .catch(function(error) {
        console.error('  Error processing PR #' + prData.number + ':', error.message)
        resolve() // Continue with next PR even if one fails
      })
    
  } catch (error) {
    console.error('Error reading PR file', file, ':', error.message)
    resolve()
  }
}
}

// Main module
var CommentAppender = (function() {
  // Process files in sequence
  function processFilesSequentially(files, index) {
    if (index >= files.length) {
      return Promise.resolve()
    }
    
    return processPRFile(files[index])
      .then(function() {
        return processFilesSequentially(files, index + 1)
      })
  }
  
  // Process all PRs
  function processAllPRs() {
  try {
    // Get all JSON files in the trimmed PRs directory
    var files = fs.readdirSync(TRIMMED_DIR).filter(function(file) {
      return file.endsWith('.json') && file.startsWith('pr-')
    })
    
    console.log('Found', files.length, 'PR files to process')
    
    // Process files in sequence to avoid rate limiting
    return processFilesSequentially(files, 0)
      .then(function() {
        console.log('\nProcessing complete!')
      })
      .catch(function(error) {
        console.error('Error processing PRs:', error.message)
        process.exit(1)
      })
  } catch (error) {
    console.error('Error processing PRs:', error.message)
    process.exit(1)
  }
}

// Run the script
processAllPRs()
