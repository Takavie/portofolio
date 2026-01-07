/* ================= THEME TOGGLE ================= */
const themeToggle = document.getElementById("themeToggle");
const icon = themeToggle.querySelector("i");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    document.body.classList.add("light");
    icon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");

    icon.classList.toggle("fa-moon", !isLight);
    icon.classList.toggle("fa-sun", isLight);
});

/* ================= SCROLL REVEAL (FIXED) ================= */
const reveals = document.querySelectorAll(".reveal-wrap");

const revealOnScroll = () => {
    const triggerPoint = window.innerHeight * 0.85;

    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < triggerPoint) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");

        // hanya intercept anchor internal
        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
