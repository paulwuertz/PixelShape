import './editmodeswitch.styl';

import React, { Component } from 'react';

class EditModeSwitch extends Component {
  constructor (...args) {
    super(...args);
    this.state = {
      selectionMode: false
    };
  }

  onClick (val) {
    this.props.setSelectionMode(val);
  }

  render () {
    return (
      <aside className="editmodeswitch">
        <button
          className={
            (this.state.selectionMode)
              ? 'editmodeswitch__buttons'
              : 'editmodeswitch__buttons editmodeswitch__selected'
          }
          btnTooltip="Freestyle Editing"
          width="30" height="30" icon="new-project"
          onClick={() => {
            this.setState({
              selectionMode: false
            });
            this.props.setSelectionMode(false);
          }}>
            Free-Style Editing
          </button>
        <button
          className={
            (!this.state.selectionMode)
              ? 'editmodeswitch__buttons'
              : 'editmodeswitch__buttons editmodeswitch__selected'
          }
          btnTooltip="Edit by selection"
          width="30" height="30" icon="new-project"
          onClick={() => {
            this.setState({
              selectionMode: true
            });
            this.props.setSelectionMode(true);
          }}>
            Group Editing
          </button>
      </aside>
    );
  }
}

export default EditModeSwitch;
