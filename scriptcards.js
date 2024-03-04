const decreaseBtns = document.querySelectorAll(".decreaseBtn");
const increaseBtns = document.querySelectorAll(".increaseBtn");
const quantitySpans = document.querySelectorAll(".quantityValue");

let quantities = Array.from({ length: decreaseBtns.length }).fill(0);

function updateQuantity(index) {
  quantitySpans[index].textContent = quantities[index];
}

for (let i = 0; i < decreaseBtns.length; i++) {
  decreaseBtns[i].addEventListener("click", function () {
    if (quantities[i] > 0) {
      quantities[i]--;
      updateQuantity(i);
    }
  });

  increaseBtns[i].addEventListener("click", function () {
    quantities[i]++;
    updateQuantity(i);
  });
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

// document.querySelectorAll(".getFruitButton").forEach((button) => {
//   button.addEventListener("click", async () => {
//     try {
//       const fruitName = "apple"; // You can change this to the desired fruit name
//       const fruit = await getFruit(fruitName);
//       renderFruit(fruit);
//     } catch (error) {
//       console.error("Error fetching fruit:", error);
//     }
//   });
// });
