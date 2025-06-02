const express = require('express');
const { PORT } = require('./config.js');
var cors = require('cors')
let app = express();

app.use(cors({
  origin: '*',
}))

app.use(express.static('wwwroot'));
app.use(require('./routes/auth.js'));
app.use(require('./routes/models.js'));
app.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });
