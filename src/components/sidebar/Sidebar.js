import './sidebar.styl';

import React from 'react';
import Colorbar from '../../containers/colorbar/Colorbar';
import Sizerangebar from '../../containers/sizerangebar/Sizerangebar';
import DefaultTemperatureRangebar from '../../containers/sizerangebar/DefaultTemperatureRangebar';
import About from '../about/About';

const Sidebar = props => (
  <aside className="sidebar" style={{display: props.visible ? 'block' : 'none'}}>
    <Colorbar />
    <Sizerangebar />
    <DefaultTemperatureRangebar />
    <About />
  </aside>
);

export default Sidebar;
