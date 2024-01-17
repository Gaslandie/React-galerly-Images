import React from 'react'
import employes from '../employes'
import Photos from './Photos'

export default function Gallery() {
  return (
    <div className='gallery'>
      {
        employes.map((employe,index) => (
          <Photos {...employe} />
        ))
      }
    </div>
  )
}
