import { url }  from './global';
export const createSession = async (email, password) => {
    let dataResponse=null;
    const response = await fetch(`${url}sessions`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
      })
      .then((data)=>{
          dataResponse=data;
          return  data.json();
            })
            .then((loginData)=>{
              localStorage.setItem('id', loginData.id);
              localStorage.setItem('token', loginData.remember_token);
            });
            await response;
            return dataResponse;
  };

  export const destroySession = async (email, password) => {
    const response = await fetch(`${url}sessions`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'id': localStorage.getItem('id'),
          'token': localStorage.getItem('token'),
        },
      });
      const data = await response;
      localStorage.removeItem('id')
      localStorage.removeItem('token');
      return data;
  };

  export default {createSession, destroySession}