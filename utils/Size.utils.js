/*
Calculate size in difference screen size based on standard size.
Use iPhone 6 specification as a default standard size.
Only support for Native Potrait mode.

Author: Denza
https://github.com/denza-dev

Inspired By:
https://www.npmjs.com/package/react-native-responsive-dimensions
https://github.com/nirsky/react-native-size-matters
 */

import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

// Zeplin use iPhone 6 as a workspace
const base = {
  width: 375,
  height: 667,
  pixelRatio: 2,
  fontScale: 2
};

const screenSize = {
  base: Math.sqrt((base.height * base.height) + (base.width * base.width)),
  current: Math.sqrt((height * height) + (width * width))
};

let isWebPlatform = Platform.OS === 'web';

// Calculate the new size into responsive size using screen size percentage.
export const scaleSize = (size) => {
  return isWebPlatform ? size : (size / screenSize.base) * screenSize.current;
};

// Calculate the new size into responsive size using screen width percentage.
export const scaleWidth = (w) => {
  return isWebPlatform ? w : (w / base.width) * width;
};

// Calculate the new size into responsive size using screen height percentage.
export const scaleHeight = (h) => {
  return isWebPlatform ? h : (h / base.height) * height;
};

// Calculate the new font size into responsive font size using screen width percentage.
export const scaleFont = (fontSize) => {
  return isWebPlatform ? fontSize : (fontSize / base.width) * width;
};

export default {
  scaleSize,
  scaleWidth,
  scaleHeight,
  scaleFont
};
