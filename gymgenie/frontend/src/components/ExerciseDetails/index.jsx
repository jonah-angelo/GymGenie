import NotesSection from "../NotesSection"
import { useState, useEffect } from 'react'
import { getNotes } from "../../../utils/backend"

export default function ExerciseDetails({ exerciseData }) {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes(exerciseData.id)
        .then(notes => setNotes(notes))
    }, [exerciseData.id])

    
    return (
        <>
        <div>
            <h1>{exerciseData.name}</h1>
            <h3>{exerciseData.instructions}</h3>
            <h3>{exerciseData.muscle}</h3> 
            <h3>{exerciseData.equipment}</h3> 
            <div>
                <NotesSection notes={notes} exerciseData={exerciseData.id} updateNote={setNotes} />
            </div>
        </div>
        </>
    )
}
