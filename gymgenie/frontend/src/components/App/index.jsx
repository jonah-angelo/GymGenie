import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './styles.css'

function App() {

  return (
    <> 
      <div>
        <h1>Home</h1>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
    
  )
}

export default App
