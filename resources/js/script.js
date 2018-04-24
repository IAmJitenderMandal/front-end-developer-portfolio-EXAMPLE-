// Mobile menu code

var mobileBar = document.getElementsByTagName('i')[0];
var ul = document.getElementsByTagName('ul')[0];

mobileBar.addEventListener('click', function() {
    ul.classList.toggle('mobile-menu');
})