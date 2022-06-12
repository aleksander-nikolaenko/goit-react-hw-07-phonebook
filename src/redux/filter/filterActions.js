import { createAction } from '@reduxjs/toolkit';

export const setFilterValue = createAction('filter/set');

// import { SET_FILTER } from './filterTypes';
// export const SET_FILTER = 'filter/set';

// export const setFilterValue = value => ({
//   type: SET_FILTER,
//   payload: value,
// });
