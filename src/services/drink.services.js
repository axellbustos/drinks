import axios from 'axios'

const apiURL = import.meta.env.VITE_APi_URL

const getRecipeService = async (drinkId) =>{
    try {
        const url= `${apiURL}lookup.php?i=${drinkId}`
        const {data}= await axios(url)// por defecto toma get si no poner axios.get(url)
        return data.drinks[0] || []

    } catch (error) {
        console.log(error );
        throw new Error("Error al obtener la receta")
    }
}
const filterDrinkServices = async (name, category) => {
    try {
        const url= `${apiURL}filter.php?i=${name}&c=${category}`
        const {data}= await axios(url)// por defecto toma get si no poner axios.get(url)
        return data.drinks|| []


    } catch (error) {
        console.log(error );
        throw new Error("Error al filtrar las bebidas")
    }
}
export {getRecipeService, filterDrinkServices}