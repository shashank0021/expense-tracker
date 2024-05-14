const forms = document.querySelector(".forms"),
links = document.querySelectorAll(".link");


links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})



    const loginForm = document.querySelector('.signup form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.querySelector('.field input[type="email"]').value;
        const password = document.querySelector('.field input[type="password"]').value;

        // Save the email and password in localStorage
        localStorage.setItem(email, password);

        // Redirect to index.html
        window.location.href = 'index.html';
    });




    const signinForm = document.querySelector('.login form');

    signinForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.querySelector('.input').value;
        const password = document.querySelector('.password').value;

        // Check if the entered email exists in local storage
        const storedPassword = localStorage.getItem(email);

        // Check if the entered password matches the stored password
        if (storedPassword && password === storedPassword) {
            // If matched, redirect to details page
            window.location.href = 'main.html';
        } else {
            
            alert('Invalid email or password. Please try again.');
        }
    });

