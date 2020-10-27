export const validation = (params, payload, name) => {
  const obj = {
    ...params,
    [payload.param]: payload.value
  }
  return validators[name](obj)
}

const figures = {
  corner: 'corner',
  isoscelesTriangle: 'isoscelesTriangle'
}

const validators = {
  [figures.corner]: (obj) => cornerValidator(obj),
  [figures.isoscelesTriangle]: (obj) => isoscelesTriangleValidator(obj)
}

const isoscelesTriangleValidator = obj => {
  return obj.edge >= obj.width / 2
}

const cornerValidator = obj => {
  return obj.shift1 <= obj.width && obj.shift2 <= obj.height
}
