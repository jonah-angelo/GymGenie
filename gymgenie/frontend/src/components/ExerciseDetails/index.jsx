export default function ExerciseDetails({ exerciseData }) {
    console.log(exerciseData)
    
    return (
        <>

        <h1>Exercise Details</h1>
        <h2>{exerciseData.name}</h2>
        <h3>{exerciseData.instructions}</h3>
        <h3>{exerciseData.muscle}</h3> 
        <h3>{exerciseData.equipment}</h3> 

        </>
    )
}
