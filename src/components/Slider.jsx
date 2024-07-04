import { fetchSignInMethodsForEmail } from 'firebase/auth'
import React from 'react'
import CardSlider from './CardSlider'

const Slider = ({ movies }) => {
  const getMoviesFromRange = (from, to) => {
    if (movies && Array.isArray(movies)) {
      return movies.slice(from, to);
    }
    return [];
  }
    console.log(getMoviesFromRange);
  return (
    <div>
      <CardSlider title ="Trending Now" data={getMoviesFromRange(0,10)}/>
      <CardSlider title ="New Release" data={getMoviesFromRange(10,20)}/>

      <CardSlider 
      title ="Blockbuster Movies" 
      data={getMoviesFromRange(20,30)}

      />
      <CardSlider 
      title ="Popular on Netflix" 
      data={getMoviesFromRange(30,40)}
        
      />
      <CardSlider title ="Action Movies" data={getMoviesFromRange(40,50)}/>
      <CardSlider title ="Epic Movies" data={getMoviesFromRange(50,60)}/>
    </div>
  )
}

export default Slider
