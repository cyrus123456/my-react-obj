import axios from 'axios';

// import { BASE_URL, TIMEOUT} from './config';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  // baseURL: 'http://10.136.60.100:3000/api',
  timeout: 5000
})

//添加拦截
instance.interceptors.request.use(config => {
  console.log('请求被拦截')
  return config
}, error => {

})

instance.interceptors.response.use(res => {

  return res.data
}, error => {
  return error;
})

export default instance;
