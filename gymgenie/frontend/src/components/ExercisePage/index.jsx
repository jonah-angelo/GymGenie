import { useState, useEffect } from 'react';
import { getExercises } from '../../../utils/backend';
import { Link } from 'react-router-dom';

export default function ExercisePage() {
    const [exercises, setExercises] = useState([]);
    const [page, setPage] = useState(1);
    const [exercisesPerPage, setExercisesPerPage] = useState(10);

    useEffect(() => {
        getExercises()
        .then((exercises) => {
            setExercises(exercises);
            console.log(exercises);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    const indexOfLastExercise = page * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    let exerciseList = <div>Loading...</div>;


    

    return (
        <div>
        <h1 className="text-center text-5xl mt-10 mb-9">Browse Exercises</h1>
        <div className="bg-grey"></div>
        <div className="flex flex-wrap justify-center">
            {exercises.map((exercise) => (
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{exercise.name}</div>
                        <p className="text-gray-700 text-base">
                            {exercise.description}
                        </p>
                        <p className="text-gray-700 text-base">
                            {exercise.muscle}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <Link to={`/exercises/${exercise.id}`}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Exercise
                            </button>
                        </Link>
                    </div>
                </div>
            ))}

        </div>
        </div>

    )
}