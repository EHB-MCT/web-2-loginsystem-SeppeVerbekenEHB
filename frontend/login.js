document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    let email = document.getElementById("exampleInputEmail1").value
    let password = document.getElementById("exampleInputPassword1").value

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then((response) => console.log(response))
});