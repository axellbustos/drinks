import { useState, useEffect, createContext } from "react";
import PropTypes from 'prop-types'
import{ getCategoriesService} from "../services/categories.services"

const CategoriesContext = createContext()

const CategoriesProvider=({children}) =>{
    const [categories, setcategories]= useState([])

    const getCategories= async ()=>{
        try {
            const categoriesData = await getCategoriesService()
            setcategories(categoriesData)

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getCategories()
    },[])

    
    return (
        <CategoriesContext.Provider value={{categories}}>
            {children}
        </CategoriesContext.Provider>

    )
}

CategoriesProvider.propTypes={
    children: PropTypes.node.isRequired
}
export {
    CategoriesProvider
}
export default CategoriesContext