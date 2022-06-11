import { SET_FILTER } from './filterTypes';

export const setFilterValue = value => ({
  type: SET_FILTER,
  payload: value,
});
