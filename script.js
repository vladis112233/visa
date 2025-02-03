const countryList = document.getElementById('countryList');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    if (countryList.classList.contains('expanded')) {
        countryList.classList.remove('expanded');
        toggleButton.textContent = 'Show More';
    } else {
        countryList.classList.add('expanded');
        toggleButton.textContent = 'Show Less';
    }
});

document.getElementById("langMenu").addEventListener("click", function () {
    var dropdown = document.getElementById("dropdownMenu");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});

// Закрытие меню при клике вне него
document.addEventListener("click", function (event) {
    var menu = document.getElementById("langMenu");
    var dropdown = document.getElementById("dropdownMenu");

    if (!menu.contains(event.target)) {
        dropdown.style.display = "none";
    }
});