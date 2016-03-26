'use strict'

const http = require('http')
const url = require('url')
const sayHello = require('./stuff').sayHello
const port = process.env.PORT || 8881

const server = http.createServer((request, response) => {
  const queryObject = url.parse(request.url,true).query
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end(sayHello(queryObject.name))
})

//Lets start our server
server.listen(port, () => {
  console.log('Server listening on: http://0.0.0.0:%s', port)
})
