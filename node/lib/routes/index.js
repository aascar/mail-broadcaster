let express = require('express');
let router = express.Router();
import MailBroadcaster from '../broadcaster';
import conf from '../conf';
import Mail from '../broadcaster/Mail';

/* GET home page. */
router.get('/', function(req, res, next) {
    let response = "OhW It's Working..!";

    const broadcaster = new MailBroadcaster(conf);

    const singleRecipient = new Mail("arajajyothibabu@apxor.com", "arajajyothibabu@gmail.com", "Hai Test Mail", "This is Mail broadcaster");
    const multiRecipient = new Mail("arajajyothibabu@apxor.com", [ "arajajyothibabu@apxor.com", "arajajyothibabu@gmail.com" ], "Hai Test Mail", "This is Mail broadcaster");

    broadcaster.sendMail(singleRecipient); //single mail

    broadcaster.sendMail(multiRecipient); //multiple mails

    let date = new Date(2017, 1, 13, 23, 40, 0);
    broadcaster.scheduleMail(multiRecipient, {schedule: date}); //scheduling multiple mails

    const rule = broadcaster.makeRule(30); //runs every 30 seconds
    broadcaster.scheduleMail(multiRecipient, {schedule: rule}); //scheduling multiple mails as cron job

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(response);
});

module.exports = router;
