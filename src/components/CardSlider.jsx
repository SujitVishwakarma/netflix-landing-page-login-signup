import React from 'react'
import Card from './Card'

const CardSlider = ({data, title}) => {
    if (data.length === 0) {
        return <div>No movies to display</div>;
      }
  return (
    <div>
      {data.map((movie, index)=>{
        return <Card movieData = {movie} index={index} key={movie.id}/>
      })

      }
    </div>
  )
}

export default CardSlider
