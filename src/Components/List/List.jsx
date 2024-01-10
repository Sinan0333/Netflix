import React, { useState,useEffect } from 'react'
import axios from '../../axios'
import './List.css'
import {API_KEY, imageUrl} from '../../Constants/Constants'
import YouTube from 'react-youtube';

const opts = {
  height: '500px%',
  width: '100%',
  playerVars: {
    autoplay: 0,
  },
};

function List(props) {
  const [movies,setMovies] = useState([])
  const [urlId,setUrlId] =useState()

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
    })
  },[])

  const showTrailer=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results){
        setUrlId(response.data.results[0])
      }
      
    })
  }

  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className='card'>
        {
          movies.map((obj,ind)=> <img key={ind} onClick={()=>showTrailer(obj.id)} className='card-img' src={`${imageUrl+obj.poster_path}`} alt="poster" />)
        }
      </div>
       { urlId && <YouTube videoId={urlId.key}  opts={opts} /> }
    </div>
  )
}

export default List
