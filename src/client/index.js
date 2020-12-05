import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { postData } from './js/formHandler'
import { updateUI } from './js/formHandler'
import { getDate } from './js/formHandler'
import { checkURL } from './js/URLChecker'

import './styles/base.scss'

console.log(checkForName);

console.log("CHANGE!!");

export {
    checkForName,
    handleSubmit,
    checkURL,
    postData,
    updateUI,
    getDate
}