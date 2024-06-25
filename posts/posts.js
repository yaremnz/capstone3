/* Posts Page JavaScript */

"use strict";
buttonPostMessage.addEventListener("click", e=>{
    fetch(apiBaseURL + "/api/posts:",{
        method: "POST",
        node: "cors",
        credentials: "same-origin",
        header: {
            accept: "application/json",
            "Content-Type" : "application/json",
            Authorization: "Bearer " + localStorage.token
        },
        body: JSON.stringify({
            text: messageElement.value
        })
    }).then(response =>{
        debugger;
        console.log(response);
        location = "/post/";
    });
});

function getMessage(message){
    return `
    <div>
        <h1>${message.text}</h1>
        <div class="username">${message.username}</div>
    </div>
    `;
}
function showMessages(messages){
    if(messages.hasOwnProperty("message")){
        location = "/";
        return;
    }

    messagesOutput.innerHTML = messages.map(getMessage).join("")
}
fetch(apiBaseURL + "/api/posts", {
    method: "GET",
    headers: { Authorization: `Bearer ${localStorage.token}` }
}).then(response =>{
    if(response.statusCode >= 400){
        console.log(response);
        location = "/";
    }
    return response.json()
}).then(data=>{
    showMessages(data);
});