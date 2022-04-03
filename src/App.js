import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard'
import Blogs from './components/Blogs/Blogs'

function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/reviews' element={ <Reviews/> }></Route>
        <Route path='/dashboard' element={ <Dashboard/> }></Route>
        <Route path='/blogs' element={ <Blogs/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
