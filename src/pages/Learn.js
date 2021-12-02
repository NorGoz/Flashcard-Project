import {  useState } from "react"
// import {useFetchData} from '../hooks'
// import Categorie from "../components/Categorie";
import { Route, Routes } from 'react-router-dom';

import FlashboardPage from './FlashboardPage';
import ErrorPage from './ErrorPage'
import CategoriesPage from './CategoriesPage';
// import '../styles/Learn.css'

const Learn = () => {
    const [activeCategorie,setActiveCategorie] = useState('')

    const changeActiveCategorie = (nameCategorie) => {
        setActiveCategorie(nameCategorie)
    }
    console.log(activeCategorie)

    return(
        <>
        <Routes>
        <Route path='/' element={<CategoriesPage changeActiveCategorie={changeActiveCategorie} />}/>
        <Route path="flashboard" element={activeCategorie !== '' ? <FlashboardPage active={activeCategorie}/> : <ErrorPage active={activeCategorie}/> } />   
        <Route element={<ErrorPage/>} />
        </Routes>
        </>
    )
}
export default Learn