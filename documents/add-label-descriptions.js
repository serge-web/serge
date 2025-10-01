var fs = require('fs')
var path = require('path')

// Configuration
var CONFIG = {
  LABELS_FILE: path.join(__dirname, 'pr_labels.json'),
  OUTPUT_FILE: path.join(__dirname, 'pr_labels_with_descriptions.json')
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
  '4p9': 'Related to PFT-9',
  '4p10': 'Related to PFT-10',
  '4watu': 'Related to WATU trial'
}

// Generate a description for a label based on its name
function generateDescription(labelName) {
  // Check for priority indicators
  if (/^[A-Za-z]+-[HML]$/.test(labelName)) {
    var parts = labelName.split('-')
    var priority = {
      'H': 'High',
      'M': 'Medium',
      'L': 'Low'
    }[parts[1]] || ''
    return priority + ' priority ' + parts[0] + ' task'
  }
  
  // Check for version or phase numbers (e.g., 4p9, 5.1)
  if (/^\d+[p\.]\d+$/.test(labelName)) {
    return 'Related to ' + labelName.replace('p', '.')
  }
  
  // Check for common patterns
  if (labelName.includes('bug') || labelName.includes('fix')) {
    return 'Issue or fix related to ' + labelName
  }
  
  if (labelName.includes('feat') || labelName.includes('enhance')) {
    return 'New feature or enhancement: ' + labelName
  }
  
  if (labelName.includes('doc')) {
    return 'Documentation related to ' + labelName
  }
  
  if (labelName.includes('test')) {
    return 'Testing related to ' + labelName
  }
  
  // Default description
  return 'Label: ' + labelName
}

// Main function
function addLabelDescriptions() {
  try {
    // Read the existing labels file
    var labelsData = JSON.parse(fs.readFileSync(CONFIG.LABELS_FILE, 'utf8'))
    
    // Add descriptions to labels
    labelsData.labels = labelsData.labels.map(function(label) {
      // Use predefined description if available
      if (LABEL_DESCRIPTIONS[label.name]) {
        label.description = LABEL_DESCRIPTIONS[label.name]
      } else {
        // Generate a description based on the label name
        label.description = generateDescription(label.name)
      }
      return label
    })
    
    // Save the updated data
    fs.writeFileSync(
      CONFIG.OUTPUT_FILE,
      JSON.stringify(labelsData, null, 2),
      'utf8'
    )
    
    console.log('Added descriptions to labels and saved to:', CONFIG.OUTPUT_FILE)
    
    // Show a summary
    var withDescriptions = labelsData.labels.filter(function(label) {
      return label.description
    }).length
    
    console.log('\nLabel Summary:')
    console.log('-' + '-'.repeat(20))
    console.log('Total labels:', labelsData.labels.length)
    console.log('Labels with descriptions:', withDescriptions)
    
  } catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }
}

// Run the script
addLabelDescriptions()
