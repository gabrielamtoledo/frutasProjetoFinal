function addToCart(item) {
  // Retrieve the quantity of the item
  var quantityElement = document.getElementById(item + '-quantity');
  if (quantityElement) {
    var quantity = parseInt(quantityElement.innerText);
    if (!isNaN(quantity)) {
      // Add the item and quantity to the cart (you can use localStorage or sessionStorage)
      var cart = JSON.parse(localStorage.getItem('cart')) || {};
      cart[item] = (cart[item] || 0) + 1;
      localStorage.setItem('cart', JSON.stringify(cart));
      displayCart();
      console.log(cart);

      // Provide feedback to the user
      alert('Item adicionado ao carrinho!');
    } else {
      console.error('Invalid quantity for item ' + item);
    }
  } else {
    console.error('Element for item ' + item + ' not found.');
  }
}
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || {};
}

function displayCart() {
  var cart = getCart();
  var cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';

  for (var item in cart) {
    if (cart.hasOwnProperty(item)) {
      var quantity = cart[item];
      var itemElement = document.createElement('div');
      itemElement.innerHTML = '<p>' + item + ': ' + quantity + '</p>';
      cartItems.appendChild(itemElement);
    }
  }
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

