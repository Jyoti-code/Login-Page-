import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/login';
import Register from './components/register/register';

import './App.css';
function App() {
  return (
    <Router>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
