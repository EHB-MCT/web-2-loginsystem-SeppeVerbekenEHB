document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    let userName = document.getElementById("inputUsername").value
    let email = document.getElementById("exampleInputEmail1").value
    let password = document.getElementById("InputPassword").value
    let repeatPassword = document.getElementById("repeatInputPassword").value
    if (password != repeatPassword) {
        alert("Passwords do not match");
        return;
    }
    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: userName,
            email: email,
            password: password
        })
    }).then((response) => console.log(response))
});