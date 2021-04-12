function Login(props) {
    const {message} = props;
  return (
    <div className="col-md-12 login-div">
                <div  className="form-login" >
                    <label>email</label>
                    <input  class="form-control" type="text"/>
                    <label>password</label>
                    <input className="form-control" type="password"/>
                </div>      
                <div><button className="form-control">login</button></div>
                <div>{message}</div>
    </div>
  );
}

export default Login;