import './../App.css';
import {
  Route, Switch, HashRouter
} from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
