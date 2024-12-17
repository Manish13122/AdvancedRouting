import React from 'react'
import NavBar from './components/NavBar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/products'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
const App = () => {
  return (
    <>
      <NavBar/>
      {/*Routing settup for the app 
        <Routes> will ensure that there is a one route that matches the path is rendering in ui*/}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>


    </>
  )
}

export default App
