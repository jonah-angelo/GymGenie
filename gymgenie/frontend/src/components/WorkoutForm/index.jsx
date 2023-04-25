import React from 'react'
import { useState, useEffect } from 'react'
import { createWorkout } from '../../../utils/backend'
import { getExercises } from '../../../utils/backend'

export default function WorkoutForm() {
    const [exercises, setExercises] = useState([])

    const [workout, setWorkout] = useState({
        title: '',
        body: '',
        exerciseDate: '',
    })

    useEffect(() => {
        getExercises()
        .then((exercises) => {
            setExercises(exercises);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);
    
    const handleChange = (event) => {
        setWorkout({
            ...workout,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createWorkout(workout)
    }
    const exerciseOptions = exercises.map((exercise, i) => {
        return (
            <option key={i} value={exercise.id}>{exercise.name}</option>
        )
    })

    return (
        <>
        <h1 className='text-center text-4xl'>Create Your Workout</h1>

        <form>
            <div className='flex justify-center'>
                <label className='text-2xl'>Title</label>
                <input className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' type='text' name='title' value={workout.title} onChange={handleChange} />
            </div>
            <div className='flex justify-center'>
                <label className='text-2xl'>Body</label>
                <input className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' type='text' name='body' value={workout.body} onChange={handleChange} />
            </div>
            <div className='flex justify-center'>
                <label className='text-2xl'>Exercise Date</label>
                <input className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' type='date' name='exerciseDate' value={workout.exerciseDate} onChange={handleChange} />
            </div>
            <div className='flex justify-center'>
                <label className='text-2xl'>Exercises</label>
                <select className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' name='exercises' value={workout.exercises} onChange={handleChange}>
                    {exerciseOptions}
                </select>

            </div>
            <div className='flex justify-center'>
                <button className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' type='submit' onClick={handleSubmit}>Create Workout</button>
            </div>





        </form>
        </>
    )
}
