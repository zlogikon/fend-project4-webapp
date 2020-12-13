import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { postData } from './js/formHandler'
import { updateUI } from './js/formHandler'
import { scoreUpdate } from './js/formHandler'
import { checkURL } from './js/URLChecker'


import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/main.scss'


console.log(checkForName);

console.log("CHANGE!!");

export {
    checkForName,
    handleSubmit,
    checkURL,
    postData,
    updateUI,
    scoreUpdate
    
}