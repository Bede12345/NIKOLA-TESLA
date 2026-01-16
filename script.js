
const quotes = [
    "The present is theirs; the future, for which I really worked, is mine.",
    "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",
    "The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.",
    "Our virtues and our failings are inseparable, like force and matter. When they separate."
];
const quoteElement = document.querySelectorAll('blockquote');
if (quoteElement.length > 0) {
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement[0].textContent = quotes[randomIndex];
    }, 4000)
}
const image = document.querySelectorAll("img");
image.forEach((img) => {
    img.addEventListener("click", () => {
    });
});
const navLinks = document.querySelectorAll("nav a");
const currentpage = location.pathname.split("/").pop();
navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentpage) {
        link.style.fontWeight = "bold";
        link.style.textDecoration = "underline";
    }
});
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", (event) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting the form.");
            event.preventDefault();
        } else {
            alert("Thank you for your message!");
        };
    });
}
