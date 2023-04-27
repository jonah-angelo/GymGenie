import { useState, useEffect } from 'react';
import { getExercises } from '../../../utils/backend';
import { Link } from 'react-router-dom';
import Exercise from '../Exercise';

export default function ExercisePage({ exercises, updateExerciseData }) {
    const [page, setPage] = useState(1);
    const [exercisesPerPage, setExercisesPerPage] = useState(10);
    const [exerciseFilter, setExerciseFilter] = useState('all');
    const [query, setQuery] = useState('');
    const [filteredExercises, setFilteredExercises] = useState([]);

    useEffect(() => {
        getExercises()
        .then((exercises) => {
            setFilteredExercises(exercises);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        if (exerciseFilter === 'all') {
            setFilteredExercises(exercises);
        } else {
            const filtered = exercises.filter((exercise) => {
                return exercise.muscle === exerciseFilter;
            });
            setFilteredExercises(filtered);
        }
    }, [exerciseFilter, exercises]);


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
                <div className="grid grid-cols-3 gap-4">
                    {exerciseList}
                </div>
                    {/* Filter */}
                    <div className="flex flex-col justify-center items-center mt-10">
                        <h2 className="text-2xl font-bold mb-4">Filter</h2>
                        <select className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" onChange={(e) => setExerciseFilter(e.target.value)}>
                            <option value="all">All</option>
                            <option value="chest">Chest</option>
                            <option value="back">Back</option>
                            <option value="shoulders">Shoulders</option>
                            <option value="biceps">Biceps</option>
                            <option value="triceps">Triceps</option>
                            <option value="legs">Legs</option>
                            <option value="abs">Abs</option>
                        </select>
                    </div>
            </div>
            <div className='flex justify-between pl-40 pr-40 abolute'>
                {page > 1 ? <button className="bg-gray-800 w-20 h-10 text-white rounded-md text-sm hover:bg-gray-600 ml-90" onClick={prevPage}>Previous Page</button> : null}
                {currentExercises.length === exercisesPerPage ? <button className="bg-gray-800 w-20 h-10 text-white rounded-md hover:bg-gray-600 text-sm" onClick={nextPage}>Next Page</button> : null}
            </div>    
        </>
    )
}