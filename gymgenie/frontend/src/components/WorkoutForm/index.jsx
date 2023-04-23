import { useState, useEffect } from 'react'


export default function WorkoutForm() {
  const [muscle, setMuscle] = useState('')
  const [difficulty, setDifficulty] = useState('')
  useEffect(() => {
    async function fetchExercises() {
      const res = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&difficulty=${difficulty}` , {
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': import.meta.env.VITE_API_KEY
          }
      })
      const data = await res.json()
      console.log(data)


    }
    fetchExercises()
  }, [])

    return (
        <>
        <h1 className='text-center text-5xl'>Workout Form</h1>
        <form>
            <label htmlFor='muscle'>Muscle Group</label>
            <input list='muscle-group' id='muscle' value={muscle} onChange={(e) => setMuscle(e.target.value)} />
            <datalist id='muscle-group'>
                <option value='chest' />
                <option value='lower_back' />
                <option value='middle_back' />
                <option value='lats' />
                <option value='triceps' />
                <option value='biceps' />
                <option value='traps' />
                <option value='neck' />
                <option value='forearms' />
                <option value='quadriceps' />
                <option value='glutes' />
                <option value='hamstrings' />
                <option value='calves' />
                <option value='adductors' />
                <option value='abductors' />
                <option value='abdominals' />
            </datalist>
            <label htmlFor='difficulty'>Difficulty</label>
            <input list='difficulty' id='difficulty' value={difficulty} onChange={(e) => setDifficulty(e.target.value)} />
            <datalist id='difficulty'>
                <option value='beginner' />
                <option value='intermediate' />
                <option value='expert' />
            </datalist>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}