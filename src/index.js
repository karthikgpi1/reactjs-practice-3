import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Props from './Props';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Props name="karthik" age={22} city="vellore" gender="male" />
);

