import React        from 'react';
import { render }   from 'react-dom';
import { Provider } from 'react-redux';
import store        from './store/configureStore.jsx';
import App          from './components/App.jsx';
import { ENTRY }    from './config/constants.jsx'
import              './style.scss';

render(<Provider store={store}>
           <App />
       </Provider>,
       document.getElementById(ENTRY));
