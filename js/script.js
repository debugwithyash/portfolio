

const typingElement = document.querySelector(".typing");

if (typingElement) {

    const words = [
        "Frontend Developer",
        "AI Student",
        "Web Developer",
        "Problem Solver"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typing() {

        const current = words[wordIndex];

        if (!deleting) {

            typingElement.textContent = current.substring(0, charIndex++);

            if (charIndex > current.length) {
                deleting = true;
                setTimeout(typing, 1200);
                return;
            }

        } else {

            typingElement.textContent = current.substring(0, charIndex--);

            if (charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

        }

        setTimeout(typing, deleting ? 60 : 120);
    }

    typing();
}

const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menu && navLinks) {
    menu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
const toggle=document.getElementById("theme-toggle");

toggle.onclick=()=>{

document.body.classList.toggle("dark");

toggle.textContent=
document.body.classList.contains("dark")
?"☀️":"🌙";

};