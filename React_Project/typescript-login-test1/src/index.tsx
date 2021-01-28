import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/materialUiTheme';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Auth0Provider
          domain="dev-dghvv4zm.us.auth0.com"
          clientId="Oe1FF26XXT9yXnHo6RJBCpaDYBKs6Yf6"
          redirectUri={window.location.origin}>
        <App />
        </Auth0Provider>
      </ThemeProvider>      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
