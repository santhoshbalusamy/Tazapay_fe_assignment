import axios from 'axios';
const baseUrl = process.env.VUE_APP_SERVICE_URL;
const headers = { accept: 'application/json' };


const DataService = {
  getAgreements() {
    return axios.get(`${baseUrl}/agreement`, { headers })
    .then(res => res.data);
  },

  saveAgreement(data) {
    return axios.patch(`${baseUrl}/agreement`,data, { headers })
    .then(res => res.data);
  },

  getVechicleList() {
    return axios.get('https://swapi.dev/api/vehicles/', { headers })
    .then(res => res.data);
  },

  getVechicleDetails({ vechicleId }) {
    return axios.get(`https://swapi.dev/api/vehicles/${vechicleId}`, { headers })
    .then(res => res.data);
  },
 };

export default DataService;
