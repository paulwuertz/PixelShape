import './sidebar.styl';

import React from 'react';
import EditModeSwitch from '../../containers/editmodeswitch/EditModeSwitch';

const Sidebar = props => (
  <aside className="sidebar" style={{display: props.visible ? 'block' : 'none'}}>
    <EditModeSwitch />
  </aside>
);

export default Sidebar;
