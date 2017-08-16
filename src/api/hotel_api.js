import axios from 'axios'

// API Hotel
export default class HotelApi {

  static createHotel(data) {
    return axios.post('http://localhost/api/hotels?vendor_id=31', data)
  }

  static getHotel(){
    return axios.get('http://localhost/api/hotels?vendor_id=31')
  }

}
