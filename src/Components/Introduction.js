import React from 'react'
import { useEffect, useState } from 'react'

export default function Introduction() {

    const [download, setDownload] = useState(true)
    
    // useeffect to download a powerpoint file
    useEffect(() => {
        if(download) {
            const link = document.createElement('a')
            link.href = 'Assets/Human Interactions with the on-board computers of next generation of aircrafts.pdf'
            link.download = 'Assets/Human Interactions with the on-board computers of next generation of aircrafts.pptx'
            link.click()
            link.remove()
            setDownload(false)
        }
    })

  return (
    <div>
        <h2>Please wait while the powerpoint being downloaded!</h2>

    </div>
  )
}
