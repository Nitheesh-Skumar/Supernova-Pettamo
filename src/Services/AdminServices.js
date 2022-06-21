import axios from 'axios'
const apiUrl = ' https://pettamo.netlify.app'
export const listUsers = async (todo) => {
    const response = await axios.post(apiUrl+"/.netlify/functions/listUsers", todo);
    return response.data
  };

  export const deleteUser = async (todo) => {
    const response = await axios.post(apiUrl+"/.netlify/functions/deleteUser", todo);
    return response.data
  };

