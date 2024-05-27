import {inputPassword, inputUsername} from "../view/elements.mjs";

function redirection(path, username, password) {
    localStorage.setItem('user', JSON.stringify({ username, password }));
    window.location.href = path;
    inputUsername.value = ''
    inputPassword.value = ''
}

export default redirection