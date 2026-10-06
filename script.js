/* =========================================================
   EMMA — AI SOFTWARE DEVELOPER
   Portfolio JavaScript
   ========================================================= */

/* =========================================================
   1. SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

/* =========================================================
   2. ACTIVE NAVIGATION LINK
   ========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveNav() {
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

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();

/* =========================================================
   3. SMOOTH SCROLL
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

/* =========================================================
   4. PROJECT CARD INTERACTION
   ========================================================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("project-hover");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("project-hover");
  });
});

/* =========================================================
   5. CURRENT YEAR
   ========================================================= */

const footerYear = document.querySelector(".footer p");

if (footerYear) {
  const currentYear = new Date().getFullYear();

  footerYear.innerHTML = `© ${currentYear} Emma. Built with purpose.`;
}

/* =========================================================
   6. IMAGE FALLBACK
   ========================================================= */

const heroImage = document.querySelector(".hero-image");

if (heroImage) {
  heroImage.addEventListener("error", () => {
    heroImage.style.display = "none";
  });
}

/* =========================================================
   7. PAGE LOAD
   ========================================================= */

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
