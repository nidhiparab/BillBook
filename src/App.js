import logo from './logo.svg';
import './App.css';
import { Button } from "react-bootstrap";
import  Header  from "./Header.js";
import { BrowserRouter, Route  } from "react-router-dom";
import Login from './Login';
import Home from './Home';
// import Register from './Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <h1>Bill Book System</h1>
      <Route path="/Login">
        <Login/>
      </Route>
      <Route path="/Home">
        <Home/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
