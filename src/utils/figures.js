export const figures = [
  {
    name: 'rectangle',
    src: require('@/assets/img/rect.svg'),
    params: {
      height: 4,
      width: 4
    }
  },
  {
    name: 'trapezoid',
    src: require('@/assets/img/trapezoid.svg'),
    params: {
      height: 4,
      width: 6,
      shift1: 0.5,
      shift2: 0.5
    }
  },
  {
    name: 'corner',
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
    name: 'rightTriangle',
    src: require('@/assets/img/rightTriangle.svg'),
    params: {
      height: 3,
      width: 3
    }
  },
  {
    name: 'isoscelesTriangle',
    src: require('@/assets/img/isoscelesTriangle.svg'),
    validation: true,
    params: {
      width: 6,
      edge: 7
    }
  },
  {
    name: 'rhombus',
    src: require('@/assets/img/rhombus.svg'),
    params: {
      height: 4,
      width: 4
    }
  },
  {
    name: 'rectangularTrapezoidVertical',
    src: require('@/assets/img/rectangularTrapezoidVertical.svg'),
    params: {
      height: 4,
      width: 9,
      shift: 3
    }
  },
  {
    name: 'rectangularTrapezoidHorizontal',
    src: require('@/assets/img/rectangularTrapezoidHorizontal.svg'),
    params: {
      height: 4,
      width: 9,
      shift: 3
    }
  },
  {
    name: 'doubleSideRectangularTrapezoidVertical',
    src: require('@/assets/img/doubleSideRectangularTrapezoidVertical.svg'),
    params: {
      height: 4,
      width: 9,
      shift: 2
    }
  }
]
