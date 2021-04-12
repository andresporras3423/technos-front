function Login(props) {
    const {option} = props;
    const options = new Object();
  
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
    </div>
  );
}

export default Login;