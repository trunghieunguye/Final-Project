const messages = document.querySelector('.trust-bod')
const currentMess = 'Trust your gutt, love your bods'


let charIndex = 0;
function typing(){
    if(charIndex < currentMess.length){
        let currentChar = currentMess.substring(0, charIndex);
        console.log(currentChar)
        messages.innerHTML = currentChar;
        charIndex ++;
    
    }else{
        charIndex = 0;
    }
    setTimeout(typing, 100)
}
typing(d);







// Dong mo nav khi responsive





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