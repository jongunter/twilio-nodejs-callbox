var express            = require('express');
var twilio             = require('twilio');
var router             = express.Router();


router.get('/', function(req, res) {
  res.status(401).end();
});


router.get('/callbox', function(req, res) {
  var twiml = new twilio.TwimlResponse();

  twiml.say({voice:'woman'}, 'Thanks for calling apartment ' + process.env.APARTMENT_NUMBER + '. I\'ll connect you with a resident shortly.')
  twiml.dial(process.env.CALLBOX_NUMBER);
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});


module.exports = router;
