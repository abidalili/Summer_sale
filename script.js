document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".card");
  const shoppingList = document.getElementById("shopping-list");
  const totalPriceElement = document.querySelector(".grossTotal");
  const discountElement = document.querySelector(".discount");
  const totalElement = document.querySelector("#netTotal");
  const discountButton = document.querySelector(".apply");
  const discountInput = document.querySelector(".discountInput");
  const applyCouponButton = document.querySelector(".apply");

  let totalPrice = 0;
  let total = 0;
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
      isDiscount();
      calculateDiscount();
    });
  });

  function updatePrices() {
    totalPriceElement.textContent = `${totalPrice.toFixed(2)} Tk`;
    discountElement.textContent = `${discount.toFixed(2)} Tk`;
    totalElement.innerHTML = `${total ? total : totalPrice} Tk`;
  }

  function isDiscount() {
    if (totalPrice >= 200) {
      applyCouponButton.removeAttribute("disabled");
      applyCouponButton.classList.remove("disabled");
    }
  }

  function calculateDiscount() {
    if (totalPrice < 200) return;

    const couponCode = discountInput.value;

    if (couponCode === "SELL200") {
      total = totalPrice - (totalPrice / 100) * 20;
      discount = (totalPrice / 100) * 20;
      updatePrices();
      discountInput.value = "";
    }
  }

  applyCouponButton.addEventListener("click", function () {
    calculateDiscount();
  });

  // Handle make purchase button
  const makePurchaseButton = document.querySelector(".btn-active");
  makePurchaseButton.addEventListener("click", function () {
    alert("Purchase successful!");
  });
});
