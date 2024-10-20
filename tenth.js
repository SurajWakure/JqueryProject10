$(document).ready(function(){
    $("menu-link").on("click",function(){
        $(".menu-link").removeClass("active");
        $(this).addClass("active");

    });

    $(".menu-item").on("mouseover",function(){
        $(this).addClass("active").siblings().removeClass("active")
    })
});
//one 