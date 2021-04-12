import './../App.css';
import {
  Route, Switch,
} from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  
  return (
    <Switch>
      <Route exact path="/login">
        <Login option="login" />
      </Route>
      <Route exact path="/signup">
      <Login option="signup" />
      </Route>
      <Route exact path="/">
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default App;
