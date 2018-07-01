// Mobile menu code

var mobileBar = document.querySelector('i.fa-bars');
var ul = document.getElementsByTagName('ul')[0];

mobileBar.addEventListener('click', function() {
    ul.classList.toggle('mobile-menu');
})