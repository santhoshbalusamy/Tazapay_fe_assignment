const mutations = {
 SET_AGREEMENTS(state, payload) {
  state.agreements = payload;
 },

 RESET_DATA_FETCH_FLAG(state) {
  state.isDataFetched = false;
 },

 DATA_FETCH_COMPLETE(state) {
  state.isDataFetched = true;
  },

  SET_VECHICLES(state, payload) {
    state.vechicles = payload;
  },

  SET_VECHICLE_DETAILS(state, payload) {
    state.vechicleDetails[payload.vechicleName] = payload.details;
  },
};

export default mutations;
