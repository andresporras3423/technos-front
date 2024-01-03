import { url }  from './global';

export const createTest = async (correct, total) => {
    const response = await fetch(`${url}tests`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'id': localStorage.getItem('id'),
          'token': localStorage.getItem('token'),
        },
        body: JSON.stringify({correct: correct, total: total})
      });
      const data = await response;
      return data;
};

export const getTest = async () => {
    const response = await fetch(`${url}tests`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'id': localStorage.getItem('id'),
          'token': localStorage.getItem('token'),
        }
      });
      const data = await response.json();
      return data;
};

export default {createTest, getTest}