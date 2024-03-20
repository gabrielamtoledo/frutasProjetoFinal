// função para buscar a informação do carrinho no local storage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || {};
}

//função para aplicar o preço nas frutas

function getPrice(item) {
  var prices = {
    apple: 5.0,
    banana: 2.0,
    kiwi: 10.99,
    orange: 8.99,
    mango: 5.99,
    pineapple: 9.99,
  };

  // Verifica se o item existe no objeto de preços
  if (prices.hasOwnProperty(item)) {
    return prices[item];
  } else {
    console.error("Preço não encontrado para o item: " + item);
    return 0; // Retorna 0 se o preço não for encontrado
  }
}
//função pra traduzir o nome das frutas
var traducoesFrutas = {
  apple: "Maçã",
  banana: "Banana",
  kiwi: "Kiwi",
  orange: "Laranja",
  mango: "Manga",
  pineapple: "Abacaxi",
};

//função pra colocar o preço final

function displayCart() {
  var cart = getCart();
  var cartItems = document.getElementById("cartItems");
  var totalValue = 0;

  cartItems.innerHTML = "";

  for (var item in cart) {
    if (cart.hasOwnProperty(item)) {
      var quantity = cart[item];
      var price = getPrice(item); // Função para obter o preço da fruta
      var totalItemValue = quantity * price;
      totalValue += totalItemValue;

      var itemName = traducoesFrutas[item] || item; // Traduz o nome da fruta

      var itemElement = document.createElement("div");
      itemElement.innerHTML =
        "<h4>" +
        itemName +
        ": " +
        "</h4>" +
        "<p>" +
        quantity +
        " x R$" +
        price.toFixed(2) +
        " = R$" +
        totalItemValue.toFixed(2) +
        "</p>" +
        "<br />";
      cartItems.appendChild(itemElement);
    }
  }

  // Exibir o valor total
  var totalElement = document.createElement("div");
  totalElement.innerHTML =
    "<br /><hr><br><h3>Total: R$" + totalValue.toFixed(2) + "</h3>";
  cartItems.appendChild(totalElement);
}
// função para limpar carrinho após a compra
function clearCart() {
  localStorage.removeItem("cart");
  window.location.href = "index.html"; // Redirect to homepage after checkout
}

// função pra iniicar a página checkout
function initCheckout() {
  displayCart();
}

window.onload = initCheckout;

//função para limpar carrinho
function limparCarrinho() {
  localStorage.removeItem("cart");
  window.location.href = "checkoutGeral.html";
}
