import swapper from './helper/swap.js'
import clone from './helper/clone.js'

export default class {
  constructor(data, ...uniques) {
    this.data = data
    this.uniques = uniques
  }

  get value() {
    return this.swap()
  }

  swap(target = {}) {
    let data = clone(this.data)

    for (let i = 0; i < this.uniques.length; i += 1) {
      const key = this.uniques[i]
      data = swapper(data, key, target[key])
    }

    return data
  }
}
