////READY()****////
if (document.readyState == 'loading')
{
    document.addEventListener('DOMContentLoaded', ready)
} else 
{
    ready()
} 

function ready(){
      
    //REMOVE BUTTONS//
    var removeCartItemButtons = document.getElementsByClassName('btn_danger') 
    for (var i=0; i<removeCartItemButtons.length; i++)
    {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    } //REMOVE BUTTONS END//
   
    //QUANTITY INPUT BUTTON//
    var quantityInputs = document.getElementsByClassName('cart_quantity_input')
    for (var i =0; i <quantityInputs.length; i++)
    {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    } //QUANTITY INPUT BUTTON END//

    //ADD TO CART BUTTON//
    var addToCartButtons = document.getElementsByClassName('shop_item_button')
    for( var i=0; i<addToCartButtons.length; i++)
    {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }//ADD TO CART BUTTON//
   
}////READY()****////


////FUNCTIONS***////

//ADD TO CART CLICKED//
function addToCartClicked(event)
{
    var button = event.target
    var shopItem =  button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop_item_title')[0].innerText
    var price = shopItem.getElementsByClassName('shope_item_price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop_item_image')[0].src 
    addItemToCart(title, price, imageSrc)
} //ADD TO CART CLICKED END//

//ADD ITEM TO CART //
//to create a new row for the cart item
function addItemToCart(title, price, imageSrc)
{
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart_row')
    var cartItems = document.getElementsByClassName('cart_items')[0]
    var carItemNames = document.getElementsByClassName('cart_item_title')
    for (var i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerText == title)
        {
            alert('Ooops you did it again. LoLz. This item is already in your cart.')
        }            
    }
    var cartRowContents = ``
}//ADD ITEM TO CART //

//QUANTITY INPUT CHANGED//
function quantityChanged(event)
{
    var input = event.target
    if(isNaN(input.value) || input.value <= 0)
    {
        input.value = 1
    }
    updateCartTotal()
}//QUANTITY INPUT CHANGED END//


 //REMOVE BUTTON CLICKED //
 function removeCartItem(event)
 {
     var buttonClicked = event.target
         buttonClicked.parentElement.parentElement.remove()
         updateCartTotal()
 }//REMOVE BUTTON CLICKED END//

 //UPDATE CART TOTAL//
 function updateCartTotal() 
 {
     //get all cart_rows inside or cart_items
     var cartItemContainer = document.getElementsByClassName('cart_items')[0]
     var cartRows = cartItemContainer.getElementsByClassName('cart_row')
     var total = 0;

     for(var i=0; i<cartRows.length; i++) {
         var cartRow = cartRows[i];
         //get the price and quantity
         var priceElement = cartRow.getElementsByClassName('cart_price')[0]
         var price = parseFloat(priceElement.innerText.replace('$', ''))

         var quantityElement = cartRow.getElementsByClassName('cart_quantity_input')[0]
         var quantity = quantityElement.value
         total = total + (price * quantity)
     }
     total = Math.round(total * 100) / 100
     document.getElementsByClassName('cart_total_price')[0].innerText = '$' + total

 }//UPDATE CART TOTAL END//

