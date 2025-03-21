const {
  Context2d,
  PNGStream,
  PDFStream,
  JPEGStream,
  DOMMatrix,
  DOMPoint,
  registerFont,
  parseFont,
  createImageData,
  loadImage,
  backends,
  version,
  cairoVersion,
  jpegVersion,
  gifVersion,
  freetypeVersion,
} = require('canvas');
const {
  CanvasRenderingContext2D,
  CanvasGradient,
  CanvasPattern,
  Image,
  ImageData,
} = require('canvas/js-binding');

const {
  WebGLRenderingContext,
} = require('gl/src/javascript/webgl-rendering-context');
const NodeCanvasElement = require('./canvas');

// const _drawImage = CanvasRenderingContext2D.prototype.drawImage;
// CanvasRenderingContext2D.prototype.drawImage = function (img, ...args) {
//   // call __ctx__ to sync image data
//   if (img instanceof NodeCanvasElement && img.__gl__) img.__ctx__; // eslint-disable-line no-unused-expressions
//   return _drawImage.call(this, img, ...args);
// };

// const mockDOM = require('./mock');

function createCanvas(width, height, type) {
  return new NodeCanvasElement(width, height, type);
}

module.exports = {
  Canvas: NodeCanvasElement,
  Context2d,
  CanvasRenderingContext2D,
  WebGLRenderingContext,
  CanvasGradient,
  CanvasPattern,
  Image,
  ImageData,
  PNGStream,
  PDFStream,
  JPEGStream,
  DOMMatrix,
  DOMPoint,
  registerFont,
  parseFont,
  createCanvas,
  createImageData,
  loadImage,
  backends,
  version,
  cairoVersion,
  jpegVersion,
  gifVersion,
  freetypeVersion,
};
