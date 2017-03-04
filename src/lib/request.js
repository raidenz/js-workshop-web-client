import axios from 'axios';
import moment from 'moment';

export const API_BASE_URL = 'http://localhost:8080/api/v1';

/**
 * Ask question to backend server.
 * @param  {String} message
 * @return {Promise}
 */
export const askQuestion = (message) => {
  const payload = { question: message };

  return axios.post(`${API_BASE_URL}/chat`, payload)
    .then((response) => {
      const { data } = response.data;

      return {
        text: data.answer,
        author: 'Bot',
        createdAt: moment().local().format(),
      };
    })
};

/**
 * Log user in.
 * @param  {Object} facebookUser
 * @return {Promise}
 */
export const logIn = (facebookUser) =>
  axios.post(`${API_BASE_URL}/login`, facebookUser);
