import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HomePage from '../HomePage'
import DetailsPage from '../DetailsPage'
import AboutPage from '../AboutPage'
import './styles.css'

function App() {
  useEffect(() => {
    console.log('App mounted')
  }, [])
  return (
    <> 
      <nav className="bg-sky-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <h2 className="text-white font-bold text-lg">Gym Genie</h2>
              </Link>
            </div>
            <div className="flex-grow">
              <ul className="flex justify-end">
                <li>
                  <Link to="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium"> About </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
    
  )
}

export default App
