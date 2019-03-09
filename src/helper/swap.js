const clone = require('./clone')

function swapper(target, unique, data, separator) {
  const o = clone(target)

  Object.keys(o).forEach((key) => {
    const current = o[key]
    const type = typeof current
    const field = key.split(separator + unique)[0]
    const exist = key.includes(separator + unique)
    const useOrigin = data === undefined

    if (Array.isArray(current)) {
      delete o[key]
      o[field] = current.map(item => swapper(item, unique, data, separator))
      return
    }

    if ((type === 'object' && !exist) || (type === 'object' && useOrigin)) {
      delete o[key]
      o[field] = swapper(current, unique, data, separator)
      return
    }

    if (exist) {
      delete o[key]
      o[field] = useOrigin ? current : data
    }
  })

  return o
}

module.exports = swapper
