import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

/*
ReactDOM.render(
    <App />
    , document.getElementById('root')
);
*/
/* line below works with react 18 */

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
