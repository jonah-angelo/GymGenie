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

export async function getComments(exerciseId) {
    console.log(exerciseId)
    const { data } = await axios.get(`/api/comments/exercise/${exerciseId}`)
    return data
}


export async function postComment(comment) {
    console.log(comment)
    const { data } = await axios.post('/api/comments', comment)
    return data
}


export async function updateComment(comment, id) {
    const { data } = await axios.put(`/api/comments/${id}`, comment)
    return data
}

export async function deleteComment(id) {
    const {data} = await axios.delete(`/api/comments/${id}`)
    return data
}