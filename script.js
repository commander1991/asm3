function validateEmail(event) {
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var form = document.getElementById("form");
    var formShow = document.getElementById("form-show");
    if (!regex.test(email)) {
        alert("Invalid email. Please enter a valid email address.");

    }
    else {
        form.className = "hide";
        formShow.classList.remove("hide");
        event.preventDefault();
    }
}

function showText(num) {
    var hiddenText = document.getElementById("hiddenText" + num);
    hiddenText.style.display = "block";
}

function hideText(num) {
    var hiddenText = document.getElementById("hiddenText" + num);
    if (hiddenText.innerText === "View less") {
        hiddenText.style.display = "block";
    }
    else {
        hiddenText.style.display = "none";
    }

}

function toggleContent(num) {
    var button = document.getElementById("hiddenText" + num);
    var icon1 = `<i class="fa-solid fa-caret-down me-1"></i>`;
    var icon2 = `<i class="fa-solid fa-caret-up me-1"></i>`;
    if (button.innerText === "View more") {
        button.innerHTML = icon2 + "View less";
    }
    else {
        button.innerHTML = icon1 + "View more";
    }

}