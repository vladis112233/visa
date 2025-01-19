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