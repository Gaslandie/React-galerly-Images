import React from 'react'

export default function Photos(props) {
  return (
    <div className='photo'>
      <img src={props.imageUrl} alt={`${props.name}`} className='image'/>
      <h3 className='name'>{props.name}</h3>
      <h3 className='job'>{props.job}</h3>
      <h3 className='age'>{props.age}</h3>
    </div>
  )
}
