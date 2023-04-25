import { useState, useEffect } from 'react';
import { getExercises } from '../../../utils/backend';
import { Link } from 'react-router-dom';
import Exercise from '../Exercise';

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

    const lastExercise = page * exercisesPerPage;
    const firstExercise = lastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(firstExercise, lastExercise);

    let exerciseList = <div>Loading...</div>;

    if (currentExercises.length > 0) {
        exerciseList = currentExercises.map((exercise, i) => {
            return <Exercise key={i} exerciseData={exercise} />;
        });
    }

    function nextPage() {
        setPage(page + 1);
    }

    function prevPage() {
        setPage(page - 1);
    }


    return (
        <div>
            <h1 className="text-center text-5xl mt-10 mb-9">Browse Exercises</h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-4">
                    {exerciseList}
                    {page > 1 ? <button onClick={prevPage}>Previous Page</button> : null}
                    {currentExercises.length === exercisesPerPage ? <button onClick={nextPage}>Next Page</button> : null}
                </div>
            </div>
        </div>
   
    )
}