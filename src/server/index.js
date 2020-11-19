const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY


const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const fetch = require('node-fetch')
const bodyParser = require('body-parser')

const app = express()

const port = 8080

app.use(cors())
app.use(express.static('dist'))
app.use(bodyParser.text())

URLBase = 'https://api.meaningcloud.com/sentiment-2.1?key='
URLLang = '&lang=auto&url='
TestURL = 'https://www.foxnews.com/politics/giuliani-presses-trump-election-challenge-case-in-fiery-news-conference'

const resURL= URLBase + apiKey + URLLang +  TestURL


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
