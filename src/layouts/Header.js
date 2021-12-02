import { NavLink } from 'react-router-dom';

import '../styles/Header.css'

const list = [
    { name: "start", path: "/"},
    // { name: "Kategorie", path: "/categories" },
    { name: "ucz się", path: "/learn" },
    { name: "Dodaj nowe fiszki", path: "/newWord" },
  ]

const Header = () => {

    const menu = list.map(item => (
        <li className='header__item' key={item.name}>
          <NavLink to={item.path}>{item.name}</NavLink>
        </li>
      ))
    return(
      <nav className='header__nav'>
            <ul className='header__items'>
                {menu}
            </ul>     
      </nav>      
    );
}

export default Header