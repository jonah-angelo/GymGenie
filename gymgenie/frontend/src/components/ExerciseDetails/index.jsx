import CommentSection from "../CommentSection"
import { useState, useEffect } from 'react'

export default function ExerciseDetails({ exerciseData }) {
    return (
        <>
            <h1 className="text-center mt-9 mb-10 font-bold text-3xl">{exerciseData.name}</h1>
        <div className="">
            <p className="font-bold m-9">Muscle Group:</p>
            <h3 className="mb-4 m-9">{exerciseData.muscle}</h3> 
        </div>
            <p className="font-bold m-9">Equipment Needed:</p>
            <h3 className="mb-4 m-9">{exerciseData.equipment}</h3> 
            <p className="font-bold m-9">Intstructions:</p>
            <p className="mb-9 m-9">{exerciseData.instructions}</p>
        <div>
            <CommentSection exerciseId={exerciseData._id}/>
        </div>
        </>
    )
}
