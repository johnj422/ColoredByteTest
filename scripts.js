
//Like function
/* A function that changes the heart icon from empty to full when clicked. */
let heart = document.querySelector('.heart')

heart.addEventListener('click', () => {
    if (heart.src.includes('heartempty')) {
        heart.src = '/assets/heart.svg'
        heart.style.transform = 'scale(1.5)'
        setTimeout(() => {
            heart.style.transform = 'scale(1)'
        }, 100)

    } else {
        heart.src = '/assets/heartempty.svg'
    }
})

//Swiper function
/* A function that allows the user to swipe through the images. */
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
//Post function
/* This is a function that allows the user to post a comment. */
let input = document.querySelector('input')
let comment
let button = document.querySelector('#button')
let comments = document.querySelector('.comments')
let allComments = [comments.childNodes[1].innerHTML]
input.addEventListener('change', (e) => {
    comment = e.target.value
});
button.addEventListener('click', () => {
    if (input.value === '') {
        return
    } else {
        let p = document.createElement('p')
        p.innerHTML = `<span class="user">Comment</span> ${comment}`
        comments.appendChild(p)
        input.value = ''
    }
})




