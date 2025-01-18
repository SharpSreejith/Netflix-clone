import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {imageURL, API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube'
//import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';

function Rowpost(props) {
    const [movie, setMovie] = useState([]);
    const [urlID, seturlID] = useState('');
  
    useEffect(() => {
  
      axios.get(props.url).then((response)=>{
        //console.log(response.data);
        //const movie_num = Math.floor(Math.random() * response.data.results.length);
                  setMovie(response.data.results);
      }).catch(err=>{
        alert("Network API Error")
      })

    }, [])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    const handleMovie =(id)=>{
      console.log(id)
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
       if(response.data.length!==0)
       {
        seturlID(response.data.results[0])
       }else {
        console.log("Sorry, No related videos found in YouTube..!");
       }
      })
    }

  return (
    <div className='Row'>
      <h2>{props.title}</h2>
      <div className="posters"> 

      {movie.map((obj)=>
      <input  onClick={()=> handleMovie(obj.id)} className= {props.isSmall ? 'smallPoster' : 'poster'} alt="Poster" type="image" src={`${imageURL + obj.backdrop_path}`}  />
      )}
     
      
      </div>
     { urlID && <YouTube opts={opts} videoId={urlID.key}      />}
    </div>
  )
}

export default Rowpost
