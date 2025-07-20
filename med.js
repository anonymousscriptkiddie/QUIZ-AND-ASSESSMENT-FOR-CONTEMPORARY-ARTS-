var carousel = $(".carousel"),
    currdeg  = 0,
    autoplayInterval;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}

// Autoplay function
function startAutoplay() {
  autoplayInterval = setInterval(function(){
    $(".next").trigger("click");
  }, 2000);  // Change 2000 to the desired interval in milliseconds
}

startAutoplay();  // Start autoplay initially

// Stop autoplay on hover and resume on mouse leave
carousel.on("mouseenter", function() {
  clearInterval(autoplayInterval);
}).on("mouseleave", startAutoplay);
