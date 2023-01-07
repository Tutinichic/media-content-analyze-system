const express = require('express');
const router = require('./routings');

const app = express();

app.use('/api', router);

app.listen(2222);
