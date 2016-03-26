'use strict'

const expect = require('chai').expect
const sayHello = require('../stuff').sayHello

describe('Stuff', () => {
  describe('Stuff#sayHello()', () => {
    it('should return `Hello World!`', () => {
      expect(sayHello()).to.equal('Hello World!')
    })
    it('should return `Hello Jacopo!`', () => {
      expect(sayHello('Jacopo')).to.equal('Hello Jacopo!')
    })
  })
})
