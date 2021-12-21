import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  // Link,
  Route
} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <Home path="/home"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
