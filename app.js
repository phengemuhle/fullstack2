const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.eventNames.PORT || 3003
const students = require('./routs/students')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/students', students)



router.get('/', (req,res) => {
    console.log(thing)
})

app.listen