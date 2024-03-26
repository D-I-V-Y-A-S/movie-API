import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomePageComponent from './HomePageComponent/HomePageComponent'
import SearchPageComponent from './Components/SearchPageComponent/SearchPageComponent'
import ContactPageComponent from './Components/ContactPageComponent/ContactPageComponent'

const App = () => {
  return (
    <BrowserRouter>
  <div className='align'>
    <ul>

      <li><Link to='/'>Home</Link></li>
     <li> <Link to='/search'>Search</Link></li>
    <li>  <Link to='/Contact-us'>Contact-us</Link></li>
      </ul>
      </div>
      <Routes>
        <Route exact path='/' element={<HomePageComponent />}></Route>
        <Route exact path='/search' element={<SearchPageComponent />}></Route>
        <Route exact path='/contact-us' element={<ContactPageComponent />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App