const express = require('express');
const cors = require('cors');
const router = require('./routes');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.use('/', router);

app.listen(PORT, () => console.log(`Server listening... Port: ${PORT}`));
