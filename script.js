let order_btn = document.getElementById("order");
let order_place = document.querySelector(".container2");

order_btn.addEventListener("click", () => {
  let selectedFood = [];
  order_place.innerHTML = ``;
  let foodItems = document.getElementsByName("Food");
  let isSelected = false; // Flag to check if any item is selected
    let orderId = Math.floor(Math.random() * 1000) + 100;
  // Collect selected food items and generate order for each
  foodItems.forEach((item) => {
    if (item.checked) {
      isSelected = true;
      selectedFood.push(item.value);
      placeOrder(orderId, item.value);
    }
  });

  if (!isSelected) {
    alert("Please select any food items for order");
    return;
  }

  console.log(selectedFood);
  reset();
});

// Generate an order for a food item with a unique order ID
function placeOrder(orderId, food_item) {
  let image;
  if (food_item == "Burger") {
    image =
      "https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg";
  } else if (food_item == "Fries") {
    image =
      "https://latourangelle.com/cdn/shop/articles/hikynvl8pjkjqhvpnok6_1200x1200.jpg";
  } else if (food_item == "Drink") {
    image =
      "https://content.health.harvard.edu/wp-content/uploads/2023/07/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg";
  }
  createOrderFormat(food_item, image, orderId);
}

// Create card format and append it to the order container
function createOrderFormat(food_item, image, orderid) {
  let order_cards = document.createElement("div");
  order_cards.innerHTML = `
        <div class="order-card">
            <img src=${image} alt='food Image'>
            <span>OrderId: ${orderid}</span>
            <span>Food: ${food_item}</span>
        </div>`;
  order_place.appendChild(order_cards);
}

// Reset the checkboxes after placing the order
function reset() {
  let foodItems = document.getElementsByName("Food");
  foodItems.forEach((item) => {
    item.checked = false;
  });
}
