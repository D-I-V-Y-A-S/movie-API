import axios from 'axios'
import React, { useState } from 'react'

const SearchPageComponent = () => {
  const[data,setData]=useState({})
  const [input,setInput]=useState('')
  const API_KEY="5ec9ebb3"
  const getDataFromAPI =async()=>
  {
      const response=await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&S=${input}`)
      console.log(response.data)
      setData(response.data)
  }

  const handleInput=(event)=>{
setInput(event.target.value)
  }
  return (
    <React.Fragment>
    <div>SearchPageComponent</div>
    <input type="text"
     name="search"
      id="search"
       onClick={handleInput} 
    onKeyDown={(event)=>{
      if (event.key === 'Enter')
      {
      getDataFromAPI()
    }
  }
  }/>
   {data.Search && data.Search.map(iterator => (
        <div className='images' key={iterator.imdbID}>
            <p>{iterator.Title}</p>
            <p>Year:{iterator.Year}</p>
        <img src={iterator.Poster} alt="image-of-characters" height="200px" style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }} />
        </div>
       ))}
    </React.Fragment>
  )
}

export default SearchPageComponent