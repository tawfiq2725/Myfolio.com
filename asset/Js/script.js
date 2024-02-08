document.addEventListener('DOMContentLoaded', function () {

    function validate() {
        var nameInput = document.getElementById('name').value;
        var emailInput = document.getElementById('email').value;
        var commentsInput = document.getElementById('comments').value;

        var nameRegex = /^[A-Za-z ]{2,}$/;
        var emailRegex = /^[A-Za-z0-9._ ]{3,}@[A-Za-z0-9 ]{3,}\.[A-Za-z]{2,8}$/;
        var numberRegex = /^[A-Za-z ]{5,}$/;

        document.getElementById('errorname').innerHTML = "";
        document.getElementById('erroremail').innerHTML = "";
        document.getElementById('commentsmsg').innerHTML = "";

        if (!nameRegex.test(nameInput)) {
            document.getElementById('errorname').innerHTML = "Use only alphabets/Please fill it";
        }

        if (!emailRegex.test(emailInput)) {
            document.getElementById('erroremail').innerHTML = "Enter a valid email address";
        }

           if (!numberRegex.test(commentsInput)) {
            document.getElementById('commentsmsg').innerHTML = "Please enter valid comments";
        }

   
        return nameRegex.test(nameInput) && emailRegex.test(emailInput) && numberRegex.test(commentsInput);
    }

   
    document.getElementById('form').addEventListener('submit', function (e) {
        if (!validate()) {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });
});