const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const heroImageMobile = document.getElementById('heroImage-mobile');
const h1Mobile = document.getElementById('heading');
const header = document.getElementsByTagName('header');
function toggleIcon(mobileMenu){
    if(hamburger.src.includes('hamburger')){
        hamburger.src = "images/icon-close.svg"; 
        console.log('clicked open')
        mobileMenu.style.display = 'block';
        h1Mobile.style.display = 'none';
        // header.style.background = '#000';
    }
    else{
        console.log('clicked close')
        hamburger.src = "images/icon-hamburger.svg"; 
        mobileMenu.style.display = 'none';
        h1Mobile.style.display = 'block';
        // heroImageMobile.style.display = 'block';
        // header.style.background = 'none';
    }
}

hamburger.addEventListener('click', function(){
    toggleIcon(mobileMenu);
}, false);