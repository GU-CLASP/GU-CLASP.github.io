$(document).ready(function () {
    // $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    //     if (!$(this).next().hasClass('show')) {
    //         $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    //     }
    //     var $subMenu = $(this).next(".dropdown-menu");
    //     $subMenu.toggleClass('show');

    //     $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
    //         $('.dropdown-submenu .show').removeClass("show");
    //     });

    //     return false;
    // });

    $('a.dropdown-toggle').on('click', function (e) {
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
    });

    // $("button.navbar-toggler").on('click', function (e) {
    //     var selector = $(this).attr('data-target');
    //     $(selector).toggleClass('show');
    // });
    $("a.sidebarItem").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
     });

     $(".sidebarItem").on("click", function(e){
        var href = $(this).attr('href');
        $([document.documentElement, document.body]).animate({
            scrollTop: $(href).offset().top
        }, 800);
        e.preventDefault();
     });
     
});
