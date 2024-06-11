$(function(){
    $('#start').on('click', function(){
        const width = $('#width').val();
        const growth = parseInt($('#growth').val());
        const interval = $('#interval').val();
        const numCircles = $('#numberCicles').val();
        const circles = [];

        for(let i = 0; i < numCircles; i++){
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            const circle = $("<div>", {
                class: 'circle',
                css: {
                    width: width,
                    height: width,
                    backgroundColor: '#' + randomColor,
                }
            });
            circles.push(circle);
            
            setInterval(function(){
                const size = circle.width();
                circle.width(size + growth);
                circle.height(size + growth);
            }, interval);
        }

        $('.parent-circle').append(circles);
    });

    $('.parent-circle').on('click', '.circle', function(){
        $(this).remove();
    });
    
    
    $('.parent-circle').on('mousemove', '.circle', function(){
        $(this).css('opacity', '0.5');
    });

    $('.parent-circle').on('mouseleave', '.circle', function(){
        $(this).css('opacity', '1');
    });

});