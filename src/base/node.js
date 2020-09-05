// import {Vector2} from '../lib/three.module.js';
import { Vector2 } from 'three'

export class Node {
  constructor(baseRange, angle, center) {
    this.baseRange = baseRange
    this.angle = angle
    this.center = center

    this.lastStrength = 0
    this.theStrength = 0
    this.targetRange = 0
    this._range = 0
  }

  positionA () {
    const range = this._range + this.baseRange
    const x = Math.cos(this.angle * Math.PI / 180) * range
    const y = Math.sin(this.angle * Math.PI / 180) * range
    return new Vector2(this.center.x + x, this.center.y + y)
  }

  positionB () {
    const range = this._range * -1 + this.baseRange
    const x = Math.cos(this.angle * Math.PI / 180) * range
    const y = Math.sin(this.angle * Math.PI / 180) * range
    return new Vector2(this.center.x + x, this.center.y + y)
  }

  strength (newStrength) {
    this.lastStrength = this.theStrength
    this.theStrength = newStrength
    this.targetRange = Math.max(this.theStrength - this.lastStrength, 0)
    if (this.targetRange > this._range) this._range = this.targetRange
  }

  transition (delay) {
    this._range = Math.max(this._range - delay * this._range * 5, 0)
  }
}
