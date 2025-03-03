import axios from "axios";


const api = axios.create({
    baseURL: "https://dummyjson.com/recipes",
});

export const getRecipes = async (input) => {
    const response = await api.get('/search?q=' + input);
    return response.data?.recipes;
}





export default api;