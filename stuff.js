'use strict'

exports.sayHello = function (name) {
  if (name) {
    return `Hello ${name}!`
  }
  return 'Hello World!'
}
