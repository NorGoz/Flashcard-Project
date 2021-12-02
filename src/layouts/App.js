import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Page from './Page';
import Footer from './Footer';
import '../styles/App.css';



function App() {
  return (
    <Router>
    <div className="app">
     <header className='header'>
       {<Header />}
     </header>
     <section className='mainContent'>
      {<Page/>}
     </section>
     <footer className='footer'>{<Footer/>}</footer>
    </div>
    </Router>
  );
}

export default App;
