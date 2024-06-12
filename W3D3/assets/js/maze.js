$(document).ready(function(){
    let hitWall = false;
    /* Exercise 1 : Single boundary turns red (~15 min) */
    $('#boundary1').mouseover(function(){
        $(this).addClass('youlose');
    });

    /* Exercise 2 : All boundaries turn red (~15 min) */
    $('.boundary').mouseover(function(){
        hitWall = true;
        $('.boundary').addClass('youlose');
    });

    /* Exercise 3 : Alert on completion of maze */
    /* Exercise 5: On-page status updates */
    $('#end').mouseover(function(){
        if(hitWall){
            //alert('Sorry, you lose. :[');
            $('#status').text('Sorry, you lose :[');
        } else {
            //alert('You win! :]');
            $('#status').text('You win! :]');
        }
    });

    /* Exercise 4 : Restartable maze */
    $('#start').click(function(){
        $('.boundary').removeClass('youlose');
        hitWall = false;
    });

    /* Exercise 6 : Disallow c  heat */
    $('#maze').mouseleave(function(){
        hitWall = true;
        $('.boundary').addClass('youlose');
    });
});