

function register(){
    
    return fetch(apiBaseURL + "/api/users",{ 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json"

        },
        body: JSON.stringify({
            username: username.value,
            fullName: fullName.value,
            password: password.value 
        }),
    }).then(()=> location = "/");
}

registerButton.addEventListener("click", register)