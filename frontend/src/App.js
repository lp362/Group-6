import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Enroll from './Pages/Enroll';
import Pages from './Pages/Pages';
import Course from './Pages/Course';
import Cart from './Pages/Cart';
import Login from './Pages/Login';

function App() {
  return (


    <BrowserRouter>
     <NavBar/>

     <Routes>
     <Route path='/' element={<Enroll/>}/>
     <Route path='/aboutUs' element={<Pages category="aboutUs"/>}/>
     <Route path='/courses' element={<Course category="courses"/>}/>
     <Route path='/contactUs' element={<Pages category="contactUs"/>}/>
     <Route path='/course' element={<Course/>}>
        <Route path=':courseID' element={<Course/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element ={<Login/>}/>

     </Routes>
    </BrowserRouter>

   

    

  );
}

export default App;
