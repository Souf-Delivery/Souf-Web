var slideIndex = 1;
function begin(){ 
    slideIndex = 1;
    showSlide(slideIndex);
    autoSlide();
}

function plusSlides(n){
    slideIndex = slideIndex + n;
    showSlide(slideIndex);
}
function backSlides(n){
    slideIndex = slideIndex -1;
    showSlide(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("myslides");

    var dots = document.getElementsByClassName("dots");

    if (n > slides.length) { slideIndex = 1};
    if (n < 1) { slideIndex = slides.length};

    for (i=0;i<slides.length;i++) {
        slides[i].style.display = "none";
    };

    for (i=0;i<dots.length;i++) {
        dots[i].className = dots[i].className.replace(" active","");
    };

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
 

}

function autoSlide(){
    var i;
    var slides = document.getElementsByClassName("myslides");
    for (i=0;i<slides.length;i++) {
        slides[i].style.display = "none";
    };
    if (slideIndex > slides.length) { slideIndex = 1};
    slides[slideIndex-1].style.display = "block";
    currentSlide(slideIndex);
    slideIndex++;
//Call slide in every 5 seconds
        setTimeout(autoSlide, 5000);
}

    window.document.onkeydown = function(e) {
      if (!e) {
        e = event;
      }
      if (e.keyCode == 27) {
        lightbox_close();
      }
    }

    function lightbox_open() {
      var lightBoxVideo = document.getElementById("open-video");
      window.scrollTo(0, 0);
      document.getElementById('light').style.display = 'block';
      document.getElementById('fade').style.display = 'block';
      lightBoxVideo.play();
    }

    function lightbox_close() {
      var lightBoxVideo = document.getElementById("open-video");
      document.getElementById('light').style.display = 'none';
      document.getElementById('fade').style.display = 'none';
      lightBoxVideo.pause();
    }


