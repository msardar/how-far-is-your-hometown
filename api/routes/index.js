var express = require('express')
var router = express.Router()
var path = require('path')
router
    .route('/').get(function (req, res) {
        console.log("Getting homepage");
        res.sendFile(path.join(__dirname, 'public', 'index.html'))
    })



module.exports = router;