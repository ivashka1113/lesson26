"use strict";

const sendData = (res) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
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

const getData = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            sendData(data);
        })
        .catch(error => {
            console.log(error);
        })
}

getData('db.json', sendData)