const defaultSvgHeight = 480
const defaultSvgWidth = 680
const baseHeight = 4
const baseWidth = 6
const cx = defaultSvgWidth / 2
const cy = defaultSvgHeight / 2

class Scale {
  constructor (params) {
    this.params = params
  }

  get rectScale () {
    const scaleH = baseHeight * 100 / this.params.height
    const scaleW = baseWidth * 100 / this.params.width
    return getLess([scaleH, scaleW])
  }

  get trapezoidScale () {
    const scaleH = (baseHeight * 100) / (this.params.height + this.params.shift1 + this.params.shift2)
    const scaleW = baseWidth * 100 / this.params.width
    return getLess([scaleH, scaleW])
  }

  get triangleScale () {
    const scaleW = baseWidth * 100 / this.params.width
    const height = triangleHeight(this.params)
    const scaleH = baseHeight * 100 / height
    return getLess([scaleH, scaleW])
  }

  get rectangularTrapezoidVerticalScale () {
    const scaleW = baseWidth * 100 / this.params.width
    const height = this.params.height + this.params.shift
    const scaleH = baseHeight * 100 / height
    return getLess([scaleH, scaleW])
  }

  get rectangularTrapezoidHorizontalScale () {
    const width = this.params.width + this.params.shift
    const scaleW = baseWidth * 100 / width
    const scaleH = baseHeight * 100 / this.params.height
    return getLess([scaleH, scaleW])
  }
}

const getLess = values => Math.min(...values)

const triangleHeight = params => Math.sqrt((params.edge ** 2 - params.width ** 2 / 4))

const getBaseRect = (params, scale) => {
  const width = (params.width * scale) / 2
  const height = (params.height * scale) / 2
  const drawWidthLeft = cx - width
  const drawWidthRight = cx + width
  const drawHeightUp = cy - height
  const drawHeightDown = cy + height
  return { drawHeightUp, drawHeightDown, drawWidthLeft, drawWidthRight }
}

const getRect = params => {
  const scale = new Scale(params).rectScale
  const { drawWidthLeft, drawWidthRight, drawHeightUp, drawHeightDown } = getBaseRect(params, scale)
  return `M${drawWidthLeft},${drawHeightUp}
          L${drawWidthLeft},${drawHeightDown}
          L${drawWidthRight},${drawHeightDown}
          L${drawWidthRight},${drawHeightUp}Z`
}

const getTrapezoid = params => {
  const scale = new Scale(params).trapezoidScale
  const shift1 = params.shift1 * scale
  const shift2 = params.shift2 * scale
  const difference = shift1 / 2 - shift2 / 2
  const { drawWidthLeft, drawWidthRight, drawHeightUp, drawHeightDown } = getBaseRect(params, scale)
  const drawRightSideHeightUp = drawHeightUp + difference
  const drawRightSideHeightDown = drawHeightDown + difference
  const drawLeftSideHeightUp = drawHeightUp - shift1 + difference
  const drawLeftSideHeightDown = drawHeightDown + shift2 + difference
  return `M${drawWidthLeft},${drawRightSideHeightDown}
          L${drawWidthLeft},${drawLeftSideHeightDown}
          L${drawWidthRight},${drawRightSideHeightDown}
          L${drawWidthRight},${drawRightSideHeightUp}
          L${drawWidthLeft},${drawLeftSideHeightUp}
          L${drawWidthLeft},${drawRightSideHeightUp}Z`
}

const getCorner = params => {
  const scale = new Scale(params).rectScale
  const shift1 = params.shift1 * scale
  const shift2 = params.shift2 * scale
  const { drawWidthLeft, drawWidthRight, drawHeightUp, drawHeightDown } = getBaseRect(params, scale)
  return `M${drawWidthLeft},${drawHeightUp}
          L${drawWidthLeft},${drawHeightDown}
          L${drawWidthLeft + shift1},${drawHeightDown}
          L${drawWidthLeft + shift1},${drawHeightUp + shift2}
          L${drawWidthRight},${drawHeightUp + shift2}
          L${drawWidthRight},${drawHeightUp}Z`
}

const getRightTriangle = params => {
  const scale = new Scale(params).rectScale
  const { drawWidthLeft, drawWidthRight, drawHeightUp, drawHeightDown } = getBaseRect(params, scale)
  return `M${drawWidthLeft},${drawHeightUp}
          L${drawWidthLeft},${drawHeightDown}
          L${drawWidthRight},${drawHeightDown}Z`
}

const getIsoscelesTriangle = params => {
  const scale = new Scale(params).triangleScale
  const newParams = {
    ...params,
    height: triangleHeight(params)
  }
  const { drawWidthLeft, drawWidthRight, drawHeightUp, drawHeightDown } = getBaseRect(newParams, scale)
  return `M${cx},${drawHeightUp}
          L${drawWidthLeft},${drawHeightDown}
          L${drawWidthRight},${drawHeightDown}Z
          V${drawHeightDown}`
}

const getRhombus = params => {
  const scale = new Scale(params).rectScale
  const { drawWidthLeft, drawWidthRight, drawHeightUp, drawHeightDown } = getBaseRect(params, scale)
  return `M${cx},${drawHeightUp}
          L${drawWidthLeft},${cy}
          L${cx},${drawHeightDown}
          L${drawWidthRight},${cy}Z
          M${cx},${drawHeightUp}
          V${drawHeightDown}
          M${drawWidthLeft},${cy}
          H${drawWidthRight}`
}

const getRectangularTrapezoidVertical = params => {
  const scale = new Scale(params).rectangularTrapezoidVerticalScale
  const { drawWidthLeft, drawWidthRight, drawHeightUp, drawHeightDown } = getBaseRect(params, scale)
  const shift = params.shift * scale / 2
  return `M${drawWidthLeft},${drawHeightUp - shift}
          L${drawWidthLeft},${drawHeightDown - shift}
          V${drawHeightDown + shift}
          L${drawWidthRight},${drawHeightDown + shift}
          V${drawHeightDown - shift}Z`
}

const getRectangularTrapezoidHorizontal = params => {
  const scale = new Scale(params).rectangularTrapezoidHorizontalScale
  const newParams = {
    ...params,
    width: params.width + params.shift
  }
  const { drawWidthLeft, drawWidthRight, drawHeightUp, drawHeightDown } = getBaseRect(newParams, scale)
  const shift = params.shift * scale / 2
  return `M${drawWidthLeft},${drawHeightUp}
          H${drawWidthLeft + shift}
          L${drawWidthRight}, ${drawHeightDown}
          H${drawWidthLeft}Z`
}

const getDoubleSideRectangularTrapezoidVertical = params => {
  const scale = new Scale(params).rectangularTrapezoidVerticalScale
  const { drawWidthLeft, drawWidthRight, drawHeightUp, drawHeightDown } = getBaseRect(params, scale)
  const shift = params.shift * scale / 2
  return `M${cx},${drawHeightUp - shift}
          L${drawWidthLeft},${drawHeightDown - shift}
          V${drawHeightDown + shift}
          L${drawWidthRight},${drawHeightDown + shift}
          V${drawHeightDown - shift}Z
          V${drawHeightDown + shift}`
}

export const getPath = ({ name, params }) => getFigure[name](params)

const figures = {
  rectangle: 'rectangle',
  trapezoid: 'trapezoid',
  corner: 'corner',
  rightTriangle: 'rightTriangle',
  isoscelesTriangle: 'isoscelesTriangle',
  rhombus: 'rhombus',
  rectangularTrapezoidVertical: 'rectangularTrapezoidVertical',
  rectangularTrapezoidHorizontal: 'rectangularTrapezoidHorizontal',
  doubleSideRectangularTrapezoidVertical: 'doubleSideRectangularTrapezoidVertical'
}

const getFigure = {
  [figures.rectangle]: (params) => getRect(params),
  [figures.trapezoid]: (params) => getTrapezoid(params),
  [figures.corner]: (params) => getCorner(params),
  [figures.rightTriangle]: (params) => getRightTriangle(params),
  [figures.isoscelesTriangle]: (params) => getIsoscelesTriangle(params),
  [figures.rhombus]: (params) => getRhombus(params),
  [figures.rectangularTrapezoidVertical]: (params) => getRectangularTrapezoidVertical(params),
  [figures.rectangularTrapezoidHorizontal]: (params) => getRectangularTrapezoidHorizontal(params),
  [figures.doubleSideRectangularTrapezoidVertical]: (params) => getDoubleSideRectangularTrapezoidVertical(params)
}
