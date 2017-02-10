let express = require('express');
let router = express.Router();
import MailBroadcaster from '../broadcaster';
import conf from '../conf';
import Mail from '../broadcaster/Mail';

/* GET home page. */
router.get('/', function(req, res, next) {
    let response = "OhW It's Working..!";

    const broadcaster = new MailBroadcaster(conf);

    //const singleRecipient = new Mail("arajajyothibabu@apxor.com", "arajajyothibabu@gmail.com", "Hai Test Mail", "This is Mail broadcaster");
    const multiRecipient = new Mail("arajajyothibabu@apxor.com", [ "arajajyothibabu@apxor.com", "arajajyothibabu@gmail.com" ], "Hai Test Mail", "This is Mail broadcaster");

    broadcaster.sendMail(multiRecipient);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(response);
});

module.exports = router;
