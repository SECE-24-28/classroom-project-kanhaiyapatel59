const products = [
    {
        name: "Classic Burger",
        desc: "Fresh veggies, cheese & juicy patty.",
        price: "$7.99",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/7/22/a610af1f-af37-42b8-8fe8-667879077cf8_368adb3d-ee98-4070-b509-991bbc29df5c.jpg"
    },
    {
        name: "Cheese Pizza",
        desc: "Loaded with cheese & Italian herbs.",
        price: "$9.99",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/9/22/f0061ceb-be06-448d-97c0-dbe18d1b7176_b653ba04-9cda-4fd9-bf2d-697a48a1b24b.jpg"
    },
    {
        name: "Chocolate Cake",
        desc: "Rich chocolate cake for dessert lovers.",
        price: "$5.50",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/9/2/465f85fb-dd70-45eb-accf-6b315b1f2ecb_ec235ec4-5528-4237-b4e6-a3093ca3f8f0.jpg"
    },
    {
        name: "Grilled Sandwich",
        desc: "Crispy sandwich with veggies & cheese.",
        price: "$4.99",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/5/27/f5c8c383-395c-4473-b9d2-6eab1ad35e0f_cd7b9415-5327-4d50-ace5-c1f843d4b0c6.jpg"
    },
    {
        name: "Pasta Alfredo",
        desc: "Creamy pasta with garlic and parmesan.",
        price: "$8.50",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/16/efcd48fa-5ff3-4af2-9521-6d0ac29b003e_a1b508d9-cba1-4bbb-8072-cf8984e3f33d.jpg"
    },
    {
        name: "Fried Chicken",
        desc: "Crispy golden fried chicken pieces.",
        price: "$6.99",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/10/581fe303-11f0-4ba8-b87e-759a83b0bd0e_89e41046-114d-4f8c-850e-db08e75599c0.jpeg"
    },
    {
        name: "Veggie Salad",
        desc: "Fresh garden vegetables with dressing.",
        price: "$4.50",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/7/22/af777971-66d8-4a70-a115-57579a796cca_e3ef050b-9929-44fb-bdf4-de88996ce9cc.jpg"
    },
    {
        name: "Ice Cream Sundae",
        desc: "Vanilla ice cream with chocolate syrup.",
        price: "$3.99",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/5/16/0592e357-4cfd-4cf9-8ebb-6f3dfc315232_2ce5083e-6df3-420b-b218-550165302f20.jpg"
    },
];

// Function to display products dynamically
function loadProducts() {
    const container = document.getElementById('products-container');

    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer";
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
                <p class="text-gray-600 mb-2">${product.desc}</p>
                <p class="font-bold mb-4">${product.price}</p>
            </div>
        `;

        // Click event to show modal with description
        productCard.addEventListener('click', () => showModal(product));

        container.appendChild(productCard);
    });
}

// Function to show modal
function showModal(product) {
    // Create modal container
    const modal = document.createElement('div');
    modal.className = "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50";
    modal.innerHTML = `
        <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button id="closeModal" class="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold">&times;</button>
            <img src="${product.img}" class="w-full h-48 object-cover rounded mb-4">
            <h2 class="text-2xl font-bold mb-2">${product.name}</h2>
            <p class="text-gray-700 mb-2">${product.desc}</p>
            <p class="font-bold mb-4">${product.price}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">Add to Cart</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Order</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal
    modal.querySelector('#closeModal').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => { if(e.target === modal) modal.remove(); });
}

// Load products if container exists
if (document.getElementById('products-container')) {
    loadProducts();
}
