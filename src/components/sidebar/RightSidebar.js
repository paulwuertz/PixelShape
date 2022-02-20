import './sidebar.styl';

import React from 'react';

const Sidebar = props => (
  <aside className="sidebar" style={{display: props.visible ? 'block' : 'none'}}>
  </aside>
);

export default Sidebar;
