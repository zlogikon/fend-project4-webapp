export function checkURL(userInput) {

    let http =  /^(?:http(s)?:\/\/)/;
    let space = /\s/;
        
    return (http.test(userInput) && !space.test(userInput))   

    
}
