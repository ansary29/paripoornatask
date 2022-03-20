import axios from 'axios';


const url = 'http://localhost:5000/users';

export const fetchBio = () => axios.get(url);

export const createBio = (newBio) => axios.post(url, newBio);

export const updateBio = (id, updatedBio) => axios.put(`${url}/${id}`, updatedBio);

export const deleteBio = (id) => axios.delete(`${url}/${id}`);


