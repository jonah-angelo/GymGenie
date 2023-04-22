export const getExercises = {
    method: 'GET',
    url: `https://api.api-ninjas.com/v1/exercises?${query}=${value}}`,
    Headers: {
        'X-Api-Key' : process.env.REACT_APP_API_KEY
    }
}