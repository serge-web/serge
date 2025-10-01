var fs = require('fs')
var path = require('path')
var https = require('https')

// Configuration
var config = {
  TRIMMED_DIR: path.join(__dirname, 'trimmed_prs'),
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  RATE_LIMIT_DELAY: 1000,
  MAX_COMMENTS_PER_PR: 50
}

// Check for GitHub token
if (!config.GITHUB_TOKEN) {
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
        'Authorization': 'token ' + config.GITHUB_TOKEN,
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
      var filePath = path.join(config.TRIMMED_DIR, file)
      var prData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
      
      // Skip if already processed or no comments
      if (prData.comments_data !== undefined || prData.review_comments_data !== undefined) {
        console.log('Skipping already processed PR #' + prData.number)
        resolve()
        return
      }
      
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
                prData.comments_data = commentsResult.data
                  .slice(0, config.MAX_COMMENTS_PER_PR)
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
                prData.review_comments_data = reviewCommentsResult.data
                  .slice(0, config.MAX_COMMENTS_PER_PR)
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
      
      // Process both types of comments
      processComments()
        .then(processReviewComments)
        .then(function(result) {
          fs.writeFileSync(
            filePath,
            JSON.stringify(prData, null, 2),
            'utf8'
          )
          
          if (result && result.remaining && result.remaining < 100) {
            console.log('  ⚠️  Rate limit getting low:', result.remaining, 'requests remaining')
          }
          
          return new Promise(function(resolveDelay) {
            setTimeout(function() {
              resolveDelay()
              resolve()
            }, config.RATE_LIMIT_DELAY)
          })
        })
        .catch(function(error) {
          console.error('  Error processing PR #' + prData.number + ':', error.message)
          resolve()
        })
      
    } catch (error) {
      console.error('Error reading PR file', file, ':', error.message)
      resolve()
    }
  })
}

// Process all PR files in sequence
function processAllPRs() {
  try {
    var files = fs.readdirSync(config.TRIMMED_DIR).filter(function(file) {
      return file.endsWith('.json') && file.startsWith('pr-')
    })
    
    console.log('Found', files.length, 'PR files to process')
    
    // Process files in sequence
    return files.reduce(function(promise, file) {
      return promise.then(function() {
        return processPRFile(file)
      })
    }, Promise.resolve())
    .then(function() {
      console.log('\nProcessing complete!')
    })
    .catch(function(error) {
      console.error('Error processing PRs:', error.message)
      process.exit(1)
    })
    
  } catch (error) {
    console.error('Error reading PR files:', error.message)
    process.exit(1)
  }
}

// Start processing
processAllPRs()
