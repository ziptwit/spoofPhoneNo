const config = require('./config.json')

const clockwork = require('clockwork')({key:config.key})
const prompt = require('prompt')

prompt.start()
prompt.get(['Sender phone number', 'Reciever phone number', 'Message to send'], function (err, result) {

  clockwork.sendSms({ To: result['Sender phone number'], From: result['Reciever phone number'], Content: result['Message to send']},
    function(error, resp) {
      if (error) {
          console.log('Something went wrong', error)
      } else {
          console.log('Message sent',resp.responses[0].id)
      }
  })
})
