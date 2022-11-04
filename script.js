"use strict";


const sendData = (url, res) => {

    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(res)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
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

const user = getData("db.json", sendData);