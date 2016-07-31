import { Tile } from './tile'

export class Board {
  constructor(initialValues) {
    this.tiles = []
    const range = [0, 1, 2, 3]
    range.forEach(x => {
      range.forEach(y => {
        this.tiles.push(new Tile(x, y, initialValues[4 * x + y]))
      })
    })
  }

  display() {
    console.log(this.tiles)
  }

  max() {
    return this.tiles.map(k => k.value).max()
  }

  next() {
    let rand = Math.random()
    if (rand < .25) return 1
    if (rand < .5) return 2
    if (rand < .75) return 3
    return this.nextBig()
  }

  nextBig() {
    let upper = Math.log2((this.max() / 3))
    let range = [...Array(upper).keys()]
    range.shift()
    return Math.pow(2, range.sample()) * 3
  }

  slide(direction) {
    
  }
}

Array.prototype.max = function() {
  return Math.max.apply(null, this);
}

Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)]
}