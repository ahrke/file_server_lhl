const net = require('net');
const fs = require('fs');

const PORT = 3000;


net.createServer((c) => {
    console.log(`client ${c} has just connected`);
    c.setEncoding('utf8');
    c.write("hello!");
    fs.readFile('./server_files/file1.txt', (err, data) => {
      if (err) {
        console.log("Error with read(): ", err);
      }
      c.write(data);
    });
    c.on('data', (d) => console.log(d));
  })
  .on('error', (err) => {
    console.log(`ERROR: ${err}`);
  })
  .listen(PORT, () => {
    console.log(`server bound on => ${PORT}`);
  })

