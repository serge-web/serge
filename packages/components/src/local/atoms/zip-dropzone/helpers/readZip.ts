// Import JSZip library for working with ZIP files
import JSZip from 'jszip'

const readZip = async (file: File, onChange: (data: any, filename: string) => void): Promise<void> => {
  // Create a new instance of JSZip
  const zip = new JSZip()
  try {
    // Load the zip file contents asynchronously
    const result = await zip.loadAsync(file)

    // Iterate over each file in the zip file
    for (const filename in result.files) {
      const fileExt = filename.split('.').pop()
      if (fileExt === 'txt') {
        // Extract the contents of the text file
        const textContents = await result.files[filename].async('text')

        // Process the data as needed
        console.log(textContents)
      } else if (fileExt === 'csv') {
        // Extract the contents of the CSV file
        const csvContents = await result.files[filename].async('text')

        // Process the data as needed
        console.log(csvContents)
      } else if (fileExt === 'json') {
        // Extract the contents of the JSON file
        const jsonContents = await result.files[filename].async('text')
        const data = JSON.parse(jsonContents)
        onChange(data, filename)
      } else {
        // Handle other file types as needed
      }
    }
  } catch (error) {
    console.error(error)
  }
}

export default readZip
