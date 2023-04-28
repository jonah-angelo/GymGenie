import './styles.css'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <h1 className="text-center text-5xl mt-9 font-bold">Welcome to GymGenie!</h1>
      <div>
        <img className="m-auto logo" src="/logo.png"></img>
      </div>
      <div className="bg-zinc-700 h-screen shadow-sm">
        <p className='text-3xl text-left font-extrabold pb-30 mt-20 pt-10 pl-9'>Start Your Fitness Journey Today!</p>
        <img className="p-10" src="/public/Gym.jpeg"></img>
      </div>
    </>
  )
}

