// =======================================
// Rainbow Worldwide
// Main JavaScript
// =======================================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});


// =======================================
// Sticky Navigation
// =======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(7,11,18,0.97)";
        header.style.boxShadow = "0 10px 35px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(7,11,18,.88)";
        header.style.boxShadow = "none";

    }

});


// =======================================
// Fade In Sections
// =======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".card, .project, .stat-box, .about, .cta")
    .forEach(el => observer.observe(el));


// =======================================
// Animated Counter
// =======================================

const counters = document.querySelectorAll(".stat-box h2");

const speed = 200;

counters.forEach(counter => {

    const updateCounter = () => {

        const target = counter.innerText.replace(/\D/g, "");

        const count = +counter.getAttribute("data-count") || 0;

        const increment = target / speed;

        if (count < target) {

            const next = Math.ceil(count + increment);

            counter.setAttribute("data-count", next);

            if (counter.innerText.includes("%")) {

                counter.innerText = next + "%";

            } else if (counter.innerText.includes("+")) {

                counter.innerText = next + "+";

            } else {

                counter.innerText = next;

            }

            setTimeout(updateCounter, 10);

        }

    };

    updateCounter();

});


// =======================================
// Hero Button Animation
// =======================================

document.querySelectorAll(".btn-primary, .btn-secondary").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0)";

    });

});


// =======================================
// Scroll To Top Button (optional)
// =======================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#38bdf8;
color:white;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 10px 25px rgba(0,0,0,.25);
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// =======================================
// Console Message
// =======================================

console.log("Rainbow Worldwide Website Loaded Successfully");