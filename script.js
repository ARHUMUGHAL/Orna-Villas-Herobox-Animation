const h1MainHeading = document.querySelector('.main-heading')
const h1MainHeadingText = h1MainHeading.textContent.split('')

var h1MainLetter = ''

h1MainHeadingText.forEach(function(elem){
    h1MainLetter += `<span>${elem}</span>`
})

h1MainHeading.innerHTML = h1MainLetter



const h1SecondHeading = document.querySelector('.secondary-heading')
const h1SecondHeadingText = h1SecondHeading.textContent.split('')

var h1SecondLetter = ''

h1SecondHeadingText.forEach(function(elem){
    h1SecondLetter += `<span>${elem}</span>`
})

h1SecondHeading.innerHTML = h1SecondLetter


var tl = gsap.timeline();


tl.from('.herobox h1.main-heading span',{
    y : '350%',
    duration : 1,
    stagger : .050
},'a')


tl.from('.herobox h1.secondary-heading span',{
    y : '350%',
    duration : 1,
    stagger : .050
},'a')

tl.to('.herobox img',{
    clipPath: 'inset(30%)',
    duration : 1,
},'a')


tl.to('.herobox h1.main-heading',{
    x : '-150px',
    duration : 1,
},'b')


tl.to('.herobox h1.secondary-heading',{
    x : '150px',
    duration : 1,
},'b')

tl.to('.herobox img',{
    clipPath: 'inset(0%)',
    duration : 1,
},'b')


tl.to('.navbar',{
    opacity : 1,
    duration : 1,
},'c')

tl.to('.navbar2',{
    opacity : 1,
    duration : 1,
},'c')

tl.to('.member',{
    opacity : 1,
    duration : 1,
},'d')

tl.to('.herobox p.description',{
    opacity : 1,
    duration : 1,
},'d')

tl.to('a.right-btn',{
    opacity : 1,
    duration : 1,
},'e')

tl.to('.contact',{
    opacity : 1,
    duration : 1,
},'e')