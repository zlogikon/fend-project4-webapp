const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY

let projectData = {};
let nlpData = '';

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



// designates what port the app will listen to for incoming requests

const port = 8081

app.listen(port, function () {
    console.log(`Server is running on localhost:${port}`)
})

//post and get commands

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/all', sendUserData)

function sendUserData (req, res) {
  res.send(nlpData);
  //console.log(projectData);
};

app.post('/add', addUserData)

async function addUserData (req, res) {
  console.log(`Post received`)
  projectData = req.body;
  console.log(`Request is ${projectData}`)
  url = URLBase + apiKey + URLLang + projectData
  console.log(url)
  const nlp = await fetch(url)

  try {
    nlpData = await nlp.json()
    if (nlpData.status.code == 0) {
        console.log('API is working')
        console.log(nlpData)
        res.send(nlpData)
    } else {
        //res.send({ message: "API call didn't work" })
        console.log('API Failed')

    }
  } catch (error) {
    console.error(error)
  }

};
