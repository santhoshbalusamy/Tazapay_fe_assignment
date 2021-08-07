
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
};

export default actions;
