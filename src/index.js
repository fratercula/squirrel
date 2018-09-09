const swapper = require('./helper/swap')
const clone = require('./helper/clone')
const uniques = require('./helper/uniques')

module.exports = class {
  constructor(data, separator = '|') {
    this.data = data
    this.separator = separator
    this.uniques = uniques(data, separator)
  }

  get value() {
    return this.swap()
  }

  swap(target = {}) {
    let data = clone(this.data)

    for (let i = 0; i < this.uniques.length; i += 1) {
      const key = this.uniques[i]
      data = swapper(data, key, target[key], this.separator)
    }

    return data
  }
}
