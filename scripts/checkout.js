// Function to retrieve cart data from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || {};
}

// Function to display cart items in the checkout page
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

// Function to clear the cart after checkout
function clearCart() {
    localStorage.removeItem('cart');
    window.location.href = 'index.html'; // Redirect to homepage after checkout
}

// Function to initialize the checkout page
function initCheckout() {
    displayCart();
}

window.onload = initCheckout;