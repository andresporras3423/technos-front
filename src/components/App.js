import './../App.css';
import {
  Route, Switch, BrowserRouter
} from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/login">
        <Login option="login" />
      </Route>
      <Route exact path="/signup">
      <Login option="signup" />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
