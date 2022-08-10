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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contacts' element={<Contact></Contact>}></Route>
          <Route path='/task2' element={<Task2></Task2>}></Route>
          <Route path='/task3' element={<Task3></Task3>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
