 // Function to add an item to the cart
 function addToCart(item) {
    // Retrieve the quantity of the item
    var quantity = document.getElementById(item + '-quantity').innerText;

    // Add the item and quantity to the cart (you can use localStorage or sessionStorage)
    var cart = JSON.parse(localStorage.getItem('cart')) || {};
    cart[item] = parseInt(quantity);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Provide feedback to the user
    alert('Item added to cart!');
  }

  // Function to increase the quantity of an item
  function increaseQuantity(item) {
    var quantityElement = document.getElementById(item + '-quantity');
    var quantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = quantity + 1;
  }

  // Function to decrease the quantity of an item
  function decreaseQuantity(item) {
    var quantityElement = document.getElementById(item + '-quantity');
    var quantity = parseInt(quantityElement.innerText);
    if (quantity > 0) {
      quantityElement.innerText = quantity - 1;
    }
  }

  console. log(cart)