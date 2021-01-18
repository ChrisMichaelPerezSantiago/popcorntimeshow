import {
  SET_IS_LOADING_SHOW_DATA,
  SET_SHOWS_DATA,
  SET_IS_LOADING_MOVIES_DATA,
  SET_MOVIES_DATA
} from './types.js';
import { 
  shows,
  movies
} from 'popcorntime';
import { nSQL } from '@nano-sql/core';

nSQL().useDatabase('popcorntimedb');

export const actions = {
  async GET_SHOWS_DATA({commit}, options){
    commit(SET_IS_LOADING_SHOW_DATA , true);
    const data = await shows(options);
    nSQL('shows')
      .query('upsert', data)
      .exec()
      .then(async res =>{
        commit(SET_SHOWS_DATA, res);
        setTimeout(() => {
          commit(SET_IS_LOADING_SHOW_DATA , false);
        }, 1000);
      }).catch((err) => new Error(err));
    },
  async GET_MOVIES_DATA({commit}, options){
    commit(SET_IS_LOADING_MOVIES_DATA , true);
    const data = await movies(options);
    nSQL('movies')
      .query('upsert', data)
      .exec()
      .then(async res =>{
        commit(SET_MOVIES_DATA, res);
        setTimeout(() => {
          commit(SET_IS_LOADING_MOVIES_DATA , false);
        }, 1000);
      }).catch((err) => new Error(err));
  }
};