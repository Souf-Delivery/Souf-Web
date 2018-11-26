function main(){
    slideshow();
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