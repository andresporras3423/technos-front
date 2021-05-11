export const createTechno = async (email, password) => {
    const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/techno/create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email, password: password})
      });
      const data = await response;
      return data;
};