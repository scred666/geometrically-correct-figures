// import {
//   getRect,
//   getTrapezoid,
//   getCorner,
//   getIsoscelesTriangle,
//   getDoubleSideRectangularTrapezoidVertical,
//   getRectangularTrapezoidHorizontal,
//   getRectangularTrapezoidVertical,
//   getRhombus,
//   getRightTriangle
// } from './drawing'

export const shapes = {
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

export const figures = [
  {
    name: shapes.rectangle,
    src: require('@/assets/img/rect.svg'),
    params: {
      height: 4,
      width: 4
    }
  },
  {
    name: shapes.trapezoid,
    src: require('@/assets/img/trapezoid.svg'),
    params: {
      height: 4,
      width: 6,
      shift1: 0.5,
      shift2: 0.5
    }
  },
  {
    name: shapes.corner,
    src: require('@/assets/img/corner.svg'),
    validation: true,
    params: {
      height: 4,
      width: 4,
      shift1: 2,
      shift2: 2
    }
  },
  {
    name: shapes.rightTriangle,
    src: require('@/assets/img/rightTriangle.svg'),
    params: {
      height: 3,
      width: 3
    }
  },
  {
    name: shapes.isoscelesTriangle,
    src: require('@/assets/img/isoscelesTriangle.svg'),
    validation: true,
    params: {
      width: 6,
      edge: 7
    }
  },
  {
    name: shapes.rhombus,
    src: require('@/assets/img/rhombus.svg'),
    params: {
      height: 4,
      width: 4
    }
  },
  {
    name: shapes.rectangularTrapezoidVertical,
    src: require('@/assets/img/rectangularTrapezoidVertical.svg'),
    params: {
      height: 4,
      width: 9,
      shift: 3
    }
  },
  {
    name: shapes.rectangularTrapezoidHorizontal,
    src: require('@/assets/img/rectangularTrapezoidHorizontal.svg'),
    params: {
      height: 4,
      width: 9,
      shift: 3
    }
  },
  {
    name: shapes.doubleSideRectangularTrapezoidVertical,
    src: require('@/assets/img/doubleSideRectangularTrapezoidVertical.svg'),
    params: {
      height: 4,
      width: 9,
      shift: 2
    }
  }
]
/*
export const qwe = {
  [shapes.rectangle]: {
    method: (params) => getRect(params),
    src: require('@/assets/img/rect.svg'),
    params: {
      height: 4,
      width: 4
    }
  },
  [shapes.trapezoid]: {
    method: (params) => getTrapezoid(params),
    src: require('@/assets/img/trapezoid.svg'),
    params: {
      height: 4,
      width: 6,
      shift1: 0.5,
      shift2: 0.5
    }
  },
  [shapes.corner]: {
    method: (params) => getCorner(params),
    src: require('@/assets/img/corner.svg'),
    validation: true,
    params: {
      height: 4,
      width: 4,
      shift1: 2,
      shift2: 2
    }
  },
  [shapes.rightTriangle]: {
    method: (params) => getRightTriangle(params),
    name: shapes.rightTriangle,
    src: require('@/assets/img/rightTriangle.svg'),
    params: {
      height: 3,
      width: 3
    }
  },
  [shapes.isoscelesTriangle]: {
    method: (params) => getIsoscelesTriangle(params),
    src: require('@/assets/img/isoscelesTriangle.svg'),
    validation: true,
    params: {
      width: 6,
      edge: 7
    }
  },
  [shapes.rhombus]: {
    method: (params) => getRhombus(params),
    src: require('@/assets/img/rhombus.svg'),
    params: {
      height: 4,
      width: 4
    }
  },
  [shapes.rectangularTrapezoidVertical]: {
    method: (params) => getRectangularTrapezoidVertical(params),
    src: require('@/assets/img/rectangularTrapezoidVertical.svg'),
    params: {
      height: 4,
      width: 9,
      shift: 3
    }
  },
  [shapes.rectangularTrapezoidHorizontal]: {
    method: (params) => getRectangularTrapezoidHorizontal(params),
    src: require('@/assets/img/rectangularTrapezoidHorizontal.svg'),
    params: {
      height: 4,
      width: 9,
      shift: 3
    }
  },
  [shapes.doubleSideRectangularTrapezoidVertical]: {
    method: (params) => getDoubleSideRectangularTrapezoidVertical(params),
    src: require('@/assets/img/doubleSideRectangularTrapezoidVertical.svg'),
    params: {
      height: 4,
      width: 9,
      shift: 2
    }
  }
}
*/
