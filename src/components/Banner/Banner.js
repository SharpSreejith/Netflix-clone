//import userEvent from '@testing-library/user-event'
import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY, imageURL} from '../../constants/constants'

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {

    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      const movie_num = Math.floor(Math.random() * response.data.results.length);
                setMovie(response.data.results[movie_num]);
    })

  }, [])

  return (
    <div className='banner' style={{ backgroundImage: `url(${movie ? imageURL + movie.backdrop_path : ""})` }}>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>

            <h1 className='Description'>{movie ? movie.overview: " "}</h1>
        </div>

        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
