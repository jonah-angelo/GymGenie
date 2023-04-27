import { useState, useEffect } from 'react';
import { getExercises } from '../../../utils/backend';
import { Link } from 'react-router-dom';
import Exercise from '../Exercise';

export default function ExercisePage({ exercises, updateExerciseData }) {
    const [page, setPage] = useState(1);
    const [exercisesPerPage, setExercisesPerPage] = useState(10);
    const [query, setQuery] = useState('');
    const [queryResults, setQueryResults] = useState([]);

    const handleQuerySubmit = async (e) => {
        e.preventDefault();
        exercises = queryResults.length > 0 ? queryResults : exercises;
        setQueryResults(exercises.filter((exercise) => exercise.muscle.toLowerCase().includes(query.toLowerCase())));
    };



    if (queryResults.length > 0) {
        exercises = queryResults;
    }


    // Pagination
    const lastExercise = page * exercisesPerPage;
    const firstExercise = lastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(firstExercise, lastExercise);

    let exerciseList = <div>Loading...</div>;

    if (currentExercises.length > 0) {
        exerciseList = currentExercises.map((exercise, i) => {
            return <Exercise key={i} exerciseData={exercise} updateExerciseData={updateExerciseData}/>;
        });
    }

    function nextPage() {
        setPage(page + 1);
    }
    
    function prevPage() {
        setPage(page - 1);
    }


    

    return (
        <>  
        <div className="flex justify-center">
        <form onSubmit={handleQuerySubmit} className="mt-4 text-center">
                <input
                    className="p-2 w-[60vw] rounded border border-gray-300 focus:outline-none focus:border-gray-500"
                    name="search"
                    placeholder="biceps..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    type="submit"
                    className="mx-1 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 bg-gray-700 rounded transition-all duration-200"
                >
                    Search
                </button>
            </form>
        </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-4">
                    {exerciseList}
                </div>
            </div>
            <div className='flex justify-between pl-40 pr-40 abolute'>
                {page > 1 ? <button className="bg-gray-800 w-20 h-10 text-white rounded-md text-sm hover:bg-gray-600 ml-90" onClick={prevPage}>Previous Page</button> : null}
                {currentExercises.length === exercisesPerPage ? <button className="bg-gray-800 w-20 h-10 text-white rounded-md hover:bg-gray-600 text-sm" onClick={nextPage}>Next Page</button> : null}
            </div>    
        </>
    )
}