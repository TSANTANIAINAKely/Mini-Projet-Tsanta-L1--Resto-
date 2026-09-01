type="text/javascript"  >
window.addEventListener('scroll', function(){
    const header =document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0 );
});

function toggleMenu(){
    const menutoogle = document.querySelector('.menutoogle');
    const navbar = document.querySelector('.navbar');
    menutoogle.classList.toggle('active');
    navbar.classList.toggle('active');
}
