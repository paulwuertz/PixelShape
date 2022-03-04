import './sidebar.styl';

import React from 'react';
import EditModeSwitch from '../../containers/editmodeswitch/EditModeSwitch';

function Sidebar (props) {
  let selecttools;
  if (props.selectionMode) {
    selecttools = <div style={{marginTop: '60px'}}>
      <div className="sidebar__label">
          Group Selection Mode
      </div>
    </div>;
  } else {
    selecttools = <div style={{marginTop: '60px'}}>
      <div className="sidebar__label">
          Groups are not available in Freestyle-Editing mode.
      </div>
    </div>;
  }

  return (
    <aside className="sidebar" style={{display: props.visible ? 'block' : 'none'}}>
      <EditModeSwitch />
      {selecttools}
    </aside>
  );
}

export default Sidebar;
