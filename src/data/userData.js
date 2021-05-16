export const createUser = async (username, email, password, password_confirmation) => {
    const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/user/create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, email: email, password: password, password_confirmation: password_confirmation}),
      });
      const data = await response;
      return data;
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