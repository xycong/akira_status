import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Status from './components/Status';

const store = configureStore();

ReactDOM.render(
  // Wrap components to pass store down as props
  <Provider store={store}>
    <Status />
  </Provider>,
  <App />, document.getElementById('root'));
registerServiceWorker();
