function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

function toggleCart(){
    var cart = document.querySelector('.cart');
    var cartAct = document.querySelector('.cartAct');
    cartAct.classList.toggle('active');
    cart.classList.toggle('active');
}