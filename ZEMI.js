
// image slide show home page//

function img1(){

    document.getElementById ("image").src="zemih2.png";
    
    }
    
    
    
    
    function img2(){
    
        document.getElementById ("image").src="img15.png";
    
    }
    
    
    
    
    function img3(){
    
        document.getElementById ("image").src="img3.png";
    
    }
    
    
    
    
    function img4(){
    
        document.getElementById ("image").src="img4.png";
    
    }

// nav//

const btnToggle= document.querySelector('.toggle-btn');
console.log(btnToggle)

btnToggle.addEventListener('click', function name()  {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('collectionh').hidden=true;
});

//slideshow

var i = 0;
var images = [];
var time = 10000;

//image sequence
images[0] = 'ab1.png'
images[1] = 'ab2.png'
images[2] = 'ab3.png'

//image change
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else{
        i=0;
    }

    setTimeout("changeImg()", time);
}

window.onload= changeImg;

// date
function displayDate() {
    document.getElementById("showDate").innerHTML=Date();
}
