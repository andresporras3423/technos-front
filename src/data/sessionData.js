export const createSession = async (email, password) => {
    let dataResponse=null;
    const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/session/create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password}),
      })
      .then((data)=>{
          dataResponse=data;
          debugger;
          return  data.json();
            })
            .then((loginData)=>{
              debugger;
              localStorage.setItem('id', loginData.id);
              localStorage.setItem('remember_token', loginData.remember_token);
            });
            await response;
            return dataResponse;
  };

  export const destroySession = async (email, password) => {
    const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/session/destroy`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'id': localStorage.getItem('id'),
          'remember_token': localStorage.getItem('remember_token'),
        },
      });
      const data = await response;
      localStorage.removeItem('id')
      localStorage.removeItem('remember_token');
      return data;
  };

  export default {createSession, destroySession}