let express = require('express');
let router = express.Router();
import MailBroadcaster from '../broadcaster';
import conf from '../conf';
import Mail from '../broadcaster/Mail';

/* GET home page. */
router.get('/', function(req, res, next) {
    let response = "OhW It's Working..!";

    const broadcaster = new MailBroadcaster(conf);

    const testMail = new Mail("aascar@aascar.com", "arajajyothibabu@apxor.com", "Hai Test Mail", "This is Mail broadcaster");

    broadcaster.sendMail(testMail);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(response);
});

module.exports = router;
