function register(data){
    
    return fetch(apiBaseURL + "/api/users",{ 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json"

        },
        body: JSON.stringify({
            username: userName.value,
            fullName: fullName.value,
            password: password.value 
        }),
    }).then(()=> location = "/");
}

registerButton.addEventListener("click", register)