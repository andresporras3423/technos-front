import { useHistory } from "react-router-dom";
function Login(props) {
    const {option} = props;
    const options = new Object();
    options['signup']= {'message': `Already have an account? go to login`, 'link': '/login'};
    options['login']= {'message': `Don't have an account? go to sign up`, 'link': '/signup'};
    const history = useHistory();
  
    const name = () => {
      if (option==="signup") {
        return (
          <>
            <label>Name: </label>
            <input  class="form-control" type="text"/>
          </>
        );
      }
  
      return <></>;
    };

    const passwordConfirmation = () => {
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

    const linkTo = ()=>{
      return (
          <a href="" onClick={()=>history.push(options[option].link)}>{options[option].message}</a>
        )
    };

  return (
    <div className="col-md-12 login-div">
                <div  className="form-login" >
                  {name()}
                    <label>Email: </label>
                    <input  class="form-control" type="text"/>
                    <label>Password: </label>
                    <input className="form-control" type="password"/>
                    {passwordConfirmation()}
                </div>      
                <div><button className="form-control">{option}</button></div>
                {linkTo()}
    </div>
  );
}

export default Login;