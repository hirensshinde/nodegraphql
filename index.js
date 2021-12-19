const express = require('express');
const app = express();
const router = require('./user/route');
const logger = require('morgan');
const port = process.env.PORT || 8000;
const userData = require('./mockdata.json');

app.use(logger('dev'));

app.use('/user', router);



// app.use('')


app.listen(port, (err) => {
    if(err) console.log("Error",err);
    else {console.log(`Server is running on port ${port}`)};
})