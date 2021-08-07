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
};

export default mutations;
