import {useState} from "react"
import {saveAs} from 'file-saver'
import requestFile from "./api"
import base64toBlob from "./base64toBlob";

export default function FileDownload() {

  const [count, setCount] = useState(0)
  const [downloading, setDownloading] = useState(false)
  const [noOpenIos, setNoOpenIos] = useState(false)

  const toggleNoOpenIos = () => setNoOpenIos(!noOpenIos)

  const downloadFile = async () => {
    setDownloading(true)
    const res = await requestFile()
    const contentType = noOpenIos ? res.contentType + ';charset=utf-8' : res.contentType
    saveAs(base64toBlob(res.base64Data, contentType), res.fileName)
    setDownloading(false)
    setCount(c => c + 1)
  }

  return (
    <div>
      <input onClick={toggleNoOpenIos} checked={noOpenIos} disabled={downloading} type="checkbox" id="no-open-ios"/>
      <label htmlFor="no-open-ios">Скачать, но не открывать <small>(для Safari / iOS)</small></label>
      <button onClick={() => downloadFile()} disabled={downloading}>
        {downloading ? 'Скачивается…' : 'Скачать файл'}
      </button>
      <p>Файл скачан {count} раз</p>
    </div>
  )
}
