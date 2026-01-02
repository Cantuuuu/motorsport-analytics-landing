const navToggle = document.querySelector("#navToggle");
const mobilePanel = document.querySelector("#mobilePanel");
const navOverlay = document.querySelector("#navOverlay");

function closeMenu() {
    navToggle.setAttribute("aria-expanded", "false");
    mobilePanel.hidden = true;
    navOverlay.classList.remove("is-visible");
    document.body.style.overflow = "";
}

function openMenu() {
    navToggle.setAttribute("aria-expanded", "true");
    mobilePanel.hidden = false;
    navOverlay.classList.add("is-visible");
    document.body.style.overflow = "hidden";
}

navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
});

navOverlay.addEventListener("click", closeMenu);

document.querySelectorAll(".panel-link, .panel-cta").forEach((a) => {
    a.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
});

const cookieBanner = document.querySelector("#cookieBanner");
const cookieAccept = document.querySelector("#cookieAccept");
const cookieReject = document.querySelector("#cookieReject");

const COOKIE_KEY = "cookies_consent_v1";

function hideCookies(){ cookieBanner.style.display = "none"; }
function showCookies(){ cookieBanner.style.display = "block"; }

const saved = localStorage.getItem(COOKIE_KEY);
if (saved) hideCookies(); else showCookies();

cookieAccept.addEventListener("click", () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    hideCookies();
});

cookieReject.addEventListener("click", () => {
    localStorage.setItem(COOKIE_KEY, "rejected");
    hideCookies();
});

// Smooth scroll para que los enlaces internos se desplacen suavemente, en lugar de saltar directamente
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
