import axios from 'axios';

export default {
  get () {
    return axios.get('/api/book/all');
  },
};