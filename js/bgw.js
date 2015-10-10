/**
* getTimeOfDay
*
* @return hour The current hour in 24 hour format
*/
function getTimeOfDay(){

    var now = new Date();
    var hour = now.getHours();
    return hour;
}


/**
* putBg
*
* Changes the website background
*
* @param time The current hour
* @param imgNum The pictur to use as the backdrop
*/
function putBg(time, imgNum){

    var imgPath = 'img/' + imgNum + '.png';
    $('body').css("background-image", "url(" + imgPath + ")");
}


/**
* timeControl
*
* The main controller for the look of the site
* based on time of day.
*/
function timeControl(){

    var time = getTimeOfDay();
    var imgNum;

    if (time < 04){
        imgNum = "8";
        $('.head').css('color', 'rgba(231, 227, 227, 1)');
        $('.sub').attr('data-value', "You should be sleeping right now");
        $('.sub').css('color', 'rgba(231, 227, 227, 1)');
        $('.about').css('color', 'rgba(37, 89, 101, 1');
        $('.hilight').css('color', 'rgba(231, 227, 227, 1');
    } else if (time < 07) {
        imgNum = "1";
        $('.sub').attr('data-value', "It's too early to be up right now, don't you think?");
        $('.sub').css('color', 'rgba(231, 227, 227, 1)');
        $('.about').css('color', 'rgba(231, 227, 227, 1');
    } else if (time < 10) {
        imgNum = "2";
        $('.sub').attr('data-value', "Good Morning, Visitor");
        $('.sub').attr('color', 'rgba(231, 227, 227, 1)');
        $('.about').attr('color', 'rgba(231, 227, 227, 1');
    } else if (time < 15) {
        imgNum = "3";
        $('.head').css('color', 'rgba(234, 129, 81, 1)');
        $('.sub').attr('data-value', "Good Day, Visitor");
        $('.sub').css('color', 'rgba(39, 72, 215, 1)');
        $('.about').css('color', 'rgba(231, 227, 227, 1');
        $('.hilight').css('color', 'rgba(23, 42, 128, 1)');
        $('.pink > a').css('color', 'rgba(38, 165, 80, 1)');
        $('.yellow > a').css('color', 'rgba(82, 55, 218, 1)');
    } else if (time < 18) {
        imgNum = "4";
        $('.sub').attr('data-value', "Good Afternoon, Visitor");
        $('.sub').attr('color', 'rgba(231, 227, 227, 1)');
        $('.about').attr('color', 'rgba(231, 227, 227, 1');
    } else if (time < 19) {
        imgNum = "5";
        $('.head').css('color', 'rgba(237, 86, 125, 1)');
        $('.sub').attr('data-value', "It's getting late isn't it, Visitor?");
        $('.sub').css('color', 'rgba(237, 86, 125, 1)');
        $('.about').attr('color', 'rgba(231, 227, 227, 1');
    } else if (time < 20) {
        imgNum = "6";
        $('.head').css('color', 'rgba(240, 84, 89, 1)');
        $('.sub').attr('data-value', "Good Evening, Visitor");
        $('.sub').css('color', 'rgba(231, 227, 227, 1)');
        $('li.purple > a').css('color', 'rgba(228, 192, 111, 1)');
        $('.hilight').css('color', 'rgba(240, 84, 125, 1)');
        $('.about').css('color', 'rgba(210, 114, 233, 1');
    } else {
        imgNum = "7";
        $('.head').css('color', 'rgba(231, 227, 227, 1)');
        $('.sub').attr('data-value', "Good Night, Visitor");
        $('.sub').css('color', 'rgba(231, 227, 227, 1)');
        $('.about').css('color', 'rgba(37, 89, 101, 1');
        $('.hilight').css('color', 'rgba(231, 227, 227, 1');
    }
    putBg(time, imgNum);
}


/**
* Document Ready
*/
$(function() {
    timeControl();

    /* Onclick Dynamic Page Change */
    $('#cpage').on('click', function() {
        if($('#cpage').html() == "contact")
            $('#cpage').html("home");
        else
            $('#cpage').html("contact");

        $('section').each(function() {
            if($(this).hasClass('visible')) {
                $(this).fadeOut(500);
                $(this).removeClass('visible');
            } else {
                $(this).addClass('visible');
                $(this).fadeIn(500);
            }
        });
    }); // Page Change

});
