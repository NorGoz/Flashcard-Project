import '../styles/LerningMenu.css'


const LerningMenu = ({allCardsNumber,setMenuActive,setLerningMode,rememberCards,categorieName,setWordsIndex,setAll,}) => {

const chooseMode = (mode) => {
    if(mode === 'all') setAll(true);
    if(mode === 'notRemember') setAll(false);
    setWordsIndex(0);
    setMenuActive(false);
    setLerningMode(true);
}

const btnElementRepeatNotRemembers =<button className='lerning__btn' onClick={()=> chooseMode('notRemember')}>Powtórz niezapamiętane</button>;
    return (
        <div className='lerning'>
        <h2 className='lerning__title'>{categorieName}</h2>
        <p className='lerning__txt'> Ilość fiszek : {<span>{Number(allCardsNumber)}</span>}</p>
        <p className='lerning__txt'> Ilość zapamiętanych : {<span>{Number(rememberCards)}</span>}</p>
        <div className='conteinerForBtn'>
        <button className='lerning__btn' onClick={()=> chooseMode('all')}>Powtórz wszystkie</button>
        {rememberCards < allCardsNumber ? btnElementRepeatNotRemembers : null}
        </div>
    </div>
    )
}

export default LerningMenu