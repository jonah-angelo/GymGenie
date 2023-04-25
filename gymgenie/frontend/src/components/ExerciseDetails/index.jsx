export default function ExerciseDetails({ exerciseData }) {
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
