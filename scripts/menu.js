function addToCart(item) {
  // Retrieve the quantity of the item
  var quantityElement = document.getElementById(item + '-quantity');
  if (quantityElement) {
    var quantity = parseInt(quantityElement.innerText);
    if (!isNaN(quantity) && quantity > 0) { // Verifica se a quantidade é válida e maior que zero
      // Add the item and quantity to the cart (you can use localStorage or sessionStorage)
      var cart = JSON.parse(localStorage.getItem('cart')) || {};
      cart[item] = (cart[item] || 0) + quantity; // Adiciona a quantidade selecionada
      localStorage.setItem('cart', JSON.stringify(cart));
      displayCart();
      console.log(cart);

      //animação cor botão
      var button = document.getElementsByClassName('gray-button')
      if (quantity > 0) {
        button.style.backgroundColor = "#190b00" // Adiciona a classe gray-button quando a quantidade for maior que 0
        console.log('Classe gray-button adicionada');
      } else {
        button.style.backgroundColor ="gray"  // Remove a classe gray-button quando a quantidade for 0
        console.log('Classe gray-button removida');
      }
      }
      // Provide feedback to the user
      alert('Item adicionado ao carrinho!');
    } else {
      console.error('Quantidade inválida para o item ' + item);
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
}
