import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Prroducts from './components/Prroducts'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'
import MyFooter from './components/MyFooter'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Prroducts />
      <Blog />
      <Newsletter />
      <MyFooter />
    </div>
  )
}

export default App
