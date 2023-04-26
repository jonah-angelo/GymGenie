import './styles.css'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <h1 className="text-center text-5xl mt-9 font-bold">Welcome to GymGenie!</h1>
      <div>
        <img className="m-auto" src="/logo.png"></img>
      </div>
    </>
  )
}

