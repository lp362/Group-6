import './App.css';
import NavBar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Enroll from './Pages/Enroll';
import Pages from './Pages/Pages';
import Course from './Pages/Course';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignup';

function App() {
  return (
    <div>

      <BrowserRouter>
      <NavBar/>
      <Routes>

        <Route path='/' element={<Enroll/>}/>
        <Route path='/aboutUs' element={<Pages category="aboutUs"/>}/>
        <Route path='/courses' element={<Pages category="courses"/>}/>
        <Route path='/contactUs' element={<Pages category="contactUs"/>}/>
        <Route path='/course' element={<Course/>}>
          <Route path=':courseID' element={<Course/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element ={<LoginSignUp/>}/>


      </Routes>
      
      </BrowserRouter>
    
    </div>
    
  );
}

export default App;
