async function loginFormHandler (event) {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim(); 
    const passwordHash = document.querySelector('#password-login').value.trim();

    if(email && passwordHash) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                passwordHash
            }),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => {
            if(response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert(response.statusText);
            };
        });        
    }
}

document.querySelector('.form').addEventListener('submit', loginFormHandler);
