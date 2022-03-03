import { tinygradient } from '@ctrl/tinycolor';

const MINTEMP = 10.0;
const MAXTEMP = 255.0;
const gradient = tinygradient('red', 'green', 'blue');

function colormap (temperature) {
  return gradient.rgbAt((temperature - MINTEMP) / (MAXTEMP - MINTEMP));
}

export default colormap;
