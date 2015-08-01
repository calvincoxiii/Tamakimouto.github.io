function getTimeOfDay(){

    var now = new Date();
    var hour = now.getHours();
    return hour;
}

function putBg(time, imgNum){

    var imgPath = 'img/' + imgNum + '.png';
    $('body').css("background-image", "url(" + imgPath + ")");
}

function timeControl(){
    var time = getTimeOfDay();
    var imgNum;

    if (time < 04){
        imgNum = "8";
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
        $('.sub').attr('data-value', "Good Day, Visitor");
        $('.sub').css('color', 'rgba(39, 72, 215, 1)');
        $('.about').css('color', 'rgba(231, 227, 227, 1');
        $('.hilight').css('color', 'rgba(23, 42, 128, 1)');
    } else if (time < 18) {
        imgNum = "4";
        $('.sub').attr('data-value', "Good Afternoon, Visitor");
        $('.sub').attr('color', 'rgba(231, 227, 227, 1)');
        $('.about').attr('color', 'rgba(231, 227, 227, 1');
    } else if (time < 19) {
        imgNum = "5";
        $('.sub').attr('data-value', "It's getting late isn't it, Visitor?");
        $('.sub').attr('color', 'rgba(231, 227, 227, 1)');
        $('.about').attr('color', 'rgba(231, 227, 227, 1');
    } else if (time < 20) {
        imgNum = "6";
        $('.sub').attr('data-value', "Good Evening, Visitor");
        $('.sub').attr('color', 'rgba(231, 227, 227, 1)');
        $('.about').attr('color', 'rgba(231, 227, 227, 1');
    } else {
        imgNum = "7";
        $('.sub').attr('data-value', "Good Night, Visitor");
        $('.sub').css('color', 'rgba(231, 227, 227, 1)');
        $('.about').css('color', 'rgba(37, 89, 101, 1');
        $('.hilight').css('color', 'rgba(231, 227, 227, 1');
    }
    putBg(time, imgNum);
}

$(function() {
    timeControl();
});