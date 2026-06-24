// Header scroll effect
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Reveal animation on scroll
const revealElements = document.querySelectorAll(
    ".card, .project-card, .process-step, .stat-box, .image-card, .about-text, .contact-card, .contact-form, .section-title, .section-intro"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    { threshold: 0.15 }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});

// Animated counters
const counters = document.querySelectorAll(".stat-box h2");
let counterStarted = false;

function startCounters() {
    counters.forEach(counter => {
        const originalText = counter.innerText;
        const target = parseInt(originalText.replace(/\D/g, ""));
        const suffix = originalText.replace(/[0-9]/g, "");
        let current = 0;
        const increment = Math.max(1, Math.floor(target / 90));

        const updateCounter = () => {
            current += increment;

            if (current >= target) {
                counter.innerText = target + suffix;
            } else {
                counter.innerText = current + suffix;
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    });
}

const statsSection = document.querySelector(".stats");

if (statsSection) {
    const statsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counterStarted) {
                counterStarted = true;
                startCounters();
            }
        });
    });

    statsObserver.observe(statsSection);
}

// Mouse glow position on cards
const glowCards = document.querySelectorAll(".card, .project-card, .process-step, .stat-box");

glowCards.forEach(card => {
    card.addEventListener("mousemove", event => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
    });
});

// Subtle parallax hero movement
const hero = document.querySelector(".hero");

if (hero) {
    window.addEventListener("mousemove", event => {
        const moveX = (event.clientX / window.innerWidth - 0.5) * 12;
        const moveY = (event.clientY / window.innerHeight - 0.5) * 12;

        hero.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
    });
}

// Magnetic button effect
const buttons = document.querySelectorAll(".btn-primary, .btn-secondary, .btn-nav");

buttons.forEach(button => {
    button.addEventListener("mousemove", event => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px) translateY(-4px)`;
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "";
    });
});
