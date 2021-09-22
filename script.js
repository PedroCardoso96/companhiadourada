
// Animation header
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

$(window).ready(function(){
    $(".mostrar").hide();
    $(".ocultar").click(function()
    {
        $(this).next(".mostrar").slideToggle(600);
});
});



// Button To-top

const backToTopButton = document.querySelector('.to-top')

function backToTop(){

    if(window.scrollY >= 400){
        backToTopButton.classList.add('show')
    } else{
        backToTopButton.classList.remove('show')
    }

}

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $('.to-top').add('show');
        } else {
            $('.to-top').add('show');
        }
    });

    $('.to-top').click(function(){
        $('html, body').animate({scrollTop : 0}, 400);
        return false;
    });
});


window.addEventListener('scroll', function(){
    backToTop()
})