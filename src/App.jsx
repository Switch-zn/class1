import React from 'react'
import NavBar from './components/NavBar'
import NaviBar from './components/NaviBar'
import Nav from './components/Nav'
import Parent from './Props/Parent'
import Footer from './components/Footer'
import Papa from './Props/Papa'
import Tes1 from './Header.jsx/Tes1'
import Counter from './Props/Counter'
import LoginPage from './components/Login/LoginPage'


function App() {
  return (
    <div>
      <NavBar />
      <NaviBar />
      <Nav />
      <Parent/>
      <Footer />
      <Papa />
      <Tes1 />
      <Counter/>
      <LoginPage/>
    
    </div>
  )
}

export default App