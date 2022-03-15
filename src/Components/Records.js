import React from 'react'
import { useState, useEffect } from 'react'

export default function Records() {

    const [download, setDownload] = useState(true)

    // useeffect to download a powerpoint file
    useEffect(() => {
        if (download) {
            const link = document.createElement('a')
            link.href = 'Assets/fsx-pilot-records.pdf'
            link.download = 'Assets/fsx-pilot-records.pdf'
            link.click()
            link.remove()
            setDownload(false)
        }
    })

  return (
      <h2>Please wait while the PDF being downloaded!</h2>
  )
}
