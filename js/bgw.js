function getTimeOfDay(){

    var now = new Date();
    var hour = now.getHours();
    return hour;
}

function putBg(){

    var time = getTimeOfDay();

    var imgNum =
        time < 04
        ? "8"
        : time < 07
        ? "1"
        : time < 10
        ? "2"
        : time < 15
        ? "3"
        : time < 18
        ? "4"
        : time < 19
        ? "5"
        : time < 20
        ? "6"
        : "7";

    var imgPath = 'img/' + imgNum + '.png';
    //document.write(imgPath);
    $('body').css("background-image", "url(" + imgPath + ")");
}

$(function() {
    putBg();
});