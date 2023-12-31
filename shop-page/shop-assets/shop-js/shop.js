document.addEventListener("DOMContentLoaded", function() {
  

// Dong mo cart
 function closeCart(params) {
  const open = document.querySelector('.bag-logo')
  const close = document.querySelector('.close-icon')
  const cartContainer = document.querySelector('.cart-container')
  const cardAdd = document.querySelector('.card-button')
  const overLay = document.querySelector('.overlay')

  open.addEventListener('click', function(){
    cartContainer.style.transform = "translateX(0%)"
    cartContainer.style.transition = ".9s ease"
    close.style.transform = "rotate(360deg)"
    close.style.transition = ".9s ease"
    overLay.style.display = "block"
  });

  
  
  close.addEventListener('click', function(){
    cartContainer.style.transform = "translateX(100%)"
    cartContainer.style.transition = ".9s ease"
    close.style.transform = "rotate(180deg)"
    close.style.transition = ".9s ease"
    overLay.style.display = "none"
    
  });


  overLay.addEventListener('click', function(){
    cartContainer.style.transform = "translateX(100%)"
    cartContainer.style.transition = ".9s ease"
    close.style.transform = "rotate(180deg)"
    close.style.transition = ".9s ease"
    overLay.style.display = "none"
  });
 
 }
closeCart();


  // Lay ra noi dung the
  const cardButton = document.querySelectorAll('.card-button')
  cardButton.forEach(function(button){
    button.addEventListener("click", function(event){
          var btnItem = event.target
          var parentOfBtnItem = btnItem.parentElement
          var product = parentOfBtnItem.parentElement
          var productImg = product.querySelector(".card-img-top").src
          var productName = product.querySelector(".card-title").innerText
          // console.log(productName)
          var productPrice = product.querySelector(".card-price").innerText
         addCart(productImg, productName, productPrice)
      })
  })







  // Them san pham vao cart 
  function addCart(productImg, productName, productPrice) {
    var addDiv = document.createElement('div');
    addDiv.classList.add('cart-big');
    // Ghi noi dung vao the div
    addDiv.innerHTML = `
    <div class="remove-icon">
    <i class="fa-solid fa-x fa-sm" style="color: #000000;"></i>
  </div>
  <div><img src="${productImg}" alt="" class="cart-img"></div>
  <div class="text-cart-row">
    <div class="name-cart-row">${productName}</div>
    <div class="price-cart-row">${productPrice}</div>
    <div class="quantity">
      <button class="decrease">-</button>
      <input type="text" class="count" value="1" readonly>
      <button class="increase">+</button>
    </div>
    <hr>
  </div> 
    
    `;
    // Them duoc 1 lan mot san pham
    var cartItem = document.querySelectorAll('.cart-big')
    for (var i=0; i<cartItem.length;i++){
      var imgSource = cartItem[i].querySelector('.cart-img').src
      if(imgSource === productImg ){
        alert('San pham nay them 1 lan thoi')
        return
      }
    }
    // Truy cap cart-row
    const cartRows = document.querySelector('.cart-row')

    
    // Them noi dung vao cart-row
    cartRows.append(addDiv);
    
    //   Tang giam so luong san pham
    changeCart()

    // Remove san pham khoi gio hang
    removeCard()
    
    cartPrice()

  

  }







function cartPrice(){
  var cartItem = document.querySelectorAll('.cart-big')
  var total = 0;
  for (var i=0; i<cartItem.length;i++){
    var inputValue = cartItem[i].querySelector('.count').value
    var containDollar = cartItem[i].querySelector('.price-cart-row').innerHTML
    var itemPrice = containDollar.replace('$', '')
    totalItem = inputValue * itemPrice 
    total += totalItem
   

  }
  document.querySelector('.price-total').innerHTML= '$' + total.toFixed(2) ;
  // document.querySelector('.bag-quantity').innerHTML= cartItem.length;

  localStorage.setItem("quantity",JSON.stringify(cartItem.length));
  
  let bagQuantity = JSON.parse(localStorage.getItem("quantity"))
  document.querySelector('.bag-quantity').innerHTML= bagQuantity;
  
 
}







function removeCard(){
  const btnRemove = document.querySelectorAll('.remove-icon')
    btnRemove.forEach(function(item){
    item.addEventListener('click', function(){
      item.parentElement.remove();
      cartPrice()
    })
  })
}





  //   Tang giam so luong san pham
function changeCart(){
    const decreaseButtons = document.querySelectorAll(".decrease");
    const increaseButtons = document.querySelectorAll(".increase");
    const countInputs = document.querySelectorAll(".count");
  
    decreaseButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        if (countInputs[index].value > 1) {
          countInputs[index].value--;
          cartPrice();
        }
      });
    });
  
    increaseButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        countInputs[index].value++;
        cartPrice();
      });
    });
} 

// Them mot lan san pham
function addOnly() {
  var cartItem = document.querySelectorAll('.cart-big')
  console.log(cartItem)
  for (var i=0; i<cartItem.length;i++){
    var imgSource = cartItem[i].querySelector('.cart-img').src
    if(imgSource === productImg ){
      alert('San pham nay them 1 lan thoi')
      return
    }
  }
  
  
}




   
});


















  

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