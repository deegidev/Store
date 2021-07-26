# Load JS in Background
 <script src="store.js" ansync></script>

# Make sure all the elements have loaded before manipulating them 
- check if the document's ready state is still loading
- add an event listener to are document for DOMContentLoaded to fire as soon as the page is done loading
- ready() acts like cpp main()

 # Make Remove Buttons Delete the Whole Item From the Cart
 - Get Object
 - Loop through the buttons 
 - add and event listener to whicher is clicked
 - Get the cart_row that the button is inside 
 - The OG parent of each object is the row its in, which is what has to go 
 - Create function to update the cart_total()

# Event Listers vs. Funcs() in this project: 
- Event Listeners are for things directly in HTML,
- funcs() are for nested reactions to events within the JS

# Update the Cart Total 
- Go through each row to find prince
- row[i] price x quantity + row[i] price x quantity = total price
- Display total price 
- Get rid of dollar sign // replace('$', 0)
- Turn the string into a float //  parse.float()

# Update Quantity Input
//QUANTITY INPUT//
- Get the cart_quantity_input class
- Loop through them 
- Add an event lister to cart_quantity_input at [i] to go to quantityChanged()
//QUANTITY CHANGED//
- var for [i] = input
- check if its NaN || more than 1 
- present input value to 1
- call update cart total () 
-- Round total to 2 decimal places //total = Math.round(total * 100) / 100 

# Add To Cart Button 
- Find the class that is applied to all add to cart buttons //shop_item_button
- Loop through them and get the [i]
- Add the click event to the button to go to function addToCartClick()
//ADD TO CART 
- Takes event parameter 
- Create a button event for the button 
- Get the price, name and image from the actual item via shop_items
- add to cart is in the cart_item_detals div 
- shop_item in div before: cart_item_detals div 
//ADD ITEM TO CART //
- to create a new row for a new item 
- createElement(div) and append
- https://www.w3schools.com/jsref/met_node_appendchild.asp 

