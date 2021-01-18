const {
  SET_IS_LOADING_SHOW_DATA,
  SET_SHOWS_DATA,
  SET_IS_LOADING_MOVIES_DATA,
  SET_MOVIES_DATA
} = require('./types.js');

export const mutations = {
  [SET_SHOWS_DATA](state , payload){
    state.shows.data = payload;
  },
  [SET_IS_LOADING_SHOW_DATA](state , payload){
    state.shows.isLoading = payload;
  },
  [SET_MOVIES_DATA](state , payload){
    state.movies.data = payload;
  },
  [SET_IS_LOADING_MOVIES_DATA](state , payload){
    state.movies.isLoading = payload;
  }
};