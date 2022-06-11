import { createStore } from 'redux';

const rootReducer = (state = { value: 0 }, action) => {
  console.log(action);
  switch (action.type) {
    case 'setValue':
      return { value: action.payload };

    default:
      return state;
  }
};
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
