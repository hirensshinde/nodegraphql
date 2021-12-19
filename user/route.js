const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.url, req.method, req.header);
    res.write('Hello World');
    console.log(res.statusCode);
    res.end();
})

module.exports = router;