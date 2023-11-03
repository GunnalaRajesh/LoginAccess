
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Auth0Provider} from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-akm2u2gd6g277n1j.us.auth0.com"
    clientId="SiRre9MaH30vE2ABwDcwpbbOrZMm20h6"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
