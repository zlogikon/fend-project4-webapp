const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY

let projectData = {};

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
  res.send(projectData);
  //console.log(projectData);
};

app.post('/add', addUserData)

async function addUserData (req, res) {
  console.log(`Post received`)
  projectData = req.body.url;
  console.log(`Request is ${projectData}`)

  //const testURL = await projectData.json()
  url = URLBase + apiKey + URLLang + projectData
  const owAPI = await fetch(url)
  console.log(url)


  /*try {
    const nlpData = await owAPI.json()
    if (nlpData.status.code == 0) {
        //nlpData.message = "Good data received from API"
        res.send(nlpData)
        console.log('API is working')
        console.log(nlpData)
    } else {
        //res.send({ message: "API call didn't work" })
        console.log('API Failed')

    }
  } catch (error) {
    console.error(error)
  }*/

};
