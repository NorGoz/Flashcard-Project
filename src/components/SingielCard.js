// import { NavLink } from 'react-router-dom';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faUserCog} from '@fortawesome/free-solid-svg-icons';
import '../styles/SingielCard.css'

import EditCard from './EditCard';

const SingielCard = ({data,flippedCard,wordsIndex,handleIndex,wordLength,isRemembered,cards,setCards,active,activeCategorie}) => {
const [flipped,setFlipped] = useState(flippedCard);
const [remember,setRemember] = useState(isRemembered);
const [activeLernMode,setActiveLernMode] = useState(true);


  const handleFlip = () => {
        setFlipped(prevValue => !prevValue)
  }
  
  const handleRemember = () => {
    setRemember(prevValue => !prevValue)
      const upData = cards.find(word => word.id === data.id);
      const index = cards.findIndex(word => word.id === data.id);
      upData.remember = !remember
      cards[index] = upData
      setCards(cards)
    }
    
  
  const leftArrowElement =<FontAwesomeIcon icon={faChevronLeft} />
  const rightArrowElement =<FontAwesomeIcon icon={faChevronRight} />
  const gearElement = <FontAwesomeIcon icon = {faUserCog} />


  if(activeLernMode) {
    return (
        <div className="card" >
      <div className={flipped ? 'flipped' : ''}>
       <div className='englishCard front'>
       <div className='card__info'>
              <span style={{cursor:'pointer'}} onClick={()=>setActiveLernMode(false)}>{gearElement}</span>
              {/* <NavLink to='/newWord'>eydtowanie</NavLink> */}
              <span>{`${wordsIndex+1}/${wordLength}`}</span>
              <label>Pamiętam <input value={remember} onChange={handleRemember} type='checkbox' checked={remember}/></label>
          </div>
          <h2 onClick={handleFlip} className='card__txt'> {data.english} </h2>
          <span onClick={()=>handleIndex('previous',active)} className='card__arrow left'>{leftArrowElement}</span>
          <span onClick={()=>handleIndex('next',active)} className='card__arrow right'>{rightArrowElement}</span>
       </div>
       <div className='polishCard back'>
          <div className='card__info'>
              <span style={{cursor:'pointer'}} onClick={()=>setActiveLernMode(false)} >{gearElement}</span>
              <span>{`${wordsIndex+1}/${wordLength}`}</span>
              <label>Pamiętam <input value={remember} onChange={handleRemember} type='checkbox' checked={remember}/></label>
          </div>
          <h2 onClick={handleFlip} className='card__txt'>{data.polish}</h2>
          <span onClick={()=>handleIndex('previous',active)} className='card__arrow left'>{leftArrowElement}</span>
          <span onClick={()=>handleIndex('next',active)} className='card__arrow right'>{rightArrowElement} </span>
       </div>
      </div>
      </div>
    )
  } else if (!activeLernMode) {
    return(
      <>
        <EditCard polish={data.polish} english={data.english} id={data.id} activeCategorie={activeCategorie}/>
      </>
    )
  }
}

export default SingielCard