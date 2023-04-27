import CommentSection from "../CommentSection"
import { useState, useEffect } from 'react'

export default function ExerciseDetails({ exerciseData }) {
    let muscleimg = null
    if (exerciseData.muscle === "chest") {
        muscleimg = "https://i.imgur.com/2ZQ4Q3b.png"
    } else if (exerciseData.muscle === "back") {
        muscleimg = "https://i.imgur.com/2ZQ4Q3b.png"
    } else if (exerciseData.muscle === "shoulders") {
        muscleimg = "https://i.imgur.com/2ZQ4Q3b.png"
    } else if (exerciseData.muscle === "biceps") {
        muscleimg = "/public/biceps.png"
    } else if (exerciseData.muscle === "triceps") {
        muscleimg = "https://i.imgur.com/2ZQ4Q3b.png"
    } else if (exerciseData.muscle === "quadriceps") {
        muscleimg = "/public/quads.png"
    } else if (exerciseData.muscle === "abdominals") {
        muscleimg = "https://i.imgur.com/2ZQ4Q3b.png"
    } else if (exerciseData.muscle === "calves") {
        muscleimg = "/public/calves.png"
    } else if (exerciseData.muscle === "forearms") {
        muscleimg = "/public/forearms.png"
    } else {
        muscleimg = "https://i.imgur.com/2ZQ4Q3b.png"
    }


    return (
        <>
            <h1 className="text-center mt-9 mb-10 font-bold text-3xl">{exerciseData.name}</h1>
        <div className="">
            <img className="m-auto" src={muscleimg}></img>
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
