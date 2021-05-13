import {useState} from 'react';
import { useHistory } from "react-router-dom";
import {createSession} from "./../data/sessionData";
import {indexUser} from "./../data/userData";
function Login(props) {
    const {option} = props;
    const options = new Object();
    options['signup']= {'message': `Already have an account? go to login`, 'link': '/login'};
    options['login']= {'message': `Don't have an account? go to sign up`, 'link': '/signup'};
    const history = useHistory();
    const [statusMessage, setStatusMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [email, setEmail] = useState('');
  
    const name = () => {
      if (option==="signup") {
        return (
          <>
            <label>Name: </label>
            <input  className="form-control" type="text"/>
          </>
        );
      }
  
      return <></>;
    };

    const confirmPassword = () => {
      if (option==="signup") {
        return (
          <>
            <label>Password confirmation: </label>
            <input className="form-control" type="password"/>
          </>
        );
      }
  
      return <></>;
    };

    const loginForm = async ()=>{
      //createUser('','','','');
      debugger;
      const data = await createSession(email, password);
      // const data2 = await indexUser();
      // console.log(data2);
      if(data.status===401) setStatusMessage("The user doesn't exists or password is not correct");
      else {
        localStorage.setItem('id', data.id);
        localStorage.setItem('remember_token', data.remember_token);
        history.push('');
      }
    };

  return (
    <div className="col-md-12 login-div">
                <div  className="form-login" >
                  {name()}
                    <label>Email: </label>
                    <input  className="form-control" type="text" onChange={(e)=>setEmail(e.target.value)} />
                    <label>Password: </label>
                    <input className="form-control" type="password" onChange={(e)=>setPassword(e.target.value)} />
                    {confirmPassword()}
                </div>      
                <div><button className="form-control" onClick={loginForm}>{option}</button></div>
                <a href="" onClick={()=>history.push(options[option].link)}>{options[option].message}</a>
                <div>{statusMessage}</div>
    </div>
  );
}

export default Login;