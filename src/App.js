
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
    <Login message="this is login" />
    </Route>
    <Route exact path="/signup">
    <Login message="this is signup" />
    </Route>
    <Route exact path="/">
    <Main />
    </Route>
    </Switch>
  );
}

export default App;
