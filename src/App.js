import {Login} from './components/login'
import { Home } from './components/home';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import './App.css';

function App() {
  return (
    
   <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
     
  );
}

export default App;



