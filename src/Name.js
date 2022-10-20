import randomGenerator from 'random-seed'

import nouns from "./data/nouns"
import variants from "./data/variants"
import capitalise from "./utils/capitalise"

export default class Name {
  constructor (props = {}) {
    const {
      variant = variants.DWARVEN,
      seed = (new Date()).getTime()
    } = props

    const rand = randomGenerator(seed)

    this._variant = variant
    this._nouns = Array(3).fill().map(() => nouns[rand(nouns.length)])
  }

  get first () {
    return capitalise(this._nouns[0][this._variant])
  }

  get last () {
    return capitalise(
      Array(2).fill().map((_, index) => {
        return this._nouns[index + 1][this._variant]
      }).join("")
    )
  }

  get conversion () {
    return [
      this.first,
      capitalise(
        Array(2).fill().map((_, index) => {
          return this._nouns[index + 1][variants.ENGLISH]
        }).join('')
      )
    ].join(" ")
  }

  toString () {
    return `${this.first} ${this.last}`
  }
}
