document.addEventListener("DOMContentLoaded", function () {
    const faqHeaders = document.querySelectorAll(".faq-header");
    faqHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling;
            const isOpen = content.style.display === "block";
            content.style.display = isOpen ? "none" : "block";
        });
    });
});