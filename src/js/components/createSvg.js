function createSvg(pathsArr) {
  const SVG_NS = 'http://www.w3.org/2000/svg',
    XLINK_NS = 'http://www.w3.org/1999/xlink',
    $svg = document.createElementNS(SVG_NS, 'svg');
  for (let path of pathsArr) {
    $use = document.createElementNS(SVG_NS, 'use');
    $use.setAttributeNS(XLINK_NS, 'xlink:href', path);
    $svg.append($use);
  }
  return $svg;
}
