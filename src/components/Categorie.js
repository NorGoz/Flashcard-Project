import { NavLink } from 'react-router-dom';

import '../styles/Categorie.css'

const Categorie = ({name,changeActiveCategorie}) => {
    return(
        <div className='categorie__item'>
            <div className='categorie__titleContainer'>
            <h2 className='categorie__title'>{name}</h2>
            </div>
            <div className='categorie_linkContainer'>
            <NavLink onClick={()=>changeActiveCategorie(name)} className='categorie__link' to={`flashboard?activeCategorie=${name}`}>start</NavLink>
            </div>
        </div>
    )
}
export default Categorie