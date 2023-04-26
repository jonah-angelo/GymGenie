import { useState, useEffect } from 'react';
import { getExercises } from '../../../utils/backend';
import { Link } from 'react-router-dom';
import Exercise from '../Exercise';

export default function ExercisePage() {
    const [exercises, setExercises] = useState([]);
    const [page, setPage] = useState(1);
    // const [exerciseDetails, setExerciseDetails] = useState();
    const [exercisesPerPage, setExercisesPerPage] = useState(10);
    const [query, setQuery] = useState('');
    const [queryResults, setQueryResults] = useState([]);
    const [detailsPage, setDetailsPage] = useState(false);

    useEffect(() => {
        getExercises()
        .then((exercises) => {
            setExercises(exercises);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);


    // Pagination
    const lastExercise = page * exercisesPerPage;
    const firstExercise = lastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(firstExercise, lastExercise);

    let exerciseList = <div>Loading...</div>;

    if (currentExercises.length > 0) {
        exerciseList = currentExercises.map((exercise, i) => {
            return <Exercise key={i} exerciseData={exercise}/>;
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
                <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-5"
                    type="search"
                    name="search"
                    placeholder="Search by muscle..."
                /> 
                <button className="" type="submit"> Search </button>
            </div>

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