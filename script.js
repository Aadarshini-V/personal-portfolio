/* =====================================================
   PERSONAL PORTFOLIO
   Aadarshini V
===================================================== */


/* =====================================================
   1. SELECT ELEMENTS
===================================================== */

const header = document.getElementById("header");

const menuToggle = document.getElementById("menu-toggle");

const navMenu = document.getElementById("nav-menu");

const navLinks = document.querySelectorAll(".nav-link");

const themeToggle = document.getElementById("theme-toggle");

const themeIcon = document.getElementById("theme-icon");

const backToTop = document.getElementById("back-to-top");

const contactForm = document.getElementById("contact-form");

const currentYear = document.getElementById("current-year");


/* =====================================================
   2. MOBILE NAVIGATION
===================================================== */

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navMenu.classList.toggle("open");

        menuToggle.classList.toggle(
            "active",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

    });

}


/* =====================================================
   3. CLOSE MOBILE MENU WHEN LINK IS CLICKED
===================================================== */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (!navMenu) return;

        navMenu.classList.remove("open");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        document.body.classList.remove(
            "menu-open"
        );

    });

});


/* =====================================================
   4. HEADER SCROLL EFFECT
===================================================== */

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();


/* =====================================================
   5. ACTIVE NAVIGATION LINK
===================================================== */

const sections = document.querySelectorAll(
    "main section[id]"
);


function updateActiveNav() {

    const scrollPosition =
        window.scrollY + 150;

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach((link) => {

                link.classList.remove("active");

            });

            const activeLink =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );

            if (activeLink) {

                activeLink.classList.add(
                    "active"
                );

            }

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);

updateActiveNav();


/* =====================================================
   6. DARK / LIGHT THEME
===================================================== */

const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    document.body.classList.add(
        "light-theme"
    );

    if (themeIcon) {
        themeIcon.textContent = "🌙";
    }

}


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-theme"
            );

            const isLight =
                document.body.classList.contains(
                    "light-theme"
                );

            localStorage.setItem(
                "portfolio-theme",
                isLight
                    ? "light"
                    : "dark"
            );

            if (themeIcon) {

                themeIcon.textContent =
                    isLight
                        ? "🌙"
                        : "☀️";

            }

        }
    );

}


/* =====================================================
   7. SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =====================================================
   8. BACK TO TOP BUTTON
===================================================== */

function updateBackToTop() {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


updateBackToTop();


/* =====================================================
   9. FORM VALIDATION HELPERS
===================================================== */

function showError(
    input,
    errorElement,
    message
) {

    input.classList.add("invalid");

    errorElement.textContent =
        message;

}


function clearError(
    input,
    errorElement
) {

    input.classList.remove("invalid");

    errorElement.textContent = "";

}


/* =====================================================
   10. EMAIL VALIDATION
===================================================== */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* =====================================================
   11. CONTACT FORM VALIDATION
===================================================== */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const subject =
                document.getElementById("subject");

            const message =
                document.getElementById("message");


            const nameError =
                document.getElementById(
                    "name-error"
                );

            const emailError =
                document.getElementById(
                    "email-error"
                );

            const subjectError =
                document.getElementById(
                    "subject-error"
                );

            const messageError =
                document.getElementById(
                    "message-error"
                );

            const formSuccess =
                document.getElementById(
                    "form-success"
                );


            let isValid = true;


            /* Clear previous messages */

            clearError(
                name,
                nameError
            );

            clearError(
                email,
                emailError
            );

            clearError(
                subject,
                subjectError
            );

            clearError(
                message,
                messageError
            );

            formSuccess.textContent = "";


            /* NAME */

            if (
                name.value.trim() === ""
            ) {

                showError(
                    name,
                    nameError,
                    "Please enter your name."
                );

                isValid = false;

            } else if (
                name.value.trim().length < 2
            ) {

                showError(
                    name,
                    nameError,
                    "Name must contain at least 2 characters."
                );

                isValid = false;

            }


            /* EMAIL */

            if (
                email.value.trim() === ""
            ) {

                showError(
                    email,
                    emailError,
                    "Please enter your email."
                );

                isValid = false;

            } else if (
                !isValidEmail(
                    email.value.trim()
                )
            ) {

                showError(
                    email,
                    emailError,
                    "Please enter a valid email address."
                );

                isValid = false;

            }


            /* SUBJECT */

            if (
                subject.value.trim() === ""
            ) {

                showError(
                    subject,
                    subjectError,
                    "Please enter a subject."
                );

                isValid = false;

            }


            /* MESSAGE */

            if (
                message.value.trim() === ""
            ) {

                showError(
                    message,
                    messageError,
                    "Please enter your message."
                );

                isValid = false;

            } else if (
                message.value.trim().length < 10
            ) {

                showError(
                    message,
                    messageError,
                    "Message must contain at least 10 characters."
                );

                isValid = false;

            }


            /* SUCCESS */

            if (isValid) {

                formSuccess.textContent =
                    "Your message has been validated successfully! Please connect the form to a backend/email service to receive submissions.";

                contactForm.reset();

            }

        }
    );

}


/* =====================================================
   12. REAL-TIME FORM ERROR CLEARING
===================================================== */

const formInputs =
    document.querySelectorAll(
        ".contact-form input, .contact-form textarea"
    );


formInputs.forEach((input) => {

    input.addEventListener(
        "input",
        () => {

            input.classList.remove(
                "invalid"
            );

            const errorElement =
                document.getElementById(
                    `${input.id}-error`
                );

            if (errorElement) {

                errorElement.textContent =
                    "";

            }

        }
    );

});


/* =====================================================
   13. CURRENT YEAR
===================================================== */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =====================================================
   14. KEYBOARD ACCESSIBILITY
===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            navMenu &&
            navMenu.classList.contains("open")
        ) {

            navMenu.classList.remove(
                "open"
            );

            menuToggle.classList.remove(
                "active"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }

    }
);
