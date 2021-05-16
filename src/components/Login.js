import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {createSession} from "./../data/sessionData";
import {indexUser, createUser} from './../data/userData';
function Login(props) {
    const {option} = props;
    const options = new Object();
    options['signup']= {'message': `Already have an account? go to login`, 'link': '/login'};
    options['login']= {'message': `Don't have an account? go to sign up`, 'link': '/signup'};
    const history = useHistory();
    const [statusMessage, setStatusMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [logged, setLogged] = useState(true)
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
      (
        async ()=>{
          const data = await indexUser();
          if(data.status===200) history.push('');
          else setLogged(false);
        }
      )();
      }, []);
  
    const name = () => {
      if (option==="signup") {
        return (
          <>
            <label>Name: </label>
            <input  className="form-control" type="text" onChange={(e)=>setUsername(e.target.value)}/>
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
            <input className="form-control" type="password" onChange={(e)=>setPasswordConfirmation(e.target.value)} />
          </>
        );
      }
      return <></>;
    };

    const startLogin = async ()=>{
      const data = await createSession(email, password);
        if(data.status===401) setStatusMessage("The user doesn't exists or password is not correct");
        else {
          history.push('');
        }
    };

    const loginForm = async ()=>{
      if(option==="login"){
        await startLogin();
      }
      else{
        const data = await createUser(username, email, password, passwordConfirmation);
        if(data.status===409){
          let nMessage = "";
          Object.entries(data.errors).forEach((item)=>{
            nMessage+=`${item[0]}: ${item[1]}</br>`;
          });
          setStatusMessage(nMessage);
        } 
        else await startLogin();
      }
    };
  if(logged) return (<></>);
  else return (
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
                <div>
                  <pre dangerouslySetInnerHTML={{ __html: statusMessage }}></pre>
                </div>
    </div>
  );
}

export default Login;