var fs = require('fs')
var path = require('path')

// Configuration
var CONFIG = {
  TRIMMED_DIR: path.join(__dirname, 'trimmed_prs'),
  OUTPUT_DIR: path.join(__dirname, 'important_prs')
}

// Scoring weights (adjust these to prioritize different factors)
var WEIGHTS = {
  CHANGED_FILES: 5,
  CHANGED_LINES: 1,  // Per 100 lines
  COMMENTS: 10,      // Per comment
  HAS_IMAGES: 50,    // Bonus for having any images
  BODY_LENGTH: 0.1,  // Per 100 characters
  ENHANCEMENT_LABEL: 30  // Bonus for having 'enhancement' label
}

// Create output directory if it doesn't exist
if (!fs.existsSync(CONFIG.OUTPUT_DIR)) {
  fs.mkdirSync(CONFIG.OUTPUT_DIR)
}

// Calculate a score for a PR based on importance factors
function calculatePRScore(pr) {
  var score = 0
  
  // Changed files
  if (pr.changed_files) {
    score += pr.changed_files * WEIGHTS.CHANGED_FILES
  }
  
  // Changed lines (additions + deletions)
  if (pr.additions && pr.deletions) {
    var totalLines = pr.additions + pr.deletions
    score += (totalLines / 100) * WEIGHTS.CHANGED_LINES
  }
  
  // Comments
  if (pr.comments_count) {
    score += pr.comments_count * WEIGHTS.COMMENTS
  }
  
  // Has images
  if (pr.images && pr.images.length > 0) {
    score += WEIGHTS.HAS_IMAGES
  }
  
  // Body length
  if (pr.body) {
    score += (pr.body.length / 100) * WEIGHTS.BODY_LENGTH
  }
  
  // Enhancement label
  if (pr.labels && pr.labels.some(function(label) {
    return (typeof label === 'string' ? label : label.name).toLowerCase() === 'enhancement'
  })) {
    score += WEIGHTS.ENHANCEMENT_LABEL
  }
  
  return Math.round(score * 100) / 100 // Round to 2 decimal places
}

// Process all PRs and identify the most important ones
function identifyImportantPRs() {
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
        var score = calculatePRScore(prData)
        
        prs.push({
          file: file,
          number: prData.number,
          title: prData.title,
          score: score,
          created_at: prData.created_at,
          url: prData.html_url,
          changed_files: prData.changed_files || 0,
          changed_lines: (prData.additions || 0) + (prData.deletions || 0),
          comments: prData.comments_count || 0,
          has_images: !!(prData.images && prData.images.length > 0)
        })
      } catch (error) {
        console.error('Error processing ' + file + ':', error.message)
      }
    })
    
    // Sort by score (descending)
    prs.sort(function(a, b) {
      return b.score - a.score
    })
    
    // Take top 10% or 50 PRs, whichever is smaller
    var topN = Math.min(Math.ceil(prs.length * 0.1), 50)
    var topPRs = prs.slice(0, topN)
    
    console.log('\nTop ' + topN + ' most important PRs:')
    console.log('-' + '-'.repeat(80))
    console.log('Score  PR#    Files  Lines  Cmnts  Imgs  Title')
    console.log('-' + '-'.repeat(80))
    
    // Copy top PRs to important_prs directory and display summary
    topPRs.forEach(function(pr, index) {
      var sourceFile = path.join(CONFIG.TRIMMED_DIR, pr.file)
      var targetFile = path.join(CONFIG.OUTPUT_DIR, pr.file)
      
      // Copy the file
      fs.copyFileSync(sourceFile, targetFile)
      
      // Display summary
      console.log(
        String(pr.score).padStart(6) + '  ' +
        '#' + String(pr.number).padEnd(5) + '  ' +
        String(pr.changed_files).padStart(5) + '  ' +
        String(pr.changed_lines).padStart(5) + '  ' +
        String(pr.comments).padStart(5) + '  ' +
        (pr.has_images ? '  ✓  ' : '     ') +
        ' ' + pr.title
      )
    })
    
    // Save the full ranking for reference
    fs.writeFileSync(
      path.join(CONFIG.OUTPUT_DIR, 'pr_ranking.json'),
      JSON.stringify({
        generated_at: new Date().toISOString(),
        total_prs: prs.length,
        top_prs: topN,
        prs: prs.map(function(pr) {
          return {
            number: pr.number,
            title: pr.title,
            score: pr.score,
            url: pr.url,
            changed_files: pr.changed_files,
            changed_lines: pr.changed_lines,
            comments: pr.comments,
            has_images: pr.has_images,
            created_at: pr.created_at
          }
        })
      }, null, 2),
      'utf8'
    )
    
    console.log('\nCopied top ' + topN + ' PRs to ' + CONFIG.OUTPUT_DIR)
    console.log('Full ranking saved to ' + path.join(CONFIG.OUTPUT_DIR, 'pr_ranking.json'))
    
  } catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }
}

// Run the script
identifyImportantPRs()
