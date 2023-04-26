import { useEffect, useState } from 'react'
import { useFetcher, useParams } from 'react-router-dom'
import { getExercises } from '../../../utils/backend'



export default function ExerciseDetails({ exerciseData, updateExerciseData }) {

    useEffect(() => {
        getExercises()
        .then(res => updateExerciseData(res.data))
        .catch(err => console.error(err))
    }, [])

    let page = <p>Page Loading...</p>
    if (exerciseData) {
        page = <ExerciseDetails exerciseData={exerciseData} />
    }
    
    return (
        <>
        <h1>Exercise Details</h1>
        <h2>{exerciseData.name}</h2>
        <h3>{exerciseData.description}</h3>
        <h3>{exerciseData.muscle_group}</h3>
        <h3>{exerciseData.equipment}</h3>

        </>
    )
}
