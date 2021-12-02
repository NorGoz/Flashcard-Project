import { useEffect, useState } from 'react'
import SingielCard from "../components/SingielCard"
import {useFetchData} from '../hooks/useFetchData'
import LerningMenu from '../components/LerningMenu'

const FlashboardPage = ({active}) => {
  
  const [wordsIndex,setWordsIndex] = useState(0);
  const [cards,setCards] = useState([]);
  const [all,setAll] = useState(true);
  const [lerningMode,setLerningMode] = useState(true);
  const [menuActive, setMenuActive] = useState(false);
 
  // const [rememberCards,setRememberCards] = useState([]);
    // const wordsIndex = 0;
const {data} = useFetchData(`http://localhost:5000/words/${active}`);



const handleIndex = (option,active) => {
  if (active === 'all'){
  if(wordsIndex < allCards.length-1 && option === 'next') {
  setWordsIndex(prevValue => prevValue + 1);
  
  }
  if(wordsIndex >= 1 && option === 'previous'){
    setWordsIndex(prevValue => prevValue - 1);
    
  }
  if(wordsIndex === allCards.length-1) {
    console.log('zacznij od nowa ALLCARDS')
      setLerningMode(false);
      setMenuActive(true);
      
    }
  }
  if (active === 'notRemember'){
    if(wordsIndex < notRemembersCards.length-1 && option === 'next') {
      setWordsIndex(prevValue => prevValue + 1);
      
      }
      if(wordsIndex >= 1 && option === 'previous'){
        setWordsIndex(prevValue => prevValue - 1);
        
      }
      if(wordsIndex === notRemembersCards.length-1) {
        console.log('zacznij od nowa w NOTREMEMEBR')
        setLerningMode(false);
        setMenuActive(true);
        
        }

  }
  
}



useEffect(()=>{
    setCards(data)
    console.log('use efekt')
},[data])



 
const allCards = cards.map(word => (
  <SingielCard
  activeCategorie ={active} 
  key={word.id}
  cards ={cards}
  active={'all'}
  isRemembered={word.remember}
  data={word}
  flippedCard ={false}
  setCards ={setCards}
  wordsIndex ={wordsIndex} 
  handleIndex={handleIndex} 
  wordLength={data.length}/>
))

const notRemembersCards = cards.filter(word => !word.remember)
  .map(word => (
  <SingielCard
  activeCategorie ={active} 
  key={word.id}
  isRemembered={word.remember}
  data={word}
  active={'notRemember'}
  cards ={cards}
  setCards ={setCards}
  flippedCard ={false} 
  wordsIndex ={wordsIndex} 
  handleIndex={handleIndex} 
  wordLength={cards.filter(word => !word.remember).length}/>
))


const viewAllCards = allCards ? allCards[wordsIndex] : null
const viewNotRemembersCards =  notRemembersCards ? notRemembersCards[wordsIndex] : null
const lerningView = all ? viewAllCards : viewNotRemembersCards
const menuForChoose = <LerningMenu setLerningMode={setLerningMode} setMenuActive={setMenuActive} allCardsNumber={allCards.length} rememberCards = {cards.filter(word => word.remember).length} categorieName={active} setWordsIndex={setWordsIndex} setAll={setAll}/>
console.log('działam fiszki',cards)
    return(
        <>
        {lerningMode ? lerningView : null } 
        { menuActive ? menuForChoose : null}
        </>
    )
}
export default FlashboardPage