function handleSubmit(event) {
    event.preventDefault()

    document.getElementById('results').innerHTML = ""

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const URLResult = document.getElementById('URLResult')
  
    

    if (Client.checkURL(formText) == false) {
        console.log('Not a URL')
        URLResult.innerHTML = 'Input is NOT a valid URL.'
        return
    } else {
        console.log('URL is correct')
        URLResult.innerHTML = "Input is a valid URL"
    }

    console.log("::: Form Submitted :::")

    fetch('http://localhost:8081/test')

    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
    
    
}

export { handleSubmit }
