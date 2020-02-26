

//Variables
var i = 0;
var images = [];
var time = 3500;

//image list
images[0] = "img/winter_driving.jpg";
images[1] = "img/reparationbild_kopia1.jpg";
images[2] = "img/crash_test.jpg";

//Function

function changeimg(){
    document.slide.src = images[i];

    if (i < images.length - 1){
        i++;

    } else {
        i = 0;
    }
    
    setTimeout("changeimg()", time);
}


window.onload = changeimg;

