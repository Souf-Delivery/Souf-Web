var slideIndex = 1;

function main(){
    slideshow();
    showImage(slideIndex);
}
function slideshow(){
    var mySlide = document.getElementById("slideshow");
    var img1 = new Image();
    img1.src = "imagens/1.jpg";
    var img2 = new Image();
    img2.src = "imagens/2.jpg";
    
    var numberImage =1;
    
    function myslide(){
        document.images.slideshow.src = eval("img"+ numberImage +".src");
        if(numberImage < 2){
            numberImage = numberImage + 1; 
        }
        else{
            numberImage = 1;
        }   
        setTimeout(myslide, 5500);
    }
    myslide(); 
}
function backslide(){
    document.images.slideshow.src = eval("img"+ numberImage +".src");

}


/* ---- */
/*
        showImage(slideIndex);  

        function showImage(n){
            var slide = document.getElementsByClassName("slides"); 
            //alert(slide[1]);
            if(n > slide.length){
                    slideIndex = 1;
            };
            //alert("slide");
            if(n < 1){
                slideIndex = 2;
            };

            for (var i = 0; i < 2; i++) {
                slide[i].style.display = "none";
            }
            slide[slideIndex-1].style.display = "inline-block";

        }

*/