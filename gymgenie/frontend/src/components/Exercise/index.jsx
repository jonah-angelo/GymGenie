import { Link } from 'react-router-dom';
export default function Exercise({ exerciseData, updateExerciseDetails }) {
    return (
        <div>
        <div className="bg-grey"></div>
        <div className="flex flex-wrap justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{exerciseData.name}</div>
                        <p className="text-gray-700 text-base">
                            {exerciseData.description}
                        </p>
                        <p className="text-gray-700 text-base">
                            {exerciseData.muscle}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <Link to={'/exercise-details/' + exerciseData.id}
                            onClick={() => {updateExerciseDetails(exerciseData)}}
                        >
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Exercise
                            </button>
                        </Link>
                    </div>
                </div>
        </div>
        </div>
    )
}