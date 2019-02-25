var router = require("express").Router();
var timestamp = require("../timestamp/timestamp.js");

// Handle routes
router.route('/api/timestamp/').get(timestamp.parser);
router.route('/api/timestamp/:query').get(timestamp.parser);
// Main page
router.get('/', function (request, response) {
    response.sendFile('index.html', { root: './views/' });
});
module.exports = router;