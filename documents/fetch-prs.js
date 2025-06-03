#!/usr/bin/env node

/**
 * Script to fetch Pull Requests from the Serge GitHub repository
 * and save them to JSON files in the documents/PRs directory.
 * 
 * Usage: node fetch-prs.js [--since YYYY-MM-DD] [--max-pages N]
 */

const https = require('https')
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Configuration
const REPO_OWNER = 'serge-web'
const REPO_NAME = 'serge-web'
const OUTPUT_DIR = path.join(__dirname, 'PRs')
const PER_PAGE = 100

// Parse command line arguments
const args = process.argv.slice(2)
let sinceDate = '2021-01-01' // Default to fetching PRs from the last 2 years
let maxPages = 10 // Default max pages to fetch

for (let i = 0; i < args.length; i++) {
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
function makeRequest(path, page = 1) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `${path}?per_page=${PER_PAGE}&page=${page}&sort=updated&direction=desc`,
      method: 'GET',
      headers: {
        'User-Agent': 'Serge-Blog-Updater',
        'Accept': 'application/vnd.github.v3+json'
      }
    }

    // Add authentication if a GitHub token is available in the environment
    if (process.env.GITHUB_TOKEN) {
      options.headers.Authorization = `token ${process.env.GITHUB_TOKEN}`
    }

    const req = https.request(options, (res) => {
      let data = ''
      
      res.on('data', (chunk) => {
        data += chunk
      })
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const parsedData = JSON.parse(data)
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
    
    req.on('error', (error) => {
      reject(error)
    })
    
    req.end()
  })
}

/**
 * Fetch all pull requests since the specified date
 */
async function fetchPullRequests() {
  console.log(`Fetching pull requests for ${REPO_OWNER}/${REPO_NAME} since ${sinceDate}...`)
  
  let page = 1
  let hasNextPage = true
  let totalPRs = 0
  
  try {
    while (hasNextPage && page <= maxPages) {
      console.log(`Fetching page ${page}...`)
      
      const { data: prs, hasNextPage: nextPage } = await makeRequest(
        `/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=all&since=${sinceDate}`,
        page
      )
      
      hasNextPage = nextPage
      
      if (prs.length === 0) {
        console.log('No more pull requests found.')
        break
      }
      
      // Process each PR
      for (const pr of prs) {
        // Skip PRs that were updated before our since date
        const updatedAt = new Date(pr.updated_at)
        if (updatedAt < new Date(sinceDate)) {
          continue
        }
        
        // Fetch PR details
        const prNumber = pr.number
        console.log(`Processing PR #${prNumber}: ${pr.title}`)
        
        // Get PR details including reviews and comments
        const { data: prDetails } = await makeRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}`)
        
        // Save PR data to file
        const filename = path.join(OUTPUT_DIR, `pr-${prNumber}.json`)
        fs.writeFileSync(filename, JSON.stringify(prDetails, null, 2))
        
        totalPRs++
        
        // Avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
      
      page++
    }
    
    console.log(`Successfully fetched ${totalPRs} pull requests.`)
    
    // Create a summary file
    createSummaryFile()
    
  } catch (error) {
    console.error('Error fetching pull requests:', error.message)
    process.exit(1)
  }
}

/**
 * Create a summary file with basic stats about the PRs
 */
function createSummaryFile() {
  try {
    const files = fs.readdirSync(OUTPUT_DIR).filter(file => file.startsWith('pr-') && file.endsWith('.json'))
    
    const prs = files.map(file => {
      const data = JSON.parse(fs.readFileSync(path.join(OUTPUT_DIR, file), 'utf8'))
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
    prs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    
    // Group PRs by year and month
    const prsByMonth = {}
    
    prs.forEach(pr => {
      const date = new Date(pr.created_at)
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const key = `${year}-${month.toString().padStart(2, '0')}`
      
      if (!prsByMonth[key]) {
        prsByMonth[key] = []
      }
      
      prsByMonth[key].push(pr)
    })
    
    // Create summary file
    const summaryPath = path.join(OUTPUT_DIR, 'summary.json')
    fs.writeFileSync(summaryPath, JSON.stringify({
      total_prs: prs.length,
      prs_by_month: prsByMonth,
      prs: prs
    }, null, 2))
    
    console.log(`Summary file created at ${summaryPath}`)
    
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
    
    const months = Object.keys(prsByMonth).sort().reverse()
    
    months.forEach(month => {
      const [year, monthNum] = month.split('-')
      const monthName = new Date(year, parseInt(monthNum) - 1, 1).toLocaleString('default', { month: 'long' })
      
      markdown += `### ${monthName} ${year} (${prsByMonth[month].length} PRs)\n\n`
      
      prsByMonth[month].forEach(pr => {
        const status = pr.merged_at ? '✅ Merged' : (pr.state === 'closed' ? '❌ Closed' : '⏳ Open')
        const labels = pr.labels.length > 0 ? ` [${pr.labels.join(', ')}]` : ''
        
        markdown += `- [#${pr.number}](${pr.url}) ${status}: ${pr.title}${labels} (by @${pr.author})\n`
      })
      
      markdown += '\n'
    })
    
    // Add stats by contributor
    markdown += '## PRs by Contributor\n\n'
    
    const contributors = {}
    prs.forEach(pr => {
      if (!contributors[pr.author]) {
        contributors[pr.author] = 0
      }
      contributors[pr.author]++
    })
    
    const sortedContributors = Object.entries(contributors)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => `- @${name}: ${count} PRs`)
    
    markdown += sortedContributors.join('\n')
    
    // Write markdown file
    const markdownPath = path.join(OUTPUT_DIR, 'summary.md')
    fs.writeFileSync(markdownPath, markdown)
    
    console.log(`Markdown summary created at ${markdownPath}`)
    
  } catch (error) {
    console.error('Error creating markdown summary:', error.message)
  }
}

// Run the script
fetchPullRequests()
