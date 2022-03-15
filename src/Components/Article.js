import React from 'react'
import {useEffect} from 'react'
import { useParams } from 'react-router-dom'

import Article_1 from './Articles/Article_1'
import Article_2 from './Articles/Article_2'
import Article_3 from './Articles/Article_3'
import Article_4 from './Articles/Article_4'
import Article_5 from './Articles/Article_5'

export default function Article() {

    const { id } = useParams()

    useEffect(() => {
        console.log(id)
    },[])

  return (
    <div className="article">
        {
            id === '1' ? < Article_1 /> : 
            id === '2' ? < Article_2 /> : 
            id === '3' ? < Article_3 /> : 
            id === '4' ? < Article_4 /> : 
            id === '5' ? < Article_5 /> : null
        }
    </div>
  )
}
