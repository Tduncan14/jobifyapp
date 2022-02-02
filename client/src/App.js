

import styled from 'styled-components';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import{Landing,Dashboard,Register,Error} from './pages';





const Button = styled.button`

    background:red;
    color:white;
    font-size:1rem;



`


const ButtonSecond = styled.button`
 background:blue;
 color:white;
 font-size:1rem;
`


function App() {
  return (
    <BrowserRouter>
    <nav >
      <Link to="/">Dashboard</Link>
      <Link to="/">Register</Link>
      <Link to="/landing">Landing</Link>
    </nav>
    <Routes>
     <Route path="/"  element={<Dashboard />}/>
     <Route path="/register"  element={<Register/>}/>
     <Route path="/landing"  element={<Landing/>}/>
     <Route path="*"  element={<Error/>}/>

     </Routes>
    </BrowserRouter>
  );
}



export default App;
