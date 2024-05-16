const forms = document.querySelector(".forms"),
links = document.querySelectorAll(".link");


links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); 
 forms.classList.toggle("show-signup");
})
})




    const loginForm = document.querySelector('.signup form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.querySelector('.field input[type="email"]').value;
        const password = document.querySelector('.field input[type="password"]').value;

        localStorage.setItem(email, password);


        window.location.href = 'index.html';
    });




    const signinForm = document.querySelector('.login form');

    signinForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.querySelector('.input').value;
        const password = document.querySelector('.password').value;


        const storedPassword = localStorage.getItem(email);

    
        if (storedPassword && password === storedPassword) {
        
            window.location.href = 'main.html';
        } else {
            
            alert('Invalid email or password. Please try again.');
        }
    });

