const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const body = document.querySelector('.body')

hamburger.addEventListener('click', mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
}


function close(){
    document.querySelector('.body').style.overflowY= 'visible';
}

const link = document.querySelectorAll('.a');
link.forEach(n => n.addEventListener('click', closeMenu));
 function closeMenu(){
    hamburger.classList.remove('active');
    menu.classList.remove('active');
}

function disableScrolling(){
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function(){
        window.scrollTo(x, y);
    };
}

function enableScrolling(){
    window.onscroll= function(){}
}