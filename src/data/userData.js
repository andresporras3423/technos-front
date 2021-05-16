export const createUser = async (username, email, password, password_confirmation) => {
  const listData=new Object();  
  const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/user/create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, email: email, password: password, password_confirmation: password_confirmation}),
      }).then((data)=>{
        listData['status']=data.status;
        return data.json()
      }).then((data)=>{
        listData['errors']=data;
      });
      await response;
      return listData;
};

export const indexUser = async () => {
  const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/user/index`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'id': localStorage.getItem('id'),
        'token': localStorage.getItem('token'),
      },
    });
    const data = await response;
    return data;
};

export default {createUser, indexUser}