import { createReducer } from '@reduxjs/toolkit';
import { setFilterValue } from './filterActions';

export const filterReducer = createReducer('', {
  [setFilterValue]: (state, { payload }) => payload,
});

// import { SET_FILTER } from './filterTypes';
// export const SET_FILTER = 'filter/set';

// export const filterReducer = (state = '', action) => {
//   switch (action.type) {
//     case SET_FILTER:
//       return action.payload;

//     default:
//       return state;
//   }
// };
