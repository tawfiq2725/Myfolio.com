document.addEventListener('DOMContentLoaded', function () {

    function validate() {
        var nameInput = document.getElementById('name').value;
        var emailInput = document.getElementById('email').value;
        var commentsInput = document.getElementById('comments').value;

        var nameRegex = /^[A-Za-z ]{2,}$/;
        var emailRegex = /^[A-Za-z0-9._ ]{3,}@[A-Za-z0-9 ]{3,}\.[A-Za-z]{2,8}$/;
        var numberRegex = /^[A-Za-z ]{5,}$/;

        if (!nameRegex.test(nameInput)) {
            document.getElementById('errorname').innerHTML = "Use only alphabets/Please fill it";
        }
        else{
            document.getElementById('errorname').innerHTML = "";
        }

        if (!emailRegex.test(emailInput)) {
            document.getElementById('erroremail').innerHTML = "Enter a valid email address";
        }
        else{
            document.getElementById('erroremail').innerHTML = "";
        }

           if (!numberRegex.test(commentsInput)) {
            document.getElementById('commentsmsg').innerHTML = "Please enter valid comments";
        }
        else{
            document.getElementById('commentsmsg').innerHTML = "";
        }
    }

   
    document.getElementById('form').addEventListener('submit', function (e) {
        if (!validate()) {
            e.preventDefault();
        }
    });
});
