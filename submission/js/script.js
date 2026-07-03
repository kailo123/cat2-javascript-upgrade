const foods = [
    {
        name: "Pilau",
        price: "KSh 250",
        description: "Freshly prepared spiced rice."
    },

    {
        name: "Chicken Stew",
        price: "KSh 350",
        description: "Tender chicken cooked with rich spices."
    },

    {
        name: "Fish",
        price: "KSh 100",
        description: "Deliciously fried fish."
    },

    {
        name: "Chapati",
        price: "KSh 50",
        description: "Soft and freshly made chapati."
    }
];
const foodContainer = document.getElementById("foodContainer");

foods.forEach(function(food){

    const card = document.createElement("div");
    card.className = "food-card";

    card.innerHTML = `
        <h4>${food.name}</h4>
        <p>${food.description}</p>
        <p>${food.price}</p>
    `;

    foodContainer.appendChild(card);

});
const mealInput = document.getElementById("mealInput");
const addMeal = document.getElementById("addMeal");
const mealList = document.getElementById("mealList");
function saveMeals() {
    const meals = [];
    const items = mealList.querySelectorAll("li");
    items.forEach(function (item) {
        // item.textContent includes "Remove" from the button, so we strip it
        const mealName = item.textContent.replace("Remove", "").trim();
        meals.push(mealName);
    });
    localStorage.setItem("favouriteMeals", JSON.stringify(meals));
}

function loadMeals() {
    const savedMeals = localStorage.getItem("favouriteMeals");
    if (savedMeals === null) {
        return;
    }
    const meals = JSON.parse(savedMeals);
    meals.forEach(function (mealName) {
        addMealToList(mealName);
    });
}
    // Clear the input
    mealInput.value = "";
function addMealToList(mealName) {
    const li = document.createElement("li");
    li.textContent = mealName + " ";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
        li.remove();
        saveMeals();
    });

    li.appendChild(removeButton);
    mealList.appendChild(li);
}

addMeal.addEventListener("click", function () {
    if (mealInput.value === "") {
        alert("Please enter a meal.");
        return;
    }
    addMealToList(mealInput.value);
    saveMeals();
    mealInput.value = "";
});

loadMeals();
const orderForm = document.querySelector("#order form");
const formFeedback = document.getElementById("formFeedback");

orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = document.getElementById("name").value;
    const phoneValue = document.getElementById("phone").value;

    if (nameValue === "" || phoneValue === "") {
        formFeedback.textContent = "Please fill in your name and phone number.";
        formFeedback.style.color = "red";
        return;
    }

    formFeedback.textContent = "Thank you, " + nameValue + "! Your order has been received.";
    formFeedback.style.color = "green";
    orderForm.reset();
});