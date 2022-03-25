
const debounce = (func, wait, immediate)=>{
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    }
}

// Animação de elementos "Proficiências"
const icons = document.querySelectorAll('.icoSize');
const timeline = new TimelineLite();

timeline
    .from(icons, 1,{y: -100, opacity: 0})
    .to(icons, 0, {y: 0, opacity: 1})


// Animação de trabalhos
// const cards = document.querySelectorAll('.cardsContainer');
// const timeline2 = new TimelineLite();

// function cardAnime(){
//     const windowTop = window.pageYOffset + (window.innerHeight * 1.5)
//     cards.forEach(function(e){
//         if(windowTop > e.offsetTop){
//             timeline2
//                 .from(cards, .5,{y: -20, opacity: 0})
//                 .to(cards, 0, {y: 0, opacity: 1})
//         }
//     })
// }

// if(cards.length){
//     window.addEventListener('scroll', debounce(function(){
//         cardAnime()
//     },1000))
// }


// Animação de ir ao topo
const titulo = document.getElementById('titulo');

titulo.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    })
})

// Animação de surgimento do texto


const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + (window.innerHeight * 0.85)
    target.forEach(function(e){
        if(windowTop > e.offsetTop){
            e.classList.add(animationClass)
        }else{
            e.classList.remove(animationClass)
        }
    })
}
animeScroll();
animeScroll();


if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeScroll()
    },100))
}


// carrossel front to back
const bioItem = document.querySelectorAll('.bioItens');

// bioItem.addEventListener('click', (e)=>{
//     // resolver mais terde
//     console.log("clicou")
//     return
// })