
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
const animaTxt = document.querySelectorAll('.animaTxt');

timeline
    .from('.animaTxt', 1, {y: -100, opacity: 0})
    .to('.animaTxt', 0, {y: 0, opacity: 1})
    .from(icons, 1,{y: -100, opacity: 0})
    .to(icons, 0, {y: 0, opacity: 1})


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


if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeScroll()
    },100))
}

// Melhorar código no futuro
// const navbar = document.querySelector('.navbar');
// const navbarIdealHeight = 1200;

// window.addEventListener('scroll', debounce(function(){
//     if(window.scrollY > navbarIdealHeight){
//         navbar.classList.add('navbar-fixed')
//         navbar.classList.remove('navBgTrans')
//         navbar.classList.add('bg-dark')
//     }else{
//         navbar.classList.remove('navbar-fixed')
//         navbar.classList.add('navBgTrans')
//         navbar.classList.remove('bg-dark')
//     }
// },100))

    // ..
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 75 * i)
    })
}

const title = document.getElementById('textoNome')
typeWriter(title);

