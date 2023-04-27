import { Link } from 'react-router-dom';
export default function Exercise({ exerciseData, updateExerciseData }) {
    
    let exerciseDifficulty = <div></div>;

    if (exerciseData.difficulty === 'beginner') {
        exerciseDifficulty = <div className="bg-green-500 text-white font-bold py-1 px-1 rounded-full w-1">
        </div>;
    } else if (exerciseData.difficulty === 'intermediate') {
        exerciseDifficulty = <div className="bg-yellow-500 text-white font-bold py-1 px-2 rounded-full w-1"></div>;
    } else if (exerciseData.difficulty === 'expert') {
        exerciseDifficulty = <div className="bg-red-500 text-white font-bold py-1 px-3 rounded-full w-1"></div>;
    }
        
    return (
        <div>
        <div className="bg-grey"></div>
        <div className="flex flex-wrap justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{exerciseData.name}</div>
                        <p className="text-gray-700 text-base">
                            {exerciseData.muscle}
                        </p>
                        {exerciseDifficulty}
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <Link to={'/exercise-details/' + exerciseData._id}
                            onClick={() => {updateExerciseData(exerciseData)}}
                        >
                            <button onClick={() => {updateExerciseData(exerciseData)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Exercise
                            </button>
                        </Link>
                    </div>
                </div>
        </div>
        </div>
    )
}