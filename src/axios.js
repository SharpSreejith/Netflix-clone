import axios  from 'axios';
import {baseURL} from './constants/constants.js'

const instance = axios.create({
    baseURL: baseURL,
  });


  export default instance