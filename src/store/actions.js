
import DataService from '../api/DataService';

const actions = {
  async loadAgreements({ commit }) {
    commit('RESET_DATA_FETCH_FLAG');
    const response = await DataService.getAgreements();
    commit('SET_AGREEMENTS', response);
    commit('DATA_FETCH_COMPLETE');
    return response;
  },
  // eslint-disable-next-line
  async saveAgreement({ commit }, data) {
    const details = await DataService.saveAgreement(data);
    return details;
  },

  async getVechicleList({ commit }) {
    commit('RESET_DATA_FETCH_FLAG');
    const response = await DataService.getVechicleList();
    commit('SET_VECHICLES', response.results);
    commit('DATA_FETCH_COMPLETE');
    return response;
  },

  async getVechicleDetails({ commit }, { vechicleId, vechicleName}) {
    commit('RESET_DATA_FETCH_FLAG');
    const details = await DataService.getVechicleDetails({ vechicleId });
    commit('SET_VECHICLE_DETAILS', { details, vechicleName });
    commit('DATA_FETCH_COMPLETE');
    return details;
  },
};

export default actions;
