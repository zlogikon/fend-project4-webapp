async function handleSubmit(event) {
    event.preventDefault()

    // reset html on form 
    document.getElementById('conf').innerHTML = ""
    document.getElementById('subj').innerHTML = ""
    document.getElementById('score').innerHTML = ""

    // retrieve text from html form
    const formText = document.getElementById('name').value
    const URLResult = document.getElementById('URLResult')
      
    // check URL
    if (Client.checkURL(formText) == false) {
        console.log('Not a URL')
        URLResult.innerHTML = 'URL is not valid'
        subj.innerHTML = "Please ensure that the URL is for a current webpage. It should begin with either http:// or https:// and contain no spaces."
        return
    } else {
        console.log('URL is valid')
        URLResult.innerHTML = "URL is valid"
        subj.innerHTML = "Processing...."
    }

    console.log("::: Form Submitted to server :::")

    postData('http://localhost:8081/add', formText)
      .then(() => {
        updateUI()
        });

}

const postData = async (url, data)=>{
  console.log('Data to server: ',data)
    const post = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'text/plain',
      },
      body: data, // body data type must match "Content-Type" header        
    });

    try {
      const newData = await post.json();
      //console.log('Data okay!',newData);
      return newData
    }catch(error) {
      console.log("JSON confirmation error", error);
      URLResult.innerHTML = "Please confirm the URL is a working webpage"
    }
}
    
const updateUI = async () => {
  console.log('Ready to update UI')
  const request = await fetch ('http://localhost:8081/all')
  
  try{
      const allData = await request.json()
      
      const conf = allData.confidence;
      const subj = allData.subjectivity;
      const score = allData.score_tag;
      //console.log(allData)
       
      document.getElementById("conf").innerHTML = `Confidence: ${conf}`
      document.getElementById("subj").innerHTML = `Subjectivity: ${subj}`;
      document.getElementById("score").innerHTML = `Polarity Score: ${Client.scoreUpdate(score)}`;
      
    }catch(error){
      console.log("updateUI error", error)
  } 
}
export { handleSubmit }
export { postData }
export { updateUI }

