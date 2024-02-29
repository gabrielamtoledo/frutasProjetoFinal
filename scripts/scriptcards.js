const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const quantitySpan = document.getElementById("quantity");

let quantity = 0;

function updateQuantity() {
  quantitySpan.textContent = quantity;
}

decreaseBtn.addEventListener("click", function () {
  if (quantity > 0) {
    quantity--;
    updateQuantity();
  }
});

increaseBtn.addEventListener("click", function () {
  quantity++;
  updateQuantity();
});
