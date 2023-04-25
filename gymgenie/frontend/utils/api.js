export const getExercises = {
    async getAll() {
        const { data } = await axios.get('/exercises')
        return data
    }
}