(function($) {

    // Fit and stretch text to fit on a cirlce with given radius x
    $.fn.circleText = function( settings )
    {
        // Preserve method chaining in jQuery:
        return this.each(function() {
            
            // Assign some basic settings:
            var text    = $(this).text().split(''),
                degrees = 360 / text.length,
                origin  = 0,
                $this   = $(this);

            // Clear the element so we can append it:
            $(this).empty();

            // Extend the options into opts:
            var opts = $.extend({ radius: 10 }, settings);

            // Loop through the characters:
            text.forEach(function(char) {

                // Wrap the char inside a <span>:
                var $char = $('<span />', { text: char });

                // Apply the required CSS to the letter:
                $char.css({
                    'height':           opts.radius,
                    'position':         'absolute',
                    'transform':        'rotate('+origin+'deg)',
                    'transform-origin': '0 100%'
                });

                // Now append the character to the element:
                $char.appendTo( $this );

                // Finally, increment the origin for the next char by degrees:
                origin+= degrees;
            });
        });
    };
} (jQuery));
