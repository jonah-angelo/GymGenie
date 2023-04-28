import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HomePage from '../HomePage'
import AboutPage from '../AboutPage'
import './styles.css'
import AuthFormPage from '../AuthFormPage'
import ExercisePage from '../ExercisePage'
import ExerciseDetails from '../ExerciseDetails'
import { getExercises } from '../../../utils/backend'

function App() {
  const [detailsPage, setDetailsPage] = useState()
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    getExercises()
    .then((exercises) => {
        setExercises(exercises);
    })
    .catch((error) => {
        console.error(error);
    });
}, []);
  
console.log(exercises)

  return (
    <>
    <div>
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
                <li className='mr-4'>
                  <Link to="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium bg-zinc-600 hover:bg-zinc-400 ease hover:shadow-md"> About </Link>
                </li>
                <li>
                  <Link to="/exercises" className="text-white px-3 py-2 rounded-md text-sm font-medium bg-zinc-600 bg-zinc-600 hover:bg-zinc-400 hover:shadow-md"> Exercises </Link>
                </li>
                <li>
                  <Link to="/auth/signup">
                    <h4 className="text-white px-3 py-2 rounded-md text-sm font-medium bg-zinc-600 hover:bg-zinc-400 ease hover:shadow-md"> Sign Up </h4>
                  </Link>
                </li>
                <li>
                  <Link to="/auth/login">
                    <h4 className="text-white px-3 py-2 rounded-md text-sm font-medium bg-zinc-600 hover:bg-zinc-400 ease hover:shadow-md "> Login </h4>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/auth/:formType" element={<AuthFormPage />} />
        <Route path="/exercises" element={<ExercisePage exercises={exercises} updateExerciseData={setDetailsPage}/>} />
        <Route path="/exercise-details/:id" element={<ExerciseDetails exerciseData={detailsPage} setDetailsPage={setDetailsPage}/>} />
      </Routes>
    </>
    
  )
}

export default App
