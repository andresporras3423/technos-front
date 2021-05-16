export const createWord = async (techno_id, word, translation) => {
    const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/word/create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({techno_id: techno_id, word: word, translation: translation})
      });
      const data = await response;
      return data;
};

export const updateWord = async (id, word, translation, techno_id) => {
    const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/word/update`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: id, word: word, translation: translation, techno_id: techno_id})
      });
      const data = await response;
      return data;
};

export const searchWord = async (sort_by_word, search, word, translation, techno_id, history) => {
  let listWords=[];  
  const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/word/search`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'id': localStorage.getItem('id'),
          'token': localStorage.getItem('token'),
        },
        body: JSON.stringify({sort_by_word: sort_by_word, search: search, word: word, translation: translation, techno_id: techno_id} )
      }).then((data)=>{
        if(data.status===401) history.push('/login');
        return data.json();
      }).then((words)=>{
        listWords=words;
      });
      await response;
      return listWords;
};

export const deleteWord = async (id) => {
    const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/word/delete?id=${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      });
      const data = await response;
      return data;
};

export const nextQuestionWord = async (techno_id) => {
    const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/word/next_question?techno_id=${techno_id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      });
      const data = await response;
      return data;
};

  export default {createWord, updateWord, searchWord, deleteWord, nextQuestionWord}