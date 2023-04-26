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

export async function createNote(note) {
    const { data } = await axios.post('/api/notes', note)
    return data
}

export async function deleteNote(id) {
    const { data } = await axios.delete(`/api/notes/${id}`)
    return data
}

