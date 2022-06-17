$(document).ready(function () {
  var silder = $(".owl-carousel");
  silder.owlCarousel({
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      items: 1,
      stagePadding: 20,
      center: true,
      nav: false,
      margin: 50,
      dots: true,
      loop: true,
      responsive: {
          0: { items: 1 },
          480: { items: 2 },
          575: { items: 2 },
          768: { items: 2 },
          991: { items: 3 },
          1200: { items: 4 }
      }
  });
});


/*
$(document).ready(function(){

    // campaign owl carousel
    $("#campaigns .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000 : {
                items: 5
            }
        }
    }); 

});
*/





/*
let angle = document.querySelector('.angle')

angle.addEventListener('click', (e) => {
  if (angle.classList.toggle('ask-display')) {
    angle.classList.remove('ask-display')
  } else {
  angle.classList.add('ask-display')    
  }
})
*/



/*
let askIcon = document.getElementsByName('ask-icon');

document.getElementsByName('ask-icon').addEventListener('click', (event) => {
    alert(event.target);
    let askDisplay = document.querySelectorAll("ask-display");
    console.log(askDisplay);

    if (askDisplay.style.display === "none") {
      askDisplay.style.display = "block";
    } else {
      askDisplay.style.display = "none";
    }  
})
*/





