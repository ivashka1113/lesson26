"use strict";

let user;

const sendData = (res) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    console.log(res)
    xhr.send(JSON.stringify(
        res
    ));
    xhr.onload = () => console.log(xhr.response);
}

const getData = (func) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "db.json");
    xhr.send();
    xhr.onload = () => {
        user = xhr.response;
        func(user);
    }
}

getData(sendData)