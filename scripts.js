let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})



/*ROLAGEM P/ SERVIÇOS*/
document.addEventListener('DOMContentLoaded', function() {
    var servicosLink = document.querySelector('a[href="#servicos"]');
    if (servicosLink) {
        servicosLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetElement = document.querySelector('#servicos');
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
/*ROLAGEM P/ SOBRE*/
document.addEventListener('DOMContentLoaded', function() {
    var servicosLink = document.querySelector('a[href="#sobre"]');
    if (servicosLink) {
        servicosLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetElement = document.querySelector('#sobre');
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
/*ROLAGEM P/ E-MAIL*/
document.addEventListener('DOMContentLoaded', function() {
    var servicosLink = document.querySelector('a[href="#email"]');
    if (servicosLink) {
        servicosLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetElement = document.querySelector('#email');
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
/*REDIRECIONAMENTO PARA WHATSAPP*/
document.addEventListener('DOMContentLoaded', function() {
    var whatsappButton = document.getElementById('whatsappButton');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            var phoneNumber = '5547992528805';
            var message = encodeURIComponent('Olá, quero realizar um orçamento. \u{1F604}\u{2699}');
            var whatsappAppLink = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + message;
            window.open(whatsappAppLink, '_blank');
        });
    }
});