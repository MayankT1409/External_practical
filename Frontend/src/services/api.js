
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Make sure this matches your backend server URL
  withCredentials: true, 
});

export default api;
