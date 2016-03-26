'use strict'

const http = require('http')
const sayHello = require('./stuff').sayHello
const port = 8881

const server = http.createServer((request, response) => {
  response.end(sayHello())
})

//Lets start our server
server.listen(port, () => {
  console.log('Server listening on: http://0.0.0.0:%s', port)
})
