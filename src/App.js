import './App.css';
import {
  Route, Switch,
} from 'react-router-dom';
import Login from './Login';
import Main from './Main';

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
    <Main />
    </Route>
    </Switch>
  );
}

export default App;
