import {useEffect, useState} from "react"
import {saveAs} from 'file-saver'
import getFile from "./api/mock"

function FileDownload() {
  const [downloading, setDownloading] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (downloading) {
      getFile()
        .then(response => {
          saveAs(base64toBlob(response.fileDataBase64, response.contentType), response.fileName)
          setDownloading(false)
          setCount(c => c + 1)
        })
    }
  }, [downloading])

  return (
    <div>
      {downloading ? (
        <button disabled>Скачивается...</button>
      ) : (
        <button onClick={() => setDownloading(true)}>Скачать файл</button>
      )}
      <p>Скачан {count} раз</p>
    </div>
  )
}


function base64toBlob(base64data, contentType = '', sliceSize = 512) {
  const byteCharacters = atob(base64data)
  const byteArrays = []

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize)

    const byteNumbers = new Array(slice.length)
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    const byteArray = new Uint8Array(byteNumbers)
    byteArrays.push(byteArray)
  }

  return new Blob(byteArrays, {type: contentType})
}

export default FileDownload
