
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3500,
        smartSpeed:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
  });



// Close bars
function closeBars() {
    const closeBtn = document.querySelector('.close-bars')
    const barOps =  document.querySelector('.bars-options')
    const overLay = document.querySelector('.overlay')
    closeBtn.addEventListener('click',function(){
        barOps.style.transform = "translateX(100%)"
        barOps.style.transition = ".9s ease"
        overLay.style.display = "none"
    })
    overLay.addEventListener('click',function(){
        barOps.style.transform = "translateX(100%)"
        barOps.style.transition = ".9s ease"
        overLay.style.display = "none"
    })

    
}
closeBars();

function openBars(){
    const openBtn = document.querySelector('.nav-bars')
    const barOps =  document.querySelector('.bars-options')
    const overLay = document.querySelector('.overlay')
    openBtn.addEventListener('click',function(){
        barOps.style.transform = "translateX(0%)"
        barOps.style.transition = ".9s ease"
        overLay.style.display = "block"
    })
}
openBars();

  










