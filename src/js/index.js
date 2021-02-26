import '../scss/style.scss';
import React from 'react';
import { render } from 'react-dom';
//import 'leaflet/dist/leaflet';

import App from '@components/App';

const wrapper = document.getElementById('app');
render(
   <App />,
   wrapper
);

//------------------------------------


if (module && module.hot) {
   module.hot.accept();
}


