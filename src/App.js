import './App.css';
import
{
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Task2 from './Components/Task2';
import Task3 from './Components/Task3';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import BookNow from './Components/BookNow';
import SecretNumber from './Components/SecretNumber';
import PrivateRoute from './Components/PrivateRoute';

export const UseContext=createContext();

function App() {

 

  const [userData,setUserData]=useState({
    email:'',
    password:''
  })

  
  return (
    <UseContext.Provider value={[userData,setUserData]}>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contacts' element={<Contact></Contact>}></Route>
          <Route path='/task2' element={<Task2></Task2>}></Route>
          <Route path='/task3' element={<Task3></Task3>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route element={<PrivateRoute></PrivateRoute>}>
          <Route path='/bookNow' element={<BookNow></BookNow>}></Route>
          </Route>
          <Route path='/confirm' element={<SecretNumber></SecretNumber>}></Route>
        </Routes>
      </Router>

    </UseContext.Provider>
      
    
  );
}

export default App;
