import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from 'components/App';
import store from 'redux/store';
import { myActions } from 'redux/actions';

import './index.css';

// console.log(store);
// console.log(store.dispatch(myActions(5)));
store.dispatch(myActions(5));
store.dispatch({
  type: 'resetValue',
  payload: 0,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
