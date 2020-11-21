//Select element function
const $ = (element) => {
    return document.querySelector(element)
}


//select elements
const header = $('header')
const menuToggler = $('.menu-toggle')
const backToTopBtn = $('.back-to-top')


function toggleClass(element, classItem, helper) {
    element.classList.toggle(classItem, helper)
}

menuToggler.addEventListener('click', () => {
    toggleClass(header, "open")
})


window.addEventListener('scroll', () => {
    toggleClass(backToTopBtn, "show-back-to-top", window.scrollY > 100)
})



window.sr = ScrollReveal()

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '10rem',
    delay: 600,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
})

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
})

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '10rem',
    delay: 600
})


sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '10rem',
    delay: 600
})

