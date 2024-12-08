import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000/api', // 後端的 API 基本 URL
});

export default api;
