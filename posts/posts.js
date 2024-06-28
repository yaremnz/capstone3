/* Posts Page JavaScript */

"use strict";
document.getElementById("buttonPostMessage").addEventListener("click", e => {
    fetch(apiBaseURL + "/api/posts", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.token
        },
        body: JSON.stringify({ text: document.getElementById("messageElement").value })
    }).then(response => {
        if (response.ok) {
            console.log("Post created");
            location.reload();  // force refresh
        } else {
            console.error("Failed to create post:", response.statusText);
        }
    }).catch(error => {
        console.error("Error creating post:", error);
    });
});

function getMessage(message){
    return `
    <div class="posts">
        <h1>${message.text}</h1>
        <div class="username">${message.username}</div>
        <div class="createdAt">${message.createdAt}</div>
    </div> <hr>
    `;
}
function showMessages(messages){
    if(messages.hasOwnProperty("message")){
        location = "/";
        return;
    }

    messagesOutput.innerHTML = messages.map(getMessage).join("");
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