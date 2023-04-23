import './styles.css'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <h1 className="text-center text-5xl mt-9 font-bold">Welcome to GymGenie!</h1>
      <div>
        <img className="m-auto" src="/logo.png"></img>
      </div>
      <div className="text-center bg-zinc-700 pb-4">
        <h2 className="text-3xl pt-4">Your Workouts</h2>
        <button><Link to="/WorkoutForm">Add Workout</Link></button>
      </div>
      <div className="workout-container">
      </div>
    
    </>
  )
}

