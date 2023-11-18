import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'; // отслеживает историю навигаций
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from "./utils/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <ErrorBoundary>
          <App />
      </ErrorBoundary>
  </ BrowserRouter>
);


reportWebVitals();
