let express = require('express');
let router = express.Router();
import MailBroadcaster from '../broadcaster';

/* GET home page. */
router.get('/', function(req, res, next) {
    let response = "OhW It's Working..!";

    const broadcaster = new MailBroadcaster();

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(response);
});

module.exports = router;
