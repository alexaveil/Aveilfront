/* import external modules */
import axios from 'axios'

/* import internal modules */
import { BASE_URL } from '../config'

export const getMessagesById = (id) => {
  return axios.get(`${BASE_URL}/get_messages/${id}`)
}

export const askQuestion = (question) => {
  return axios.post(`${BASE_URL}/ask_question`, question)
}
