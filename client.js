const net = require('net');
const fs = require('fs');

const IP = '127.0.0.1';
const PORT = 3000;

net.createConnection({
  host: IP,
  port: PORT
})
  .on('data', (data) => {
    console.log(data)
    fs.writeFile('./client_files/fromServer.txt', data, err => {
      if (err) {
        console.log('Error from writeFile(): ', err)
      }
    })
  })
  // .on('connect', () => {
  //   this.write('hello server!')
  // })
  .setEncoding('utf8')

