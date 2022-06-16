import {
  get,
} from './request';
import Config from '../utils/config';

const {
  baseURL,
} = Config;

export const list = async() => get(`${baseURL}/breweries`, undefined);
