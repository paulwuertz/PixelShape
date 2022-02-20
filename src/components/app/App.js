import './app.styl';

import React, { Component } from 'react';
import Toolbar from '../../containers/toolbar/Toolbar';
import Surface from '../../containers/surface/Surface';
import Sidebar from '../../containers/sidebar/Sidebar';
import RightSidebar from '../../containers/sidebar/RightSidebar';
import Framebar from '../../containers/framebar/Framebar';
import Apptoolbox from '../../containers/apptoolbox/Apptoolbox';

class App extends Component {
  constructor (...args) {
    super(...args);
  }

  applyConstraints () {
    this.props.setSurfaceConstraints(window.document.body.clientWidth, window.document.body.clientHeight);
  }

  componentDidMount () {
    this.applyConstraints();
  }

  componentDidUpdate () {
    this.applyConstraints();
  }

  render () {
    return (
      <div className="app" data-guid={this.props.guid}>
        <Sidebar />
        <Toolbar />
        <div className="app__content">
          <Apptoolbox />
          <Surface />
          <Framebar />
        </div>
        <RightSidebar />
      </div>
    );
  }
}

export default App;
