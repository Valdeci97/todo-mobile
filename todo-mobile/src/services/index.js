import axios from 'axios';

import translation from './translation';
import getDeviceId from '../utils/getDeviceId';

const api = axios.create({ baseURL: 'http://10.0.2.2:3000/task' });

const getTasks = async (filter) => {
  try {
    const info = translation(filter);
    const deviceId = await getDeviceId();
    const { data } = await api.get(`/filter/${info}/${deviceId}`);
    console.log(data);
    return data;
  } catch (err) {
    return { error: err.response.data.error };
  }
};

const getLateTasks = async () => {
  try {
    const deviceId = await getDeviceId();
    const { data } = await api.get(`/filter/late/${deviceId}`);
    return data.length;
  } catch (err) {
    return { error: err.response.data.error };
  }
};

const createTask = async (task) => {
  try {
    const deviceId = await getDeviceId();
    const { type, title, description, date, hour } = task;
    const when = `${date}T${hour}`;
    const result = await api.post('/', {
      macaddress: deviceId,
      type,
      title,
      description,
      when,
    });
    return result;
  } catch (err) {
    return { error: err.response.data.error };
  }
};

const getTaskById = async (id) => {
  try {
    if (!id) return false;
    const { data } = await api.get(`/${id}`);
    return data;
  } catch (err) {
    return { error: err.response.data.error }
  }

}

export { getTasks, getLateTasks, createTask, getTaskById };
