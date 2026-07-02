        // Data array
    const menuItems = [
        { name: "Pilau", price: "KSh 250", desc: "Freshly prepared spiced rice.", category: "food" },
        { name: "Chicken Stew", price: "KSh 400", desc: "Tender chicken cooked with rich spices.", category: "food" },
        { name: "Fish", price: "KSh 350", desc: "Deliciously fried fish.", category: "food" },
        { name: "Chapati", price: "KSh 50", desc: "Soft and freshly made chapati.", category: "food" },

        { name: "Spinach", price: "KSh 50", desc: "Fresh farm-picked spinach.", category: "vegetable" },
        { name: "Sukuma Wiki", price: "KSh 40", desc: "Healthy and freshly harvested.", category: "vegetable" },
        { name: "Cabbage", price: "KSh 60", desc: "Crisp and fresh cabbage.", category: "vegetable" },
        { name: "Tomatoes", price: "KSh 30", desc: "Fresh tomatoes for your meals.", category: "vegetable" }
    ];

    // DOM
    const foodContainer = document.querySelector('.food-container');
    const vegetableGrid = document.querySelector('.vegetable-grid');

    if (foodContainer) foodContainer.innerHTML = '';
    if (vegetableGrid) vegetableGrid.innerHTML = '';
    
    //Loop
    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.className = item.category === 'food' ? 'food-card' : 'vegetable-card';
        card.innerHTML = `
            <h4>${item.name}</h4>
            <p>${item.desc}</p>
            <span><strong>Price:</strong> ${item.price}</span>
        `;
        
        if (item.category === 'food' && foodContainer) {
            foodContainer.appendChild(card);
        } else if (item.category === 'vegetable' && vegetableGrid) {
            vegetableGrid.appendChild(card);
        }
    });


//DOM Elements
const customInput = document.getElementById('custom-item-input');
const addCustomBtn = document.getElementById('add-custom-btn');
const requestsList = document.getElementById('custom-requests-list');

//Event Listener for Adding Items
addCustomBtn.addEventListener('click', () => {
    const itemText = customInput.value.trim();

    // Prevent adding blank entries
    if (itemText === "") {
        alert("Please type a meal or custom request item name!");
        return;
    }

    // Create parent list element (<li>)
    const li = document.createElement('li');
    li.textContent = `${itemText} `;
    li.classList.add('wishlist-item'); // Links directly to your CSS file!

    // Create its own Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.type = "button"; 
    removeBtn.classList.add('btn-remove-request'); // Links directly to your CSS file!

    // Setup the remove button event listener
    removeBtn.addEventListener('click', () => {
        li.remove(); // Deletes the item from the page
    });

    //  Assemble components together and display
    li.appendChild(removeBtn);
    requestsList.appendChild(li);

    // Reset the input field
    customInput.value = "";
});