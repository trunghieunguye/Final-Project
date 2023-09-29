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