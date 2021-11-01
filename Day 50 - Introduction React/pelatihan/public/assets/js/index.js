// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();

// Store
function submitForm(event) {
    var forms = document.getElementById("form1");
    if (!forms.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        forms.classList.add("was-validated");
    } else {
        var fullname = document.getElementById("fullname").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var nationality = document.getElementById("nationality").value;
        var message = document.getElementById("message").value;
        localStorage.setItem("fullnamevalue", fullname);
        localStorage.setItem("emailvalue", email);
        localStorage.setItem("phonevalue", phone);
        localStorage.setItem("nationalityvalue", nationality);
        localStorage.setItem("messagevalue", message);
        return false;
    }
}
