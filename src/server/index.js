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


app.use(bodyParser.text())
app.use(cors())

//app.use(express.static('dist'))
app.use(express.static('../client/index.html'))


URLBase = 'https://api.meaningcloud.com/sentiment-2.1?key='
URLLang = '&lang=auto&url='
TestURL = 'https://www.foxnews.com/politics/giuliani-presses-trump-election-challenge-case-in-fiery-news-conference'



// designates what port the app will listen to for incoming requests

const port = 8081

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

//post and get commands

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/nlp', function (req, res) {
    console.log(`Request is working`)
    const resURL= URLBase + apiKey + URLLang + TestURL
    console.log(resURL)
})




/*async function callAPI(req, res) {
    console.log(`Request is ${req.body}`)
    const url = URL_ROOT + URL_KEY + URL_LANG + URL_USER_INPUT + req.body
    console.log(url)
    const response = await fetch(url)

    try {
        const nlpData = await response.json()
        if (nlpData.status.code == 0) {
            nlpData.message = "Good data received from API"
            res.send(nlpData)
        } else {
            res.send({ message: "API call didn't work" })
        }
    } catch (error) {
        console.error(error)
    }
}*/
