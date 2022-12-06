const express = require("express")
const app = express()
const {port} = require('./config')
const apiRouter = require('./routes/api')
const bodyParser = require('body-parser')
const cors = require('cors');

require('./db/mongoose');

//parsers
// Content-type: application/json
app.use(bodyParser.json())

//cors fix
app.use(cors());

//routes
app.use('/api/', apiRouter)

//server
app.listen(port, function(){
  console.log('Server słucha http://localhost:' + port);
});