window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


$(document).ready(function(){
    $(".mostrar").hide();
    $(".ocultar").click(function()
    {
        $(this).next(".mostrar").slideToggle(600);
});
});


