var tr = require('tor-request')
tr.TorControlPort.password = 'password'

tr.request('http://ifconfig.me', function ( err, response, body ) {
  console.info(body);
})

tr.newTorSession( (err) =>
    {
      console.info(err);
        tr.request('http://ifconfig.me', function ( err, response, body ) {
          console.info(body);
        });
    });
