import swapper from './helper/swap.js'
import clone from './helper/clone.js'

export default class {
  constructor(data, ...uniques) {
    this.data = data
    this.uniques = uniques
  }

  get value() {
    let data = clone(this.data)

    for (let i = 0; i < this.uniques.length; i += 1) {
      data = swapper(data, this.uniques[i])
    }

    return data
  }

  swap(target) {
    let data = clone(this.data)

    Object.keys(target).forEach((key) => {
      data = swapper(data, key, target[key])
    })

    return data
  }
}
