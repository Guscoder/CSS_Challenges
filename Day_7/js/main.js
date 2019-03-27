/* // Get the container element
const searchIcon = document.querySelector(".search-box");
console.log(searchIcon);
searchIcon.addEventListener('click', function(e) {
    document.querySelector(".search-bar").classList.add("active");
    e.preventDefault();
}) */


function searchBarToggle() {
    document.querySelector('.search-bar').classList.toggle('active');
}
document.querySelector('.search-box').addEventListener('click', searchBarToggle);


function openMenu() {
    document.querySelector('.menu').classList.toggle('show-menu');
    document.querySelector('.panel').classList.toggle('slide-panel');
}

document.querySelector('.menu-graphic').addEventListener('click', openMenu);