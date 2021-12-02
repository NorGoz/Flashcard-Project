import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Learn from '../pages/Learn';
import NewWordPage from '../pages/NewWordPage';
import ErrorPage from '../pages/ErrorPage'

const Page = () => {
    return(
        <>
        <Routes>
        <Route path="/"  element={<HomePage/>} />
        <Route path="/newWord" element={<NewWordPage/>} />
        <Route path="learn/*" element={<Learn/>}/>
        <Route element={<ErrorPage/>} />
        </Routes>
        </>
    )
}

export default Page