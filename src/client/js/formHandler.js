let newDate = ''
let formText = ''

async function handleSubmit(event) {
    event.preventDefault()

    // reset html on form 
    document.getElementById('server_message').innerHTML = ""
    document.getElementById('URL').innerHTML = ""

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

    //submit data to server

    console.log('formText is', formText)
        

    getDate()

    .then(() => {
        console.log("::: Form Submitted :::")
        console.log(formText)
        //console.log(newDate)
        postData('http://localhost:8081/add', {url:formText});
      })
      .then(() => {
        updateUI()
      })



    

    /*fetch('http://localhost:8081/test')

    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('server_message').innerHTML = data.message
        document.getElementById('URL').innerHTML = formText

    })*/
    //Post data to the server
}

const postData = async (url, data) => {
    
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        }
    )
    try {
        const result = await response.json()
        console.log(result)
        return result
      }
      catch (error) {
        console.log('error', error)
      }
    

    
};
    
const updateUI = async () => {
    const request = await fetch ('http://localhost:8081/all')
    try{
        const allData = await request.json()
        //console.log(allData);
    
    document.getElementById("server_message").innerHTML = "Date: " + allData.newDate;
    document.getElementById("URL").innerHTML = "Journal entry: " + allData.TestURL;
    
    }catch(error){
        console.log("updateUI error", error)
    }
}

// Create date

const getDate = async () =>{
    let d = new Date();
    let min = '';
    let hour = '';
    let ampm = '';
    if (d.getHours() > 12){
      hour = d.getHours() - 12;
      ampm = ' PM';
    }else{
      hour = d.getHours();
      ampm = ' AM';
    };
    if (d.getMinutes() < 10){
      min = '0';
    }else{
      min = '';
    };
    newDate = d.getMonth()+'/'+ d.getDate()+'/'+ d.getFullYear() + ' | ' + hour + ':' + min + d.getMinutes() + ampm;
    //console.log(newDate)
  };
  
    


export { handleSubmit }
export { postData }
export { updateUI }
export { getDate }