var slideIndex = 1;
function slideMain(){
	showImage(slideIndex);	
}
function showImage(n){
	var slide = document.getElementsByClassName('slides');

	if (n > slide.length) {slideIndex = 1};
	if (n < 1) {slideIndex = slide.length};

	for (var i = 0; i < slide.length; i++) {
		slide[i].style.display = "none"
	}


}

/*
   <script type="text/javascript">
        var slideIndex = 1;
        showImage(slideIndex);  

        function showImage(n){
            var slide = document.getElementById("sliding"); 
            alert(slide);
            if(n > slide.length){
                    slideIndex = 1;
            };
            alert("slide");
            if(n < 1){
                slideIndex = slide.length;
            };

            for (var i = 0; i < slide.length; i++) {
                slide[i].style.display = "none"
            }
            slide[slideIndex-1].style.display = "inline-block";

        }
    </script>