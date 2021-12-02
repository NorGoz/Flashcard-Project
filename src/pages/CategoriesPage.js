import {useFetchData} from '../hooks'
import Categorie from "../components/Categorie";

import '../styles/Learn.css'

const CategoriesPage = ({changeActiveCategorie}) => {
    
  const {data} = useFetchData('http://localhost:5000/words');
  const categories = data.length > 0 ? data.map(categorie => <Categorie key={categorie} name={categorie} changeActiveCategorie={changeActiveCategorie}/>) : null;

  return(
    <div className='categorie__container'>
      {categories ? categories : 'Brak dostępnych kategori'}
    </div>
   )
}
export default CategoriesPage