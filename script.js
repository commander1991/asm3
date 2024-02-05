function validateEmail(event) {
    // check validate email
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var form = document.getElementById("form");
    var formShow = document.getElementById("form-show");
    if (!regex.test(email)) {
        alert("Invalid email. Please enter a valid email address.");
    }
    else {
        //valid email will hide form check and show personal info
        form.className = "hide";
        formShow.classList.remove("hide");
        event.preventDefault();
    }
}

function showText(num) {
    //show text view more
    var hiddenText = document.getElementById("hiddenText" + num);
    var hiddenButton = document.getElementById("viewmore" + num)
    hiddenText.style.display = "block";
    hiddenButton.style.display = "block";
    hiddenButton.style.width = "130px";
}

function hideText(num) {
    //hide text view more
    var hiddenText = document.getElementById("hiddenText" + num);
    var hiddenButton = document.getElementById("viewmore" + num)
    if (hiddenText.innerText === "View less") {
        hiddenText.style.display = "block";
        hiddenButton.style.display = "block";
        hiddenButton.style.width = "130px";
    }
    else {
        hiddenText.style.display = "none";
        hiddenButton.style.display = "none";
    }

}

function toggleContent(num) {
    //change view more -> view less, also icon
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

// control accordion and masonry work on section job
function toggleAccordion() {
    var viewmore = document.getElementsByClassName("viewmore")
    var collapse = document.getElementsByClassName("collapse")
    var masonry = document.getElementById("job-container")
    // if window width smaller than 992px
    // then remove attribute id of all classname=viewmore and collapse
    // and add show to class where classname = collapse

    if (window.innerWidth < 992) {
        for (var i = 0; i < 6; i++) {
            viewmore[i].removeAttribute('id')
            collapse[i].removeAttribute('id')
            collapse[i].classList.add("show")
        }
        masonry.setAttribute('data-masonry', '{"percentPosition": true }')

    }
}

var previousWidth = window.innerWidth

function checkAndRefresh() {
    var currentWidth = window.innerWidth;

    if ((previousWidth < 992 && currentWidth >= 992) || (previousWidth >= 992 && currentWidth < 992)) {
        location.reload();
    }

    previousWidth = currentWidth;

}

// do before reload page
toggleAccordion();

// listening event reszise
window.addEventListener('resize', toggleAccordion);
window.addEventListener('resize', checkAndRefresh);
window.addEventListener('DOMContentLoaded', checkAndRefresh);
