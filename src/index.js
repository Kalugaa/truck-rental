import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PersistGate loading={<p>Loading...</p>} > */}
    <Provider store={store}>
      <BrowserRouter basename='/truck-rental'>
        <App />
      </BrowserRouter>
    </Provider>
    {/* </PersistGate> */}
  </React.StrictMode>
);

