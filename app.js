const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.eventNames.PORT || 3003

app.use(cors())
app.use(bodyParser.json())
