import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://udemy-burgerbuilder-d623e.firebaseio.com/'
});

export default instance;
