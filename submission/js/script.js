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

addMeal.addEventListener("click", function () {

    if (mealInput.value === "") {
        alert("Please enter a meal.");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    li.textContent = mealInput.value + " ";

    // Create Remove button
    const removeButton = document.createElement("button");

    removeButton.textContent = "Remove";

    // Remove the item when button is clicked
    removeButton.addEventListener("click", function () {

        li.remove();

    });

    // Add Remove button to list item
    li.appendChild(removeButton);

    // Add list item to the page
    mealList.appendChild(li);

    // Clear the input
    mealInput.value = "";

});