import React, { Component } from 'react';
import ModalWindow from '../../modalwindow/Modalwindow';
import ToggleCheckbox from '../../togglecheckbox/Togglecheckbox';

import Downloader from '../../../fileloaders/Downloader';
import { combineImageDataToCanvas, combineColorPaletteToCanvas } from '../../../utils/canvasUtils';
import { getAllActiveColors } from '../../../utils/colorUtils';
import StateLoader from '../../../statemanager/StateLoader';

class DownloadProjectModal extends Component {
  constructor (props) {
    super(props);
  }

  combineGifData () {
    return this.props.framesOrder.map(
      el => this.props.gifFramesData[el]
    ).join('');
  }

  prepareProject () {
    const state = this.props.getProjectState();
    return StateLoader.prepareForDownload(state, 'project.pxlsh');
  }

  prepareGif () {
    const combinedData = this.combineGifData();
    return Downloader.prepareGIFBlobAsync(combinedData, 'myGif.gif');
  }

  prepareSpritesheet () {
    const spritesImageDataArray = this.props.framesOrder.map(
      el => this.props.framesCollection[el].naturalImageData
    );
    return Downloader.prepareCanvasBlobAsync(
      combineImageDataToCanvas(
        spritesImageDataArray,
        spritesImageDataArray[0].width,
        spritesImageDataArray[0].height
      ),
      'sprites.png'
    );
  }

  preparePalette () {
    const spritesImageDataArray = this.props.framesOrder.map(
      el => this.props.framesCollection[el].naturalImageData
    );
    return Downloader.prepareCanvasBlobAsync(
      combineColorPaletteToCanvas(
        getAllActiveColors(spritesImageDataArray),
        100,
        500
      ),
      'palette.png'
    );
  }

  confirm () {
    const blobs = [];

    if (this.props.includeGif) blobs.push(this.prepareGif());
    if (this.props.includePalette) blobs.push(this.preparePalette());
    if (this.props.includeProject) blobs.push(this.prepareProject());
    if (this.props.includeSpritesheet) blobs.push(this.prepareSpritesheet());
    if (!blobs.length) return;

    Downloader.asZIP(blobs);
    this.props.closeModal();
  }

  cancel () {
    this.props.closeModal();
  }

  render () {
    return (
      <ModalWindow
        title="Download project"
        ok={{ text: 'Download', action: this.confirm.bind(this) }}
        cancel={{ text: 'Cancel', action: this.cancel.bind(this) }}
        isShown={this.props.isShown}>

        <ToggleCheckbox
          value={this.props.includeGif}
          onChange={this.props.toggleIncludeGif.bind(this)}>Include gif</ToggleCheckbox>
        <ToggleCheckbox
          value={this.props.includeSpritesheet}
          onChange={this.props.toggleIncludeSpritesheet.bind(this)}>Include spritesheet</ToggleCheckbox>
        <ToggleCheckbox
          value={this.props.includePalette}
          onChange={this.props.toggleIncludePalette.bind(this)}>Include custom palette</ToggleCheckbox>
        <ToggleCheckbox
          value={this.props.includeProject}
          onChange={this.props.toggleIncludeProject.bind(this)}>Include project</ToggleCheckbox>

      </ModalWindow>
    );
  }
}

export default DownloadProjectModal;
