import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import './Banner.css'

function Banner() {
  const [banner,setBanner] =useState('')
  useEffect(()=>{
    const randomNumber = Math.floor(Math.random() * 20);
      axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        setBanner(response.data.results[randomNumber])
        console.log(response.data.results[randomNumber]);
      })
  },[])
  return (
    <div style={{backgroundImage:`url(${banner ? imageUrl+banner.backdrop_path : ""})`}} className='banner'>
      <div className='content'>
        <h1 className='title'>{ banner.original_title ||banner.original_name }</h1>
        <h1 className='discription'>{ banner.overview }</h1>
        <br />
        <div className='banner-buttons'>
            <button className='banner-buttoon1'>Play</button>
            <button className='banner-buttoon2'>More Info</button>
        </div>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
