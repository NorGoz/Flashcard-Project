import { useState } from "react"
import {useNavigate} from "react-router-dom"

import '../styles/Edit.css';


const EditCard = ({polish,english,activeCategorie,id}) => {
const [polishWord,setPolishWord] = useState(polish);
const [englishWord,setEnglishWord] = useState(english);
const [activeEditMode,setActiveEditMode] = useState(true);

const navigate = useNavigate();

const handleInput = (e) => {
    console.log(e.target.value)
    if(e.target.name === 'polish'){
        setPolishWord(e.target.value)
        } else if (e.target.name === 'english'){
            setEnglishWord(e.target.value)
        }
}
const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch(`http://localhost:5000/words/${activeCategorie}/${id}`,{
        method:'PUT',
        body:JSON.stringify({
            polishWord,
            englishWord,
        }),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        });
        const editArray = await res.json();
        console.log(editArray);
        setActiveEditMode(false)
       
    }
const deletWord = async () => {
    const res = await fetch(`http://localhost:5000/words/${activeCategorie}/${id}`,{
        method:'DELETE',
        body:JSON.stringify({
            polishWord,
            englishWord,
        }),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        });
        navigate('/learn')
        console.log('usunalem',res)

    }
    const backToLearn = () => {
        setActiveEditMode(true)
        navigate('/learn')
    }
   

    if(activeEditMode){
    return(
        <div className='form__container'>
             <form  className='form__content' onSubmit={handleSubmit}>
        <h2>{activeCategorie}</h2>
        <input className='form__input' type='text' name='polish' value={polishWord} placeholder='Słówko po polsku' onChange={handleInput}/>
        <input className='form__input' type='text' name='english' value={englishWord} placeholder='Słówko po angielsku' onChange={handleInput}/>
        <button className='form__btn' type='submit'>Zapisz zmiany</button>
    </form>
        <h2 className='form__title'>Tutaj edytujesz swoją fiszkę. <br/>Możesz również ją usunąć klikając przycisk niżej 
        <br/>
        <button onClick={deletWord} style={{border:'solid 2px black ', padding:'10px 20px', color:'royalblue',backgroundColor:'white' ,margin:'50px',cursor: 'pointer',fontWeight:'bold'}}>Usuń </button></h2>
   
    </div>
    )} else if (!activeEditMode) {
        return(
            <div>
                <div className='edit'>
                    <h2 className='edit__title'>Udało się edytować fiszkę</h2>
                    <button className='edit__btn' onClick={backToLearn}>Wróć do nauki</button>
                </div>
            </div>
        )
    }
}
export default EditCard