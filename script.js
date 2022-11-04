"use strict";

const sendData = (url, res) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.send(JSON.stringify(
        res
    ));
    xhr.onload = () => console.log(xhr.response);
}

const getData = (url, func) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            func("https://jsonplaceholder.typicode.com/posts", data)
        })
        .catch(error => {
            console.log(error);
        })
}

getData("db.json", sendData);