
const pm2 = require('pm2')

export default function handler(req, res) {

  pm2.connect(function (err) {
    if (err) {
      console.error(err)
      //    process.exit(2)
    }

    pm2.list((err, list) => {

      console.log('listing')
      console.log(err, list)
      console.log('restart begin ')
      pm2.restart('test-pm2', (err, proc) => {
        // Disconnects from PM2
        console.log('restarting ')
        console.log(err, proc)
        pm2.disconnect()
      })
     
    })
  })
  res.status(200).json({ msg: ' OK ' })
}


