import clone from './clone.js'

function swapper(target, unique, data) {
  const o = clone(target)

  Object.keys(o).forEach((key) => {
    const current = o[key]
    const type = typeof current
    const field = key.split(`|${unique}`)[0]
    const exist = key.indexOf(`|${unique}`) > -1
    const useOrigin = data === undefined

    if (Array.isArray(current)) {
      o[field] = current.map(item => swapper(item, unique, data))
      return
    }

    if ((type === 'object' && !exist) || (type === 'object' && useOrigin)) {
      o[field] = swapper(current, unique, data)
      delete o[key]
      return
    }

    if (exist) {
      o[field] = useOrigin ? current : data
      delete o[key]
    }
  })

  return o
}

export default swapper
