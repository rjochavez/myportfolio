$('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });



var service = $('.serve-img');
var delay = 0;

for(let i=0; i<service.length; i++){
    $(service[i]).waypoint(function(){
        delay += 100;
        $(service[i]).css('animation', 'appear 500ms ease-in-out '+delay+'ms forwards')
        if(delay >= 400){
            delay = 0;
        }
    }, {offset: '60%'})
}


var sets = $('.skset');
var delay2 = 0;

for(let i=0; i<sets.length; i++){
        $(sets[i]).waypoint(function(){
        delay += 100;
        $(sets[i]).css('animation', 'fadein 800ms ease-in-out '+delay+'ms forwards')
        if(delay >= 1200){
            delay = 0;
        }

    }, {offset: '50%'})
}

var work = $('.screenie');
var delay3 =0;

for(let i=0; i<work.length; i++){
        $(work[i]).waypoint(function(){
        delay += 100;
        $(work[i]).css('animation', 'fadeup 800ms ease-in-out '+delay+'ms forwards');
        if(delay >= 300){
            delay = 0;
        }

        setTimeout(function(){

        },300);

    }, {offset: '50%'})
}
