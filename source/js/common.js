$(function () {



    var windowh = $(window).height();
    var windowW = $(window).width();


    function pcmenu() {

        $(document).on("mousemove", function(e){
            if (windowW > 1200 && e.pageY > 300) {
                $("nav#main-menu").removeClass("on");
            }
        });
    }

    pcmenu();


    $(window).on("resize", function(){
        
        windowh = $(window).height();
        windowW = $(window).width();
        
        $("nav#main-menu h3 a").unbind();
        pcmenu();
    });




    $("button.main-menu").on("click", function () {
        $("nav#main-menu").toggleClass("on");
    });

    $("nav#main-menu button.close").on("click", function () {
        $("nav#main-menu").toggleClass("on");
    });

    $("nav#main-menu h3 a").on("click", function (e) {
        
        $("nav#main-menu h3").removeClass("on");



        if (windowW < 1200 && $(this).parent().parent().find("ul").length) {

            $(this).parent().addClass("on");
            e.preventDefault();

        }
        else {
            $("nav#main-menu h3 a").unbind();

        }
    });

    $("nav#main-menu").on("mouseenter", function(){
        $(this).addClass("on");
    });




});
