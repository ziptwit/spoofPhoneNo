const config = require('./config.json')
const clockwork = require('clockwork')({key:config.key})
const prompt = require('prompt')

if (process.argv[2] === '-b') balance()
else if (!process.argv[2]) text()
else console.log('Error, wrong option.')

function text() {
  prompt.start()
  prompt.get(['Sender phone number', 'Reciever phone number', 'Message to send'], function (err, result) {
    clockwork.sendSms({ To: result['Reciever phone number'], From: result['Sender phone number'], Content: result['Message to send']},
      function(error, resp) {
        if (error) {
            console.log('Something went wrong', error)
        }
        else if (!resp.responses[0].id) {
          console.log('Error, message not sent. Probably due to an invalid phone number supplied')
        }
        else {
            console.log('Message sent',resp.responses[0].id)
        }
    })
  })
}

function balance() {
  clockwork.getBalance(function(err, result) {
    if (err) {
    	console.log('Error!', err)
	  } else {
		console.log(result)
	  }
  })
}
