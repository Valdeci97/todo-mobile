import axios from 'axios';

import translation from './translation';

const api = axios.create({ baseURL: 'http://10.0.2.2:3000/task' });

const getTasks = async (filter) => {
  try {
    const info = translation(filter);
    const { data } = await api.get(`/filter/${info}/11:11:11:11:11:11`);
    return data;
  } catch (err) {
    return { error: err.response.data.error };
  }
};

const getLateTasks = async () => {
  try {
    const { data } = await api.get('/filter/late/11:11:11:11:11:11');
    return data.length;
  } catch (err) {
    return { error: err.response.data.error };
  }
};

const createTask = async (task) => {
  try {
    const { macaddress, type, title, description, date, hour } = task;
    const when = `${date}T${hour}`;
    const result = await api.post('/', {
      macaddress,
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

export { getTasks, getLateTasks, createTask };
