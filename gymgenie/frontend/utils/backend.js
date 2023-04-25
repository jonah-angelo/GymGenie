import axios from 'axios';

const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }

export async function signUp(user) {
    const { data } = await axios.post('/api/users/signup', user)
    return data
}

export async function logIn(user) {
    const { data } = await axios.put('/api/users/login', user)
    return data
}

export async function getExercises() {
    const { data }  = await axios.get('/api/exercises')
    return data
}

export async function getWorkouts() {
    const { data } = await axios.get('/api/workouts')
    return data
}

export async function getWorkout(id) {
    const { data } = await axios.get(`/api/workouts/${id}`)
    return data
}

export async function createWorkout(workout) {
    const { data } = await axios.post('/api/workouts', workout)
    return data
}

export async function updateWorkout(workout) {
    const { data } = await axios.put(`/api/workouts/${workout._id}`, workout)
    return data
}

export async function deleteWorkout(id) {
    const { data } = await axios.delete(`/api/workouts/${id}`)
    return data
}

export async function createNote(note) {
    const { data } = await axios.post('/api/notes', note)
    return data
}

export async function deleteNote(id) {
    const { data } = await axios.delete(`/api/notes/${id}`)
    return data
}

