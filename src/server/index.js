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
app.use(express.static('dist'))

let nlpJSON = '';
const URLBase = 'https://api.meaningcloud.com/sentiment-2.1?key='
const URLLang = '&lang=auto&url='

const port = 8081  // designates what port the app will listen to for incoming requests

app.listen(port, function () {
    console.log(`Server is running on localhost:${port}`)
})

//post and get commands

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/all', sendUserData)

function sendUserData (req, res) {
  res.send(nlpJSON);
};

app.post('/add', sendNLP)

async function sendNLP (req, res) {
  console.log(`Post received`)
  processData = req.body;
  console.log(`Request is ${processData}`)
  url = URLBase + apiKey + URLLang + processData
  console.log(url)
  const nlp = await fetch(url)

  try {
    nlpJSON = await nlp.json()
    if (nlpJSON.status.code == 0) {
        console.log('API is working')
        //console.log(nlpJSON)
        res.send(nlpJSON)
    } else {
        //res.send({ message: "API call didn't work" })
        console.log('API Failed')

    }
  } catch (error) {
    console.error(error)
  }

};
