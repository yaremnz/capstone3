

btnProfile.addEventListener("click", () => {
    fetch(apiBaseURL + "/api/users/" + localStorage.username, {
        method: "PUT",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.token
        },
        body: JSON.stringify({ bio: bioInput.value })
    }).then(response => {
        console.log(response);
        location = "/profile/profile.html";  
    });
});

function showProfile(data){

    bioElement.innerHTML = data.bio;
    bioInput.value = data.bio;
    usernameElement.textContent = data.username; //displaying the username 

}

fetch(apiBaseURL + "/api/users/" + localStorage.username, {
    headers: { Authorization: `Bearer ${localStorage.token}` }
}).then(response => {
    if (response.statusCode >= 400) {
        location = "/";
    }
    return response.json()
}).then(data=>{
    showProfile(data);
});