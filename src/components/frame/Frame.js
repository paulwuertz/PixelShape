import './frame.styl';

import React, { Component } from 'react';
import classNames from 'classnames';

class Frame extends Component {
  constructor (...args) {
    super(...args);
  }

  componentDidMount () {
    this.context = this._frameCanvas.getContext('2d');
    this.context.mozImageSmoothingEnabled = false;
    this.context.webkitImageSmoothingEnabled = false;
    this.context.msImageSmoothingEnabled = false;
    this.context.imageSmoothingEnabled = false;
    this.updateFrameCanvas();
  }

  componentDidUpdate () {
    this.updateFrameCanvas();
  }

  updateFrameCanvas () {
    this.context.putImageData(this.props.imageData, 0, 0);
    // window.createImageBitmap(this.props.imageData)
    //   .then(data => this.context.drawImage(data, 0, 0));
  }

  render () {
    const classes = classNames(
      'frame',
      {
        'active': this.props.isActive
      });

    return (
      <div
        className={classes}
        onClick={this.props.setActive} >
        <span className="frame__index">{this.props.index}</span>
        <canvas
          height={this.props.height}
          width={this.props.width}
          ref={c => this._frameCanvas = c}></canvas>
      </div>
    );
  }
}

export default Frame;
