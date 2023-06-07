import React, { useState } from 'react'
import './App.css'
import Header from './header/Header'
import Footer from './footer/Footer'
import { HomeScreen } from './Home/HomeScreen'
import { Route, Routes } from 'react-router-dom'
import AboutHackathon from './about/AboutHackathon'
import Awards from './awards/Awards'
import Form from './form/Form'

function App() {


  return (
    <div className="App">
      <Header />
      <main className="main">
      <Routes>
       <Route path="/" element= {<HomeScreen/>}/> 
       <Route path="/about" element= {<AboutHackathon/>}/>
       <Route path="/awards" element= {<Awards/>}/>
       <Route path="/form" element= {<Form/>}/>
      </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
