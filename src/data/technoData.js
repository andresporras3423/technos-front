export const createTechno = async (techno_name, techno_status) => {
  let dataRequest = {};  
  const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/techno/create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'id': localStorage.getItem('id'),
          'token': localStorage.getItem('token'),
        },
        body: JSON.stringify({techno_name: techno_name, techno_status: techno_status})
      }).then((data)=>{
        dataRequest.status = data.status;
        return data.json();
      }).then((data)=>{
        dataRequest.errors= data;
      });
      await response;
      return dataRequest;
};

export const updateTechno = async (id, techno_name, techno_status) => {
  debugger;
  let dataRequest = {};   
  const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/techno/update`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'id': localStorage.getItem('id'),
          'token': localStorage.getItem('token'),
        },
        body: JSON.stringify({id: id, techno_name: techno_name, techno_status: techno_status})
      }).then((data)=>{
        dataRequest.status = data.status;
        return data.json();
      }).then((data)=>{
        dataRequest.errors= data;
      });
      await response;
      return dataRequest;
};

export const getTechno = async (sort_by_name) => {
    const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/techno/get?sort_by_name=${sort_by_name}`, {
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

export const searchTechno = async (sort_by_name, search, techno_name, techno_status) => {
  let dataTechnos={};
    const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/techno/search`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'id': localStorage.getItem('id'),
          'token': localStorage.getItem('token'),
        },
        body: JSON.stringify({sort_by_name: sort_by_name, search: search, techno_name: techno_name, techno_status: techno_status} )
      }).then((data)=>{
        dataTechnos.status = data.status;
        return data.json();
      }).then((technos)=>{
        dataTechnos.list=technos;
      });;
      await response;
      return dataTechnos;
};

export const deleteTechno = async (id) => {
    const response = await fetch(`https://hidden-plateau-07048.herokuapp.com/techno/delete?id=${id}`, {
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

  export default {createTechno, updateTechno, getTechno, searchTechno, deleteTechno}