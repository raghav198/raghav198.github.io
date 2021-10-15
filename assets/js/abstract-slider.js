(function($){
    var $window = $(window);
    var flip_time;
    $window.on('load', function() {
        console.log($('.paper-info').css('transition'));
    });



    // $('#work').on('show', function() {
    //     $('.paper-info').each(function(){
    //         console.log($(this).find('.metadata').height());
    //         console.log($(this).find('.abstract').height());
    //     });
    // });


    // $('ul.publications li').mouseenter(() => {
    //     $(this).addClass('flipped');
    // }).moseleave(() => {
    //     $(this).removeClass('flipped');
    // });

    // var timer1, timer2;

    // $('ul.publications li').click(function() {
    //     clearTimeout(timer1);
    // })



    function switchToHideAbstract($li) {
        setTimeout(() => {
            $li.find('.show-abstract').each(function() {
                $(this).removeClass('show-abstract');
                $(this).addClass('hide-abstract');
                $(this).html('&larr; Back');
            });
        }, 500);
        
    }

    function switchToShowAbstract($li) {
        setTimeout(() => {
            $li.find('.hide-abstract').each(function() {
                $(this).removeClass('hide-abstract');
                $(this).addClass('show-abstract');
                $(this).html('Abstract &rarr;');
            });
        }, 500);
        
    }

    $('.flip-abstract').click(function() {

        console.log('clicked');

        var $li = $(this).parentsUntil('li').parent();
        console.log($li);
        var $metadata = $li.find('.paper-info').find('.metadata');
        var $abstract = $li.find('.paper-info').find('.abstract');

        if ($li.hasClass('flipped')) {
            $li.removeClass('flipped');
            $('.flip-abstract').html('Abstract &rarr;')
            
            $metadata.show();
            $abstract.hide();
            $metadata.css('position', 'relative');
            $abstract.css('position', 'absolute');

        } else {
            $li.addClass('flipped');
            $('.flip-abstract').html('&larr; Back');

            $metadata.hide();
            $abstract.show();
            $metadata.css('position', 'absolute');
            $abstract.css('position', 'relative');
        }


        // var $li = $(this).parent().parent();
        // console.log('show');
        // console.log(this);
        // console.log($li);
        // switchToHideAbstract($li);

        // $li.addClass('flipped');
        

        // $metadata.hide();
        // $abstract.show();
        // $metadata.css('position', 'absolute');
        // $abstract.css('position', 'relative');
    });

})(jQuery);