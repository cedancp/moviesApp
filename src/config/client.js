import axios from 'axios';
import {api} from './constants';

const client = axios.create({
  baseURL: api.baseUrl,
});

export default client;
