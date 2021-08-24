const getters = {
 agreements: state => state.agreements,
 isDataFetched: state => state.isDataFetched,
 vechicles: state => state.vechicles,
 vechicleDetail: state => name => state.vechicleDetails[name],
};

export default getters;
