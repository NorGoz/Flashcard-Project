import { useState } from "react"
import {useFetchData} from '../hooks/useFetchData'
import '../styles/NewWordPage.css'

const NewWordPage = () => {
const [activeCategorie,setActiveCategorie] = useState('');
const [allCategories,setAllCategories] = useState([]);
const [selectCategorie,setSelectCategorie] = useState('newCategorie');
const [polishWord,setPolishWord] = useState('');
const [englishWord,setEnglishWord] = useState('');
const [newCategorie,setNewCategorie] = useState('');


const {data} = useFetchData('http://localhost:5000/words',newCategorie);
   
    const resetInputs = () => {
        setEnglishWord('');
        setPolishWord('');
        setNewCategorie('');
        setSelectCategorie(activeCategorie);
    }
    const handleCategories = (event) => {
        resetInputs();
        setSelectCategorie(event.target.value);
        setActiveCategorie(event.target.value);
    }
    const handleInput = (event) => {
        switch (event.target.name) {
            case 'categorie':
                setNewCategorie(event.target.value);
                break;
            case 'polish':
                setPolishWord(event.target.value);
                break;
            case 'english':
                setEnglishWord(event.target.value);
                break;
            default: 
            console.log(`Sorry, something went wrong. name = ${event.target.name}`)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(newCategorie !== ''){
        const upDateAllCattegorie = [...allCategories,newCategorie];
        setAllCategories(upDateAllCattegorie);
        setActiveCategorie(newCategorie);
        setSelectCategorie(newCategorie)
        };
        const word = {
            polish:polishWord,
            english:englishWord,
            remember:false,
        };
    
        (async()=>{
            const res = await fetch(`http://localhost:5000/words/${newCategorie !=='' ?newCategorie:activeCategorie}`, {
                method:'POST',
                body:JSON.stringify({word}),
                headers:{
                    'Content-Type': 'application/json',
                },
            });
            const respons = await res.json();
            console.log(respons)
        })();
        resetInputs()
    }


    const options = data.map(item => <option key={item} value={item}>{item}</option>);
    const inputCategorie = selectCategorie === 'newCategorie' ? 
    <input className='form__input' type='text' name='categorie' value={newCategorie} placeholder='Nazwa kategori' onChange={handleInput}/> 
    : null 

    
    
    
    
    return(
        <div className='form__container'>
            <h2 className='form__title'>Tutaj dodasz nowe fiszki do swojej kolekcji. <br/>Pamiętaj o wybraniu odpowiedniej kategori</h2>
        <form className='form__content' onSubmit={handleSubmit}>
            <label className='form__txt'>Wybierz kategorie</label>
            <select className='form__select' value={selectCategorie}  onChange={handleCategories}>
                {options}
                <option value='newCategorie'>dodaj nową</option>
            </select>
            {inputCategorie}
            <input className='form__input' type='text' name='polish' value={polishWord} placeholder='Słówko po polsku' onChange={handleInput}/>
            <input className='form__input' type='text' name='english' value={englishWord} placeholder='Słówko po angielsku' onChange={handleInput}/>
            <button className='form__btn' type='submit'>Dodaj</button>
        </form>
        </div>
    )
}
export default NewWordPage