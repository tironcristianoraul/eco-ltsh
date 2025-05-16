import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import store from './store/index.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const persistor = persistStore(store);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading='Loading...' persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
