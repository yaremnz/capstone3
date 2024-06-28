/* auth.js provides LOGIN-related functions */

"use strict";

const apiBaseURL = "https://microbloglite.us-east-2.elasticbeanstalk.com";
// Backup server (mirror):   "https://microbloglite.onrender.com"

// NOTE: API documentation is available at /docs 
// For example: http://microbloglite.us-east-2.elasticbeanstalk.com/docs


// You can use this function to see whether the current visitor is
// logged in. It returns either `true` or `false`.
function isLoggedIn () {
    return Boolean(localStorage.token);
}


// This function is already being used in the starter code for the
// landing page, in order to process a user's login. READ this code,
// and feel free to re-use parts of it for other `fetch()` requests
// you may need to write.
function login (loginData) {
    return fetch(apiBaseURL + "/auth/login",{
        method: "POST",
        headers: {"Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    }).then(response => response.json()).then(loginData => {
        if(loginData.hasOwnProperty("message")){
            errorMessage.innerHTML = loginData.statusCode + " - " + loginData.message;
            return;
        }
        errorMessage.innerHTML = "";
        window.localStorage.setItem("login-data", JSON.stringify(loginData));
        window.localStorage.token = loginData.token;
        window.localStorage.username = loginData.username;
        window.location.assign("/posts");
        return loginData;
    });
}
    

function logout () {
        fetch(apiBaseURL + "/auth/logout", { 
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.token}`},
    }).then(() => {
        window.localStorage.removeItem("token");
        location = "/";
    });
}
