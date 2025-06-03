var fs = require('fs')
var path = require('path')

// Configuration
var CONFIG = {
  TRIMMED_DIR: path.join(__dirname, 'trimmed_prs'),
  OUTPUT_FILE: path.join(__dirname, 'pr_labels.json')
}

// Known labels and their descriptions
var LABEL_DESCRIPTIONS = {
  'T-H': 'High priority technical task',
  'T-M': 'Medium priority technical task',
  'T-L': 'Low priority technical task',
  'UI-H': 'High priority UI task',
  'bug': 'Indicates an unexpected problem or unintended behavior',
  'enhancement': 'New feature or improvement',
  'wontfix': 'This will not be worked on',
  'spatial': 'Related to spatial functionality',
  'Technical Debt': 'Technical debt that needs to be addressed',
  '4p9': 'Related to Phase 4, Part 9 of the project',
  '4p10': 'Related to Phase 4, Part 10 of the project',
  '4watu': 'Related to Phase 4 WATU component'
}

// Main function to generate the labels file
function generateLabelsFile() {
  try {
    // Get all JSON files in the trimmed PRs directory
    var files = fs.readdirSync(CONFIG.TRIMMED_DIR)
      .filter(function(file) {
        return file.endsWith('.json') && file.startsWith('pr-')
      })
    
    console.log('Found ' + files.length + ' PR files to process')
    
    // Object to store label data: { labelName: { count: number, prs: number[] } }
    var labels = {}
    var totalPRs = 0
    var prsWithLabels = 0
    
    // Process each PR file
    files.forEach(function(file) {
      try {
        var filePath = path.join(CONFIG.TRIMMED_DIR, file)
        var prData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
        var prNumber = prData.number
        totalPRs++
        
        // Process PR labels
        if (prData.labels && Array.isArray(prData.labels) && prData.labels.length > 0) {
          prsWithLabels++
          
          prData.labels.forEach(function(label) {
            var labelName = typeof label === 'string' ? label : label.name
            
            if (!labelName) return
            
            if (!labels[labelName]) {
              labels[labelName] = {
                count: 0,
                prs: []
              }
            }
            
            // Only add PR number if it's not already in the list
            if (labels[labelName].prs.indexOf(prNumber) === -1) {
              labels[labelName].count++
              labels[labelName].prs.push(prNumber)
            }
          })
        }
        
        // Process issue labels from linked issues
        if (prData.issues && Array.isArray(prData.issues)) {
          prData.issues.forEach(function(issue) {
            if (issue.labels && Array.isArray(issue.labels)) {
              issue.labels.forEach(function(issueLabel) {
                var issueLabelName = typeof issueLabel === 'string' ? issueLabel : issueLabel.name
                
                if (!issueLabelName) return
                
                if (!labels[issueLabelName]) {
                  labels[issueLabelName] = {
                    count: 0,
                    prs: []
                  }
                }
                
                // Only add PR number if it's not already in the list
                if (labels[issueLabelName].prs.indexOf(prNumber) === -1) {
                  labels[issueLabelName].count++
                  labels[issueLabelName].prs.push(prNumber)
                }
              })
            }
          })
        }
        
      } catch (error) {
        console.error('Error processing file ' + file + ':', error.message)
      }
    })
    
    // Convert to array and sort by count (descending)
    var sortedLabels = Object.keys(labels).map(function(labelName) {
      var labelInfo = {
        name: labelName,
        count: labels[labelName].count,
        prs: labels[labelName].prs.sort(function(a, b) { return a - b })
      }
      
      // Add description if known
      if (LABEL_DESCRIPTIONS[labelName]) {
        labelInfo.description = LABEL_DESCRIPTIONS[labelName]
      }
      
      return labelInfo
    }).sort(function(a, b) {
      return b.count - a.count || a.name.localeCompare(b.name)
    })
    
    // Prepare the output object
    var output = {
      generated_at: new Date().toISOString(),
      total_prs: totalPRs,
      prs_with_labels: prsWithLabels,
      total_unique_labels: sortedLabels.length,
      labels: sortedLabels
    }
    
    // Write to file
    fs.writeFileSync(
      CONFIG.OUTPUT_FILE,
      JSON.stringify(output, null, 2),
      'utf8'
    )
    
    console.log('\nGenerated ' + CONFIG.OUTPUT_FILE)
    console.log('-' + '-'.repeat(CONFIG.OUTPUT_FILE.length))
    console.log('Total PRs processed: ' + totalPRs)
    console.log('PRs with at least one label: ' + prsWithLabels + ' (' + 
                Math.round((prsWithLabels / totalPRs) * 100) + '% of total)')
    console.log('Total unique labels: ' + sortedLabels.length)
    
    // Show top 10 most common labels
    console.log('\nTop 10 most common labels:')
    console.log('--------------------------')
    sortedLabels.slice(0, 10).forEach(function(label, index) {
      console.log((index + 1) + '. ' + label.name + ' (' + label.count + ' PRs)')
    })
    
  } catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }
}

// Run the script
generateLabelsFile()
