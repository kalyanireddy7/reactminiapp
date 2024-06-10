import {Login} from './components/login'
import { Home } from './components/home';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import './App.css';

function App() {
  return (
    
   <BrowserRouter>
      <Routes>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;

