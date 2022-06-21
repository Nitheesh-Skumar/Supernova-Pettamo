import axios from 'axios'
const apiUrl = ' https://pettamo.netlify.app'
export const createUser = async (body) => {
    const response = await axios.post(apiUrl+"/.netlify/functions/createUser", body);
    return response.data
  };

 export const updateUser = async (body) => {
    const response = await axios.post(apiUrl+"/.netlify/functions/updateUser", body);
    return response.data
  };

  export const authenticate = async (body) => {
    const response = await axios.post(apiUrl+"/.netlify/functions/authenticate", body);
    return response.data
  };



  //service
  export const listService = async (body) => {
    const response = await axios.post(apiUrl+"/.netlify/functions/listService", body);
    return response.data
  };

  export const createService = async (body) => {
    const response = await axios.post(apiUrl+"/.netlify/functions/createService", body);
    return response.data
  };

//pets

export const listPets = async (body) => {
  const response = await axios.post(apiUrl+"/.netlify/functions/listPets", body);
  return response.data
};

export const createPets = async (body) => {
  const response = await axios.post(apiUrl+"/.netlify/functions/createPet", body);
  return response.data
};

//appointments

export const listAppointments = async (body) => {
  const response = await axios.post(apiUrl+"/.netlify/functions/listAppointments", body);
  return response.data
};

export const createAppointments = async (body) => {
  const response = await axios.post(apiUrl+"/.netlify/functions/createAppointment", body);
  return response.data
};





