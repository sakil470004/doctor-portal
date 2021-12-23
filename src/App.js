import './App.css';
import {
  BrowserRouter,
  Switch,
  // Link,
  Route
} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch >
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/register" >
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
