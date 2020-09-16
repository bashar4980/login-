const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})


gsap.from('.nav-item', {opacity: 0, duration: 1, delay: 2, y: 30, stagger: 0.2,});
gsap.from('.navbar-brand,.nav__toggle', {opacity: 0, duration: 1, delay: 2, y: 30, stagger: 0.2,});

gsap.from('.content', {opacity: 0, duration: 1.5, delay: 2.1, y: 30, stagger: 0.2});
gsap.from('.content-img', {opacity: 0, duration: 1.5, delay: 2.1, y: 30, stagger: 0.2});
