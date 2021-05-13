export const createSession = async (email, password) => {
    const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/session/create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password}),
      });
      const data = await response;
      return data;
  };

  export const destroySession = async (email, password) => {
    const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/session/destroy`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response;
      return data;
  };

  export default {createSession, destroySession}