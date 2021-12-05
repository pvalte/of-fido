async function signupFormHandler (event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const passwordHash = document.querySelector('#password-signup').value.trim();

    if(username && email && passwordHash) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                passwordHash
            }),
            headers: {'Content-Type': 'application/json'}
        });
        console.log(response);
        
        // check the response status
        if(response.ok) {
            console.log('success');
            document.location.replace('/login');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.form').addEventListener('submit', signupFormHandler);