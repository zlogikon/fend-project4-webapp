const fetch = require('node-fetch')

let formText = ''

async function handleSubmit(event) {
    event.preventDefault()

    // reset html on form 
    document.getElementById('conf').innerHTML = ""
    document.getElementById('subj').innerHTML = ""

    // retrieve text from html form
    formText = document.getElementById('name').value
    const URLResult = document.getElementById('URLResult')
      
    // check URL
    if (Client.checkURL(formText) == false) {
        console.log('Not a URL')
        URLResult.innerHTML = 'Input is NOT a valid URL'
        return
    } else {
        console.log('URL is correct')
        URLResult.innerHTML = "Input is a valid URL"
    }

    console.log("::: Form Submitted to server :::")

    postData('http://localhost:8081/add', formText)
      .then(() => {
        updateUI()
        });

}

const postData = async ( url, data)=>{
  console.log('Data to server: ',data)
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'text/plain',
      },
      body: data, // body data type must match "Content-Type" header        
    });

    try {
      const newData = await response.json();
      console.log('Data okay!',newData);
      return newData
    }catch(error) {
    console.log("error", error);
    // appropriately handle the error
    }
}


    
const updateUI = async () => {
  console.log('Ready to update UI')
  const request = await fetch ('http://localhost:8081/all')
  try{
      const allData = await request.json()
  
  document.getElementById("conf").innerHTML = allData.confidence;
  document.getElementById("subj").innerHTML = allData.subjectivity;
  
  }catch(error){
      console.log("updateUI error", error)
  }
}
export { handleSubmit }
export { postData }
export { updateUI }
