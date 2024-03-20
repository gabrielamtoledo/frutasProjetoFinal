// function addToCart(item) {
//   var quantityElement = document.getElementById(item + "-quantity");
//   if (quantityElement) {
//     var quantity = parseInt(quantityElement.innerText);
//     if (!isNaN(quantity) && quantity > 0) {

//       var cart = JSON.parse(localStorage.getItem("cart")) || {};
//       cart[item] = (cart[item] || 0) + quantity;
//       localStorage.setItem("cart", JSON.stringify(cart));
//       displayCart();
//       console.log(cart);
//     }

//     alert("Item adicionado ao carrinho!");
//   } else {
//     console.error("Quantidade inválida para o item " + item);
//   }

//   function getCart() {
//     return JSON.parse(localStorage.getItem("cart")) || {};
//   }

//   function displayCart() {
//     var cart = getCart();
//     var cartItems = document.getElementById("cartItems");
//     cartItems.innerHTML = "";

//     for (var item in cart) {
//       if (cart.hasOwnProperty(item)) {
//         var quantity = cart[item];
//         var itemElement = document.createElement("div");
//         itemElement.innerHTML = "<p>" + item + ": " + quantity + "</p>";
//         cartItems.appendChild(itemElement);
//       }
//     }
//   }

// }
