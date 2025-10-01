var fs = require('fs')
var path = require('path')
var https = require('https')

// Configuration
var CONFIG = {
  TRIMMED_DIR: path.join(__dirname, 'trimmed_prs'),
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  RATE_LIMIT_DELAY: 1000, // 1 second between requests
  GITHUB_OWNER: 'serge-web',
  GITHUB_REPO: 'serge'
}

// Check for GitHub token
if (!CONFIG.GITHUB_TOKEN) {
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
        'Authorization': 'token ' + CONFIG.GITHUB_TOKEN,
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
              remaining: parseInt(res.headers['x-ratelimit-remaining'], 10) || 0
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

// Get changed files data for a PR
function getChangedFilesData(prNumber) {
  var url = '/repos/' + CONFIG.GITHUB_OWNER + '/' + CONFIG.GITHUB_REPO + 
            '/pulls/' + prNumber + '/files?per_page=100'
  
  console.log('  - Fetching changed files for PR #' + prNumber)
  
  return makeGitHubRequest(url)
    .then(function(result) {
      var files = result.data
      var totalChangedLines = 0
      
      // Calculate total changed lines (additions + deletions)
      files.forEach(function(file) {
        totalChangedLines += (file.additions || 0) + (file.deletions || 0)
      })
      
      return {
        fileCount: files.length,
        totalChangedLines: totalChangedLines
      }
    })
    .catch(function(error) {
      console.error('  Error fetching changed files for PR #' + prNumber + ':', error.message)
      return {
        fileCount: 0,
        totalChangedLines: 0
      }
    })
}

// Process a single PR file
function processPRFile(file) {
  return new Promise(function(resolve) {
    try {
      var filePath = path.join(CONFIG.TRIMMED_DIR, file)
      var prData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
      
      // Skip if we've already processed this PR
      if (prData.number_of_changed_files !== undefined) {
        console.log('Skipping already processed PR #' + prData.number)
        return resolve()
      }
      
      getChangedFilesData(prData.number)
        .then(function(filesData) {
          prData.number_of_changed_files = filesData.fileCount
          prData.total_changed_lines = filesData.totalChangedLines
          
          // Save the updated PR data
          fs.writeFileSync(
            filePath,
            JSON.stringify(prData, null, 2),
            'utf8'
          )
          
          console.log('PR #' + prData.number + 
                    ': ' + filesData.fileCount + ' files, ' + 
                    filesData.totalChangedLines + ' changed lines')
          resolve()
        })
        .catch(function(error) {
          console.error('Error processing PR #' + prData.number + ':', error.message)
          resolve() // Continue with next PR even if one fails
        })
      
    } catch (error) {
      console.error('Error processing file ' + file + ':', error.message)
      resolve() // Continue with next file even if one fails
    }
  })
}

// Process all PR files with rate limiting
function processAllPRs() {
  try {
    // Get all JSON files in the trimmed PRs directory
    var files = fs.readdirSync(CONFIG.TRIMMED_DIR)
      .filter(function(file) {
        return file.endsWith('.json') && file.startsWith('pr-')
      })
    
    console.log('Found ' + files.length + ' PR files to process')
    
    // Process files in sequence to avoid rate limiting
    var processNext = function(index) {
      if (index >= files.length) {
        console.log('\nProcessing complete!')
        return
      }
      
      var file = files[index]
      console.log('\n[' + (index + 1) + '/' + files.length + '] Processing ' + file)
      
      processPRFile(file)
        .then(function() {
          // Add delay to avoid hitting rate limits
          return new Promise(function(resolve) {
            setTimeout(function() {
              processNext(index + 1)
              resolve()
            }, CONFIG.RATE_LIMIT_DELAY)
          })
        })
    }
    
    // Start processing
    processNext(0)
    
  } catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }
}

// Run the script
processAllPRs()
