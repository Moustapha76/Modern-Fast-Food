var navbar = document.querySelector('nav')
window.addEventListener('scroll', function(e) {
    if (this.scrollY > 0) {
        navbar.classList.add('fixed')
    } else {
        navbar.classList.remove('fixed')
    }
})
window.addEventListener('load', function() {
    document.querySelector('.preloader').style.display = 'none'
})

var bar = document.querySelector('ul.menu.flex')
var close = document.querySelector('#header>header>nav>label:nth-child(2)')
var open = document.querySelector('#header > header > nav > label:nth-child(4)')
open.addEventListener('click', function() {
    bar.classList.add('reveal')
    close.classList.add('reveal')
});
close.addEventListener('click', function() {
    bar.classList.remove('reveal')
    close.classList.remove('reveal')
});