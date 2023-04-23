import { useState, useEffect } from 'react'


export default function WorkoutForm() {
  const [muscle, setMuscle] = useState('')
  const [difficulty, setDifficulty] = useState('')

    useEffect(() => {  
        console.log(muscle)
        console.log(difficulty)
    }, [muscle, difficulty])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&difficulty=${difficulty}` , {
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': import.meta.env.VITE_API_KEY

    }

    })
    const data = await res.json()
    console.log(data)

    }

    
    return (
        <>
        <h1 className='text-center text-5xl mb-9'>Workout Form</h1>
        <form className='' onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' />
            <label htmlFor='muscle'>Muscle Group</label>
            <select value={muscle} onChange={(e) => setMuscle(e.target.value)} id='muscle-group'>
                <option defaultValue='chest'>Chest</option>
                <option value='lower_back'>Lower Back</option>
                <option value='middle_back'>Mid Back</option>
                <option value='lats'>Lats</option>
                <option value='triceps'>Triceps</option>
                <option value='biceps' >Biceps</option>
                <option value='traps' >Traps</option>
                <option value='neck'>Neck</option>
                <option value='forearms'>Forearms</option>
                <option value='quadriceps'>Quads</option>
                <option value='glutes'>Glutes</option>
                <option value='hamstrings'>Hamstrings</option>
                <option value='calves'>Calves</option>
                <option value='adductors'>Adductors</option>
                <option value='abductors'>Abductors</option>
                <option value='abdominals'>Abs</option>
            </select>
            <label htmlFor='difficulty'>Difficulty</label>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} id='difficulty-group'>
                <option value='beginner'>Beginner</option>
                <option value='intermediate'>Intermediate</option>
                <option value='expert'>Expert</option>
            </select>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}
