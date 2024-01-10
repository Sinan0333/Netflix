import React, { useEffect, useState} from 'react'
import NavBar from "./Components/NavBar/NavBar"
import './App.css'
import Banner from "./Components/Banner/Banner"
import List from "./Components/List/List"
import {genreList,genreMovies} from './url'
import axios from './axios'
import Intro from './Components/introLoadin/IntroLoading'

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [genres,setGenre] = useState([])
  useEffect(()=>{

    setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    axios.get(genreList).then((response)=>{
      setGenre(response.data.genres)
    })
},[])

if (isLoading) {
  return(
    <div>
      <Intro />
    </div>
  )
}


  return(
   <div>
    <NavBar />
    <Banner />
    {
      genres.map((obj,ind)=><List key={ind} title={obj.name} url={genreMovies+obj.id}/>)
    }
   </div>
  )
}

export default App
