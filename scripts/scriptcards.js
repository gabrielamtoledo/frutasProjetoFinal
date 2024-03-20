function addToCart(item) {
  // Retrieve the quantity of the item
  var quantityElement = document.getElementById(item + "-quantity");
  if (quantityElement) {
    var quantity = parseInt(quantityElement.innerText);
    if (!isNaN(quantity) && quantity > 0) {
      // Verifica se a quantidade é válida e maior que zero
      // Add the item and quantity to the cart (you can use localStorage or sessionStorage)
      var cart = JSON.parse(localStorage.getItem("cart")) || {};
      cart[item] = (cart[item] || 0) + quantity; // Adiciona a quantidade selecionada
      localStorage.setItem("cart", JSON.stringify(cart));
      // displayCart();
      console.log(cart);
    }

    // Provide feedback to the user
    alert("Item adicionado ao carrinho!");
  } else {
    console.error("Quantidade inválida para o item " + item);
  }

  function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || {};
  }

  function displayCart() {
    var cart = getCart();
    var cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    for (var item in cart) {
      if (cart.hasOwnProperty(item)) {
        var quantity = cart[item];
        var itemElement = document.createElement("div");
        itemElement.innerHTML = "<p>" + item + ": " + quantity + "</p>";
        cartItems.appendChild(itemElement);
      }
    }
  }
}

const decreaseBtns = document.querySelectorAll(".decreaseBtn");
const increaseBtns = document.querySelectorAll(".increaseBtn");
const quantitySpans = document.querySelectorAll(".quantityValue");

let quantities = Array.from({ length: decreaseBtns.length }).fill(0);

function updateQuantity(index) {
  quantitySpans[index].textContent = quantities[index];
}

for (let i = 0; i < decreaseBtns.length; i++) {
  decreaseBtns[i].addEventListener("click", function (event) {
    if (quantities[i] > 0) {
      quantities[i]--;
      updateQuantity(i);
      buttonColor(quantities[i], this.closest(".card"));
    }
  });

  increaseBtns[i].addEventListener("click", function (event) {
    quantities[i]++;
    updateQuantity(i);
    buttonColor(quantities[i], this.closest(".card"));
  });
}

function buttonColor(quantity, parentCard) {
  var button = parentCard.querySelector(".add-to-cart");
  if (quantity > 0) {
    button.style.backgroundColor = "#190b00"; // Change button color when quantity is greater than 0
    console.log("Gray-button class added");
  } else {
    button.style.backgroundColor = "gray"; // Change button color when quantity is 0
    console.log("Gray-button class removed");
  }
}

//pop-up das informações da fruta

const closePopupBtn = document.getElementById("closePopupBtn");
const popup = document.getElementById("popup");

document.querySelectorAll(".openPopupBtn").forEach((button) => {
  button.addEventListener("click", function () {
    popup.style.display = "block";
  });
});

closePopupBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

// Close popup when clicking outside of it
window.addEventListener("click", function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});

const list = document.getElementById("list");

async function getFruits() {
  const url = "https://fruits-coderhouse.up.railway.app/fruits";
  const response = await fetch(url);
  const fruits = await response.json();
  return fruits;
}

const card = document.getElementById("card");

async function getFruit(name) {
  const url = `https://fruits-coderhouse.up.railway.app/fruits/${name}`;
  const response = await fetch(url);
  const fruit = await response.json();
  return fruit;
}

function renderFruit(fruit) {
  card.innerHTML = `
  <!-- <h3>Dados Nutricionais da fruta: ${fruit.name}</h3> -->
  <h3>Dados Nutricionais da fruta:</h3>
  <br>
    <ul id="nutritions" class="no-bullets">
      <li>Calorias: ${fruit.nutritions.calories}</li>
      <li>Carboidratos: ${fruit.nutritions.carbohydrates}</li>
      <li>Proteínas: ${fruit.nutritions.protein}</li>
      <li>Gorduras: ${fruit.nutritions.fat}</li>
    </ul>
  `;
}

async function handleGetFruit(fruitName) {
  try {
    const fruit = await getFruit(fruitName);
    renderFruit(fruit);
  } catch (error) {
    console.error("Error fetching fruit:", error);
  }
}

document.querySelectorAll(".getFruitButton").forEach((button) => {
  button.addEventListener("click", async (event) => {
    const fruitName = event.target.getAttribute("data-fruit");
    try {
      const fruit = await getFruit(fruitName);
      renderFruit(fruit);
    } catch (error) {
      console.error("Error fetching fruit:", error);
    }
  });
});
