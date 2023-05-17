

var x = document.getElementById("Tbtn");
var y = document.getElementById("SelT");
//const ImgBtn = document.getElementById("ImgBtn");
//const img = document.getElementById("Tshirt");
document.getElementById("Clt").disabled = true;


function Choose(){


    document.getElementById('default').style.display = "block";    
   
    document.getElementById("ImgBtn1").disabled = false;
    document.getElementById("ImgBtn2").disabled = false;
    document.getElementById("ImgBtn3").disabled = false;
    document.getElementById("ImgBtn4").disabled = false;
    document.getElementById("ImgBtn5").disabled = false;


    document.getElementById('Tshirt').style.display = "none";
    document.getElementById('Pant').style.display = "none" ;
    document.getElementById('Longsleeve').style.display = "none" ;
    document.getElementById('Dress').style.display = "none";
    document.getElementById('shirt').style.display = "none";


  document.getElementById("ImgBtn1").style.color = "darkviolet";
    document.getElementById("ImgBtn2").style.color = "darkviolet";
    document.getElementById("ImgBtn3").style.color = "darkviolet";
    document.getElementById("ImgBtn4").style.color = "darkviolet";
    document.getElementById("ImgBtn5").style.color = "darkviolet";
    
}







function show1(){
    
    document.getElementById('default').style.display = "none";
    document.getElementById('Tshirt').style.display = "block";


    document.getElementById("ImgBtn2").disabled = true;
    document.getElementById("ImgBtn3").disabled = true;
    document.getElementById("ImgBtn4").disabled = true;
    document.getElementById("ImgBtn5").disabled = true;


    document.getElementById("ImgBtn2").style.color = "grey";
    document.getElementById("ImgBtn3").style.color = "grey";
    document.getElementById("ImgBtn4").style.color = "grey";
    document.getElementById("ImgBtn5").style.color = "grey";


    /*document.getElementById("ImgBtn").style.display = "none";*/
}


function show2(){
    document.getElementById('default').style.display = "none";
    document.getElementById('Pant').style.display = "block";


    document.getElementById("ImgBtn1").disabled = true;
    document.getElementById("ImgBtn3").disabled = true;
    document.getElementById("ImgBtn4").disabled = true;
    document.getElementById("ImgBtn5").disabled = true;


    document.getElementById("ImgBtn1").style.color = "grey";
    document.getElementById("ImgBtn3").style.color = "grey";
    document.getElementById("ImgBtn4").style.color = "grey";
    document.getElementById("ImgBtn5").style.color = "grey";


    /*document.getElementById("ImgBtn").style.display = "none";*/
}


function show3(){
    document.getElementById('default').style.display = "none";
    document.getElementById('Longsleeve').style.display = "block";


    document.getElementById("ImgBtn1").disabled = true;
    document.getElementById("ImgBtn2").disabled = true;
    document.getElementById("ImgBtn4").disabled = true;
    document.getElementById("ImgBtn5").disabled = true;


    document.getElementById("ImgBtn1").style.color = "grey";
    document.getElementById("ImgBtn2").style.color = "grey";
    document.getElementById("ImgBtn4").style.color = "grey";
    document.getElementById("ImgBtn5").style.color = "grey";


    /*document.getElementById("ImgBtn").style.display = "none";*/
}


function show4(){
    document.getElementById('default').style.display = "none";
    document.getElementById('Dress').style.display = "block";


    document.getElementById("ImgBtn1").disabled = true;
    document.getElementById("ImgBtn2").disabled = true;
    document.getElementById("ImgBtn3").disabled = true;
    document.getElementById("ImgBtn5").disabled = true;


    document.getElementById("ImgBtn1").style.color = "grey";
    document.getElementById("ImgBtn2").style.color = "grey";
    document.getElementById("ImgBtn3").style.color = "grey";
    document.getElementById("ImgBtn5").style.color = "grey";


    /*document.getElementById("ImgBtn").style.display = "none";*/
}


function show5(){
    document.getElementById('default').style.display = "none";
    document.getElementById('shirt').style.display = "block";


    document.getElementById("ImgBtn1").disabled = true;
    document.getElementById("ImgBtn2").disabled = true;
    document.getElementById("ImgBtn3").disabled = true;
    document.getElementById("ImgBtn4").disabled = true;


    document.getElementById("ImgBtn1").style.color = "grey";
    document.getElementById("ImgBtn2").style.color = "grey";
    document.getElementById("ImgBtn3").style.color = "grey";
    document.getElementById("ImgBtn4").style.color = "grey";


    /*document.getElementById("ImgBtn").style.display = "none";*/
}


function MyFunc(){
    document.getElementById("SelT").innerHTML="Select";
}


let slideIndex = 1;
showSlides(slideIndex);


//Next & previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}


//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n> slides.length) {
        slideIndex = 1;
    }


    if (n < 1) {
        slideIndex = slides.length
    }


    for (i=0;i< slides.length; i++) {
        slides[i].style.display = "none";
    }


    for(i=0;i< dots.length;i++){
        slides[i].className = dots[i].className.replace(" active", "");
    }


    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}


function predict(){
    if( document.getElementById("ImgBtn1").disabled === "false"){
        document.getElementById("text").innerHTML=="Tshirt";
    }
}
