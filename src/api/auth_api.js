import axios from 'axios'
import { SubmissionError } from 'redux-form'

// API Auth
export default class AuthApi {

  static login(data) {
    return axios.post('http://localhost:8080/api/login', data)
    .then(res => { 
      console.log(res)
      return res
    })
    .catch(error => {
      console.log(error.response.data)
      throw new SubmissionError(error.response.data)
    })
  }

  static register(data) {
    return axios.post('http://localhost/api/register?vendor=true', data)
  }

}
