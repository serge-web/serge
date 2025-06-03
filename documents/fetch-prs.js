#!/usr/bin/env node

/**
 * Script to fetch Pull Requests from the Serge GitHub repository
 * and save them to JSON files in the documents/PRs directory.
 * 
 * Usage: node fetch-prs.js [--since YYYY-MM-DD] [--max-pages N]
 */

var https = require('https')
var fs = require('fs')
var path = require('path')
var execSync = require('child_process').execSync

// Configuration
var REPO_OWNER = 'serge-web'
var REPO_NAME = 'serge-web'
var OUTPUT_DIR = path.join(__dirname, 'PRs')
var PER_PAGE = 100

// Parse command line arguments
var args = process.argv.slice(2)
var sinceDate = '2021-01-01' // Default to fetching PRs from the last 2 years
var maxPages = 10 // Default max pages to fetch

for (var i = 0; i < args.length; i++) {
  if (args[i] === '--since' && i + 1 < args.length) {
    sinceDate = args[i + 1]
    i++
  } else if (args[i] === '--max-pages' && i + 1 < args.length) {
    maxPages = parseInt(args[i + 1], 10)
    i++
  }
}

// Ensure the output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

/**
 * Make a request to the GitHub API
 * @param {string} path - API path
 * @param {number} page - Page number
 * @returns {Promise<Object>} - Response data
 */
function makeRequest(path, page) {
  page = page || 1;
  return new Promise(function(resolve, reject) {
    // Check if path already has query parameters
    var separator = path.includes('?') ? '&' : '?'
    
    var options = {
      hostname: 'api.github.com',
      path: path + separator + 'per_page=' + PER_PAGE + '&page=' + page + '&sort=updated&direction=desc',
      method: 'GET',
      headers: {
        'User-Agent': 'Serge-Blog-Updater',
        'Accept': 'application/vnd.github.v3+json'
      }
    }

    // Add authentication if a GitHub token is available in the environment
    if (process.env.GITHUB_TOKEN) {
      options.headers.Authorization = 'token ' + process.env.GITHUB_TOKEN
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
              hasNextPage: res.headers.link && res.headers.link.includes('rel="next"')
            })
          } catch (error) {
            reject(new Error(`Failed to parse response: ${error.message}`))
          }
        } else {
          reject(new Error(`Request failed with status code ${res.statusCode}: ${data}`))
        }
      })
    })
    
    req.on('error', function(error) {
      reject(error)
    })
    
    req.end()
  })
}

/**
 * Fetch all pull requests since the specified date
 */
function fetchPullRequests() {
  console.log('Fetching pull requests for ' + REPO_OWNER + '/' + REPO_NAME + ' since ' + sinceDate + '...')
  
  var page = 1
  var hasNextPage = true
  var totalPRs = 0
  
  function processPage() {
    if (!hasNextPage || page > maxPages) {
      console.log('Successfully fetched ' + totalPRs + ' pull requests.')
      createSummaryFile()
      return
    }
    
    console.log('Fetching page ' + page + '...')
    
    makeRequest(
      '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/pulls?state=all&since=' + sinceDate,
      page
    ).then(function(response) {
      var prs = response.data
      hasNextPage = response.hasNextPage
      
      if (prs.length === 0) {
        console.log('No more pull requests found.')
        console.log('Successfully fetched ' + totalPRs + ' pull requests.')
        createSummaryFile()
        return
      }
      
      // Process PRs sequentially to avoid rate limiting
      function processPRs(index) {
        if (index >= prs.length) {
          page++
          setTimeout(processPage, 1000) // Wait a second before fetching next page
          return
        }
        
        var pr = prs[index]
        
        // Skip PRs that were updated before our since date
        var updatedAt = new Date(pr.updated_at)
        if (updatedAt < new Date(sinceDate)) {
          processPRs(index + 1)
          return
        }
        
        // Fetch PR details
        var prNumber = pr.number
        console.log('Processing PR #' + prNumber + ': ' + pr.title)
        
        makeRequest('/repos/' + REPO_OWNER + '/' + REPO_NAME + '/pulls/' + prNumber)
          .then(function(detailsResponse) {
            var prDetails = detailsResponse.data
            
            // Save PR data to file
            var filename = path.join(OUTPUT_DIR, 'pr-' + prNumber + '.json')
            fs.writeFileSync(filename, JSON.stringify(prDetails, null, 2))
            
            totalPRs++
            
            // Process next PR after a delay to avoid rate limiting
            setTimeout(function() {
              processPRs(index + 1)
            }, 1000)
          })
          .catch(function(error) {
            console.error('Error fetching PR details:', error.message)
            // Continue with next PR despite error
            setTimeout(function() {
              processPRs(index + 1)
            }, 1000)
          })
      }
      
      processPRs(0)
    }).catch(function(error) {
      console.error('Error fetching pull requests:', error.message)
      process.exit(1)
    })
  }
  
  processPage()
}

/**
 * Create a summary file with basic stats about the PRs
 */
function createSummaryFile() {
  try {
    var files = fs.readdirSync(OUTPUT_DIR).filter(function(file) { return file.startsWith('pr-') && file.endsWith('.json') })
    
    var prs = files.map(function(file) {
      var data = JSON.parse(fs.readFileSync(path.join(OUTPUT_DIR, file), 'utf8'))
      return {
        number: data.number,
        title: data.title,
        author: data.user.login,
        created_at: data.created_at,
        merged_at: data.merged_at,
        state: data.state,
        labels: data.labels.map(label => label.name),
        additions: data.additions,
        deletions: data.deletions,
        changed_files: data.changed_files,
        url: data.html_url
      }
    })
    
    // Sort by creation date (newest first)
    prs.sort(function(a, b) { return new Date(b.created_at) - new Date(a.created_at) })
    
    // Group PRs by year and month
    var prsByMonth = {}
    
    prs.forEach(pr => {
      var date = new Date(pr.created_at)
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var key = year + '-' + month.toString().padStart(2, '0')
      
      if (!prsByMonth[key]) {
        prsByMonth[key] = []
      }
      
      prsByMonth[key].push(pr)
    })
    
    // Create summary file
    var summaryPath = path.join(OUTPUT_DIR, 'summary.json')
    fs.writeFileSync(summaryPath, JSON.stringify({
      total_prs: prs.length,
      prs_by_month: prsByMonth,
      prs: prs
    }, null, 2))
    
    console.log('Summary file created at ' + summaryPath)
    
    // Create a markdown summary
    createMarkdownSummary(prs, prsByMonth)
    
  } catch (error) {
    console.error('Error creating summary file:', error.message)
  }
}

/**
 * Create a markdown summary of the PRs
 */
function createMarkdownSummary(prs, prsByMonth) {
  try {
    let markdown = '# Serge Pull Request Summary\n\n'
    
    markdown += `Total PRs: ${prs.length}\n\n`
    
    // Add stats by month
    markdown += '## PRs by Month\n\n'
    
    var months = Object.keys(prsByMonth).sort().reverse()
    
    months.forEach(function(month) {
      var parts = month.split('-'); var year = parts[0]; var monthNum = parts[1]
      var monthName = new Date(year, parseInt(monthNum) - 1, 1).toLocaleString('default', { month: 'long' })
      
      markdown += '### ' + monthName + ' ' + year + ' (' + prsByMonth[month].length + ' PRs)\n\n'
      
      prsByMonth[month].forEach(pr => {
        var status = pr.merged_at ? '✅ Merged' : (pr.state === 'closed' ? '❌ Closed' : '⏳ Open')
        var labels = pr.labels.length > 0 ? ' [' + pr.labels.join(', ') + ']' : ''
        
        markdown += '- [#' + pr.number + '](' + pr.url + ') ' + status + ': ' + pr.title + labels + ' (by @' + pr.author + ')\n'
      })
      
      markdown += '\n'
    })
    
    // Add stats by contributor
    markdown += '## PRs by Contributor\n\n'
    
    var contributors = {}
    prs.forEach(pr => {
      if (!contributors[pr.author]) {
        contributors[pr.author] = 0
      }
      contributors[pr.author]++
    })
    
    var sortedContributors = Object.entries(contributors)
      .sort(function(a, b) { return b[1] - a[1] })
      .map(function(entry) { var name = entry[0]; var count = entry[1]; return '- @' + name + ': ' + count + ' PRs' })
    
    markdown += sortedContributors.join('\n')
    
    // Write markdown file
    var markdownPath = path.join(OUTPUT_DIR, 'summary.md')
    fs.writeFileSync(markdownPath, markdown)
    
    console.log('Markdown summary created at ' + markdownPath)
    
  } catch (error) {
    console.error('Error creating markdown summary:', error.message)
  }
}

// Run the script
fetchPullRequests()
