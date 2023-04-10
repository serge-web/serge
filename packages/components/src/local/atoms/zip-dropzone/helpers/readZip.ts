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

        // The data variable is typed as an array of any type using the Array<any> syntax. 
        // The contents of the array are parsed from the 'jsonContents' string using the JSON.parse() method, and then only the 'data' property is extracted.
        const data: Array<any> = JSON.parse(jsonContents).data

        // Mark the '_rev' property of each object as undefined to exclude it from future bulk insertions
        const markExcluded = data.map((msg) => {
          const currentMessage = {
            ...msg,
            _rev: undefined
          }

          return currentMessage
        })

        // Call the provided 'onChange' function with the processed data and filename
        onChange(markExcluded, filename)
      } else {
        // Handle other file types as needed
      }
    }
  } catch (error) {
    console.error(error)
  }
}

export default readZip
