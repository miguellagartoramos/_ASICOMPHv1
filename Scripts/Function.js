$(document).ready(function () {
    //SIDE MENU
    (function ($) {

        $('#header-icon').click(function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar');
        });

        $('#site-body').click(function (e) {
            $('body').removeClass('sidebar');
        });

    })(jQuery);

    //$('.nav-stacked > li > h2 > a').hover(function () {
    //    $(this).tab('show');
    //});

    $('#lightSlider').lightSlider({
        gallery: false,
        item: 1,
        loop: true,
        slideMargin: 4,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        pager: false
    });

    $('#productLineSlider').lightSlider({
        gallery: false,
        item: 4,
        loop: true,
        slideMargin: 0,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        pager: false,
        vertical: true,
        auto: true,
        speed: 1200,
        pauseOnHover: true,
        verticalHeight: 352,
        responsive: [{ breakpoint: 1200, settings: { item: 3, verticalHeight: 285 } }
        ]
    });

    $('.productSlider').lightSlider({
        gallery: false,
        item: 3,
        loop: true,
        auto: true,
        speed: 1700,
        pauseOnHover: true,
        slideMargin: 0,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        pager: false,
        responsive: [{ breakpoint: 1200, settings: { item: 2, slideMove: 1, slideMargin: 0, } },
              { breakpoint: 800, settings: { item: 2, slideMove: 1, slideMargin: 0, } },
              { breakpoint: 480, settings: { item: 1, slideMove: 1 } }
        ]
    });



});

$(document).ready(function () {
    $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
              .siblings(".content")
              .slideUp(200);
            $(".set > a i")
              .removeClass("fa-minus")
              .addClass("fa-plus");
        } else {
            $(".set > a i")
              .removeClass("fa-minus")
              .addClass("fa-plus");
            $(this)
              .find("i")
              .removeClass("fa-plus")
              .addClass("fa-minus");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
              .siblings(".content")
              .slideDown(200);
        }
    });
});


//Tab Hover
$(document).ready(function ($) {
    $.fn.tab = function (options) {
        var opts = $.extend({}, $.fn.tab.defaults, options);
        return this.each(function () {
            var obj = $(this);

            $(obj).find('.tabHeader li').on(opts.trigger_event_type, function () {
                $(obj).find('.tabHeader li').removeClass('active');
                $(this).addClass('active');

                $(obj).find('.tabContent div').hide();
                $(obj).find('.tabContent div').eq($(this).index()).show();
            })
        });
    }
    $.fn.tab.defaults = {
        trigger_event_type: 'click',
    };

});