import './sizerangebar.styl';

import React, { Component } from 'react';
import classNames from 'classnames';

class DefaultTemperatureRangebar extends Component {
  constructor (...args) {
    super(...args);
    this.state = {};
  }

  onChange (ev) {
    this.props.setBaseTemp(ev.target.value);
  }

  render () {
    const classes = classNames('defaulttemperaturerangebar__value');

    return (
      <div className="defaulttemperaturerangebar">
        <div className="defaulttemperaturerangebar__label">Base Temperature</div>
        <input
          className="defaulttemperaturerangebar__input"
          type="range"
          step="1"
          min="10"
          max="255"
          value={this.props.currentBaseTemp}
          onChange={this.onChange.bind(this)} />
        <div className="defaulttemperaturerangebar__text">
          <input
            type="number"
            min="10"
            max="255"
            value={this.props.currentBaseTemp}
            onChange={this.onChange.bind(this)} />
        </div>
      </div>
    );
  }
}

export default DefaultTemperatureRangebar;
