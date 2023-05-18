// Import JSZip library for working with ZIP files
import JSZip from 'jszip'
import { Wargame, Message } from '@serge/custom-types'

const readZip = async (file: File, onChange: (data: Array<Wargame | Message>, filename: string) => void): Promise<void> => {
  // Create a new instance of JSZip
  const zip = new JSZip()
  try {
    // Load the zip file contents asynchronously
    const result = await zip.loadAsync(file)
    const wargameData: Array<Wargame | Message> = []

    const fileName = file.name.replace('.zip', '')
    // Iterate over each file in the zip file
    for (const filename in result.files) {
      const fileExt = filename.split('.').pop()
      if (fileExt === 'json') {
        // Extract the contents of the JSON file
        const jsonContents = await result.files[filename].async('text')

        // The data variable is typed as an array of any type using the Array<any> syntax.
        // The contents of the array are parsed from the 'jsonContents' string using the JSON.parse() method, and then only the 'data' property is extracted.
        const jsonData = JSON.parse(jsonContents)
        const id = filename.replace('.json', '').replace(/_/g, ':')

        // Mark the '_rev' property of each object as undefined to exclude it from future bulk insertions
        const markExcluded = {
          ...jsonData,
          _rev: undefined,
          _id: id
        }

        wargameData.push(markExcluded)
      }
    }
    // Call the provided 'onChange' function with the processed data and filename
    onChange(wargameData, fileName)
  } catch (error) {
    console.error(error)
  }
}

export default readZip
