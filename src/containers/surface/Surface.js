import {connect} from 'react-redux';

import {
  getTool,
  getToolSettings,
  getCurrentFrameUUID,
  getCurrentFrame,
  getPixelSize,
  getSurfaceWidth,
  getSurfaceHeight,
  getImageSize
} from 'selectors';
import {setTempColor} from 'actions/palette';
import {updateFrameImageData} from 'actions/frames';

import Surface from 'components/surface/Surface';

const mapStateToProps = state => ({
  tool: getTool(state),
  toolSettings: getToolSettings(state),
  imageSize: getImageSize(state),
  currentFrameUUID: getCurrentFrameUUID(state),
  currentFrame: getCurrentFrame(state),
  pixelSize: getPixelSize(state),
  surfaceWidth: getSurfaceWidth(state),
  surfaceHeight: getSurfaceHeight(state)
});

const mapDispatchToProps = dispatch => ({
  setTempColor (color) {
    return dispatch(setTempColor(color));
  },
  updateFrameImageData (frameUUID, imageData, naturalImageData) {
    return dispatch(updateFrameImageData(frameUUID, imageData, naturalImageData));
  }
});

const SurfaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Surface);

export default SurfaceContainer;
