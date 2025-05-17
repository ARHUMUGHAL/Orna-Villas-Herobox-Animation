const h1MainHeading = document.querySelector('h1.main-heading')

const h1MainText = h1MainHeading.textContent.split('')

let h1MainLetters = ''
h1MainText.forEach((elem)=>{
    h1MainLetters += `<span>${elem}</span>`
})

h1MainHeading.innerHTML = h1MainLetters


const h1SecondaryHeading = document.querySelector('h1.secondary-heading')

const h1SecondaryText = h1SecondaryHeading.textContent.split('')

let h1SecondaryLetters = ''
h1SecondaryText.forEach((elem)=>{
    h1SecondaryLetters += `<span>${elem}</span>`
})

h1SecondaryHeading.innerHTML = h1SecondaryLetters


// -------------------- Gsap Animation Start

var tl = gsap.timeline()

tl.to('.herobox img',{
    clipPath : 'inset(30%)',
    duration : 1
},'a')

tl.from('h1.main-heading span',{
    y : '200%',
    duration : .6,
    stagger : 0.040
},'a')

tl.from('h1.secondary-heading span',{
    y : '200%',
    duration : .6,
    stagger : 0.040
},'a')

tl.to('.herobox img',{
    clipPath : 'inset(0%)',
    duration : 1
},'b')

tl.to('h1.main-heading',{
x : '-90px',
    duration : 1,
    ease : Power2
},'b')

tl.to('h1.secondary-heading',{
    x : '60px',
    duration : 1,
    ease : Power2
},'b')

tl.to('.navbar',{
    y : '10%',
    opacity : 1,
    duration : 1,
    ease : Power2
}, 'c')

tl.to('.navbar2',{
    y : '10%',
    delay : 0.15,
    opacity : 1,
    duration : 1,
    ease : Power2
}, 'c')

tl.to('.member',{
    x : '10px',
    opacity : 1,
    duration : 1,
    ease : Power2
},'d')

tl.to('.herobox p.description',{
    y : '20px',
    opacity : 1,
    duration : 1,
    ease : Power2
},'d')

tl.to('a.right-btn',{
    x : '-50px',
    opacity : 1,
    duration : 1,
    ease : Power2
})

tl.to('.contact',{
    y : '-20px',
    opacity : 1,
    duration : 1,
    ease : Power2
})


