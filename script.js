// adding button function 
let add = (text) => {
    let title = document.getElementsByClassName('title')[0].value;
    let notes = document.getElementsByClassName('notes')[0].value;
    let LStorage = localStorage.setItem(title, notes);
}


// function that get values from localStorage and innerHTML them
let func = () => {
    let GLStorage = window.localStorage;
    for (let key in GLStorage) {

        if (GLStorage.hasOwnProperty(key)) {

            let card = `<div class="card mt-2">
            <div class="card-header">
            <h3>${key}</h3>
            </div>
            <div class="card-body">
            <div class="blockquote mb-0">
            <p>${GLStorage[key]}</p>
            </div>
            </div>
            </div>`

            inner.innerHTML += card

        };
    };

};

func()


// function that clear all the localStorage values and clear screen without any refreshing the page 
ACbutton = () => {
    localStorage.clear();
    inner.innerHTML = ""
}