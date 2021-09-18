$(document).ready(function(){

    //PARALLAX
    $(function(){
        var boxes = $('.scel'),
            $window = $(window);
        $window.scroll(function(){
            var scrollTop = $window.scrollTop();
            boxes.each(function(){
            var $this = $(this),
                scrollspeed = parseInt($this.data('scroll-speed')),
                val = - scrollTop / scrollspeed;
            $this.css('transform', 'translateY(' + val + 'px)');
            });
        });
    })

    //M-NAV
    $(".burger").click(function(){
        $(".m-nav").toggleClass("active");
    });

    //SCROLL NAV
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 200) {
            $(".master").addClass("scrolled");
        }
        else {
            $(".master").removeClass("scrolled");
        }
    });


});