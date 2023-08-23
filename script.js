document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const shoppingList = document.getElementById("shopping-list");
  const totalPriceElement = document.querySelector(".total-price span");
  const discountElement = document.querySelector(".discount span");
  const totalElement = document.querySelector(".total span");

  let totalPrice = 0;
  let discount = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const card = button.closest(".card");
      const title = card.querySelector(".card-title").textContent;
      const price = parseFloat(
        card.querySelector(".text-slate-400").textContent
      );
      const listItem = document.createElement("li");
      listItem.textContent = title;
      shoppingList.appendChild(listItem);
      totalPrice += price;
      updatePrices();
    });
  });

  function updatePrices() {
    totalPriceElement.textContent = `${totalPrice.toFixed(2)} Tk`;
    discountElement.textContent = `${discount.toFixed(2)} Tk`;
    totalElement.textContent = `${(totalPrice - discount).toFixed(2)} Tk`;
  }

  // Handle coupon apply button
  const applyCouponButton = document.querySelector(".btn-secondary");
  applyCouponButton.addEventListener("click", function () {
    // You can implement coupon logic here, updating the discount value
    // For now, let's just subtract a fixed value of 10 as a demonstration
    discount = 10;
    updatePrices();
  });

  // Handle make purchase button
  const makePurchaseButton = document.querySelector(".btn-active");
  makePurchaseButton.addEventListener("click", function () {
    alert("Purchase successful!");
  });
});
