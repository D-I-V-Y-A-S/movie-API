import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import './HomePageComponent.css'
const HomePageComponent = () => {
const API_KEY="5ec9ebb3"
const movie_type="Batman"
const [data,setData]=useState({})
const title="aaa"
const getDataFromAPI =async()=>
{
    const response=await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&S=${title}&page=1`)
    console.log(response.data)
    setData(response.data)
}
useEffect(()=>{
    getDataFromAPI()
},[title])
  return (
    <React.Fragment>
    <div className='align'>
       {data.Search && data.Search.map(iterator => (
        <div key={iterator.imdbID} >
           <div className='box'>
           <img src={iterator.Poster} alt="image-of-characters" height="200px" style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }} />
       
        <div className='movie-info'>
            <p>{iterator.Title}</p>
            <p>Year:{iterator.Year}</p>
            </div>

        </div>

        </div> 
       ))}
       </div>
    
    <div>HomePageComponent</div>
    </React.Fragment>

  )
}

export default HomePageComponent