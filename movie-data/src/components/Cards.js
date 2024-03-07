import React from 'react'
import './Cards.css'
function Cards(props) {
  return (
    <div className='card'>
      <div className='left-side'>
      <div className='top-section'>
        <div><img src={props.img} className='image'></img></div>
       <div><h1 className='heading'>{props.movieTitle}</h1>
        <p className='year'>{props.year}</p>
        <div className='time-genre'>
        <div className='time'>{props.time}</div>
        <div className='genre'>{props.genre}</div>
        </div>
        </div> 
        </div> 
        <p className='caption'>{props.caption}</p>
      </div>
      <div className='right-side'>
        <img src={props.mainImg} className='large-image'></img>
      </div>
    </div>
  )
}

export default Cards