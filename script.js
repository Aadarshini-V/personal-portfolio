/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navItems = document.querySelectorAll(".nav-link");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach((item) => {

        item.classList.remove("active");

        if (
            item.getAttribute("href") === `#${currentSection}`
        ) {

            item.classList.add("active");

        }

    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");

const formSuccess = document.getElementById("form-success");


/* Email validation */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* Remove previous errors */

function clearErrors() {

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    nameInput.classList.remove("error");
    emailInput.classList.remove("error");
    subjectInput.classList.remove("error");
    messageInput.classList.remove("error");

}


/* Form submit */

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    clearErrors();

    formSuccess.textContent = "";

    let valid = true;


    /* Name */

    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Please enter your name.";

        nameInput.classList.add("error");

        valid = false;

    } else if (nameInput.value.trim().length < 3) {

        nameError.textContent =
            "Name must contain at least 3 characters.";

        nameInput.classList.add("error");

        valid = false;

    }


    /* Email */

    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email.";

        emailInput.classList.add("error");

        valid = false;

    } else if (!isValidEmail(emailInput.value.trim())) {

        emailError.textContent =
            "Please enter a valid email address.";

        emailInput.classList.add("error");

        valid = false;

    }


    /* Subject */

    if (subjectInput.value.trim() === "") {

        subjectError.textContent =
            "Please enter a subject.";

        subjectInput.classList.add("error");

        valid = false;

    }


    /* Message */

    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Please enter your message.";

        messageInput.classList.add("error");

        valid = false;

    } else if (messageInput.value.trim().length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        messageInput.classList.add("error");

        valid = false;

    }


    /* Successful validation */

    if (valid) {

        formSuccess.textContent =
            "Thank you! Your message has been validated successfully.";

        contactForm.reset();

    }

});


/* =========================================
   CLEAR ERROR WHEN USER TYPES
========================================= */

const formInputs = [
    nameInput,
    emailInput,
    subjectInput,
    messageInput
];

formInputs.forEach((input) => {

    input.addEventListener("input", () => {

        input.classList.remove("error");

    });

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");

yearElement.textContent =
    new Date().getFullYear();


/* =========================================
   SCROLL TO TOP
========================================= */

const scrollTopButton =
    document.getElementById("scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});


scrollTopButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   SECTION SCROLL ANIMATION
========================================= */

const observerOptions = {
    threshold: 0.15
};

const sectionObserver =
    new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "show-section"
                );

            }

        });

    }, observerOptions);


sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener("load", () => {

    const homeSection =
        document.getElementById("home");

    homeSection.classList.add(
        "show-section"
    );

});