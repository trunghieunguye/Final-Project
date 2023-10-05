const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", function(){
  if (window.pageYOffset > 200) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

toTop.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})






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




