import { useState, useEffect } from 'react'


export default function WorkoutForm() {
    const [workout, setWorkout] = useState({
        title: '',
        body: '',
        exerciseDate: ''
    })



    return (
        <>
        <h1>Workout Form</h1>

        <form>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={workout.title} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <input type="text" id="body" name="body" value={workout.body} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="exerciseDate">Exercise Date</label>
                <input type="text" id="exerciseDate" name="exerciseDate" value={workout.exerciseDate} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
