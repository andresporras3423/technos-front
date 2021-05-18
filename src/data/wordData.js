export const createWord = async (techno_id, word, translation) => {
    let dataRequest = {};
    const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/word/create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'id': localStorage.getItem('id'),
          'token': localStorage.getItem('token'),
        },
        body: JSON.stringify({techno_id: techno_id, word: word, translation: translation})
      }).then((data)=>{
        dataRequest.status = data.status;
        return data.json();
      }).then((data)=>{
        dataRequest.errors= data;
      });
      await response;
      return dataRequest;
};

export const updateWord = async (id, word, translation, techno_id) => {
    const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/word/update`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'id': localStorage.getItem('id'),
          'token': localStorage.getItem('token'),
        },
        body: JSON.stringify({id: id, word: word, translation: translation, techno_id: techno_id})
      });
      const data = await response;
      return data;
};

export const searchWord = async (sort_by_word, search, word, translation, techno_id) => {
  let dataWords={};  
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
        dataWords.status = data.status;
        return data.json();
      }).then((words)=>{
        dataWords.list=words;
      });
      await response;
      return dataWords;
};

export const deleteWord = async (id) => {
    const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/word/delete?id=${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'id': localStorage.getItem('id'),
          'token': localStorage.getItem('token'),
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