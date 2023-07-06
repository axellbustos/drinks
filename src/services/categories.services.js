import axios from 'axios'

const apiURL = import.meta.env.VITE_APi_URL

export const getCategoriesService = async ()=>{
    try {
        const url= `${apiURL}list.php?c=list`
        const {data}= await axios(url)// por defecto toma get si no poner axios.get(url)
        return data.drinks || []


    } catch (error) {
        console.log(error );
        throw new Error("Error al obtener categorias")
    }
}