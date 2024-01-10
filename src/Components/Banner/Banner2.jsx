import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import './Banner2.css'

function Banner2() {

    const [banner,setBanner] =useState([])
    useEffect(()=>{
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results);
          setBanner(response.data.results)
        })
    },[])

  return (
<form>
    <input type="radio" name="fancy" autofocus value="image1" id="image1" />
    <input type="radio" name="fancy" value="image2" id="image2" />
    <input type="radio" name="fancy" value="image3" id="image3" />
    <input type="radio" name="fancy" value="image4" id="image4" />			
    <label for="image1"><img src={`${banner ? imageUrl+banner.backdrop_path : ""}`} alt="Image 1" /></label>
    <label for="image2"><img src="path/to/image2.jpg" alt="Image 2" /></label>
    <label for="image3"><img src="path/to/image3.jpg" alt="Image 3" /></label>
    <label for="image4"><img src="path/to/image4.jpg" alt="Image 4" /></label>
    <div className="fade_bottom"></div>
</form>
  )
}

export default Banner2
