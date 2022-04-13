let carts = document.querySelectorAll('.add-cart');

let products = [
    /*Bread & Bun*/
    {
        name: 'Kaya Butter Toast',
        tag: 'Kaya_Butter_Toast',
        price: 6.90,
        inCart: 0
    },
    {
        name: 'Avocado Toast',
        tag: 'Avocado_Toast',
        price: 14.90,
        inCart: 0
    },
    {
        name: 'Scrambled Egg Toast',
        tag: 'Scrambled_Egg_Toast',
        price: 7.90,
        inCart: 0
    },
    {
        name: 'Sandwich',
        tag: 'sandwich',
        price: 13.90,
        inCart: 0
    },
    {
        name: 'Veggie Sandwich',
        tag: 'veggie_sandwich',
        price: 14.90,
        inCart: 0
    },
    {
        name: 'Egg Mayo Sandwich',
        tag: 'Egg_Mayo_Sandwich',
        price: 8.90,
        inCart: 0
    },
    {
        name: 'Peanut Butter Banana Roll',
        tag: 'Peanut_Butter_Banana_Roll',
        price: 10.90,
        inCart: 0
    },
    {
        name: 'Garlic Bread',
        tag: 'Garlic_Bread',
        price: 11.90,
        inCart: 0
    },
    {
        name: 'Hong Kong Toast',
        tag: 'Hong_Kong_Toast',
        price: 12.90,
        inCart: 0
    },

    /*Noodles*/
    {
        name: 'Curry Laksa Special',
        tag: 'Curry_Laksa_Special',
        price: 13.90,
        inCart: 0
    },
    {
        name: 'Dry Curry Laksa',
        tag: 'Dry_Curry_Laksa',
        price: 13.90,
        inCart: 0
    },
    {
        name: 'Char Kway Teow',
        tag: 'Char_Kway_Teow',
        price: 12.90,
        inCart: 0
    },
    {
        name: 'Dry Char Siew Wanton Noodles',
        tag: 'Dry_Char_Siew_Wanton_Noodles',
        price: 12.90,
        inCart: 0
    },
    {
        name: 'Prawn Dumplings Wanton Noodles',
        tag: 'Prawn_Dumplings_Wanton_Noodles',
        price: 12.90,
        inCart: 0
    },
    {
        name: 'Spaghetti Chicken Chop',
        tag: 'Spaghetti_Chicken_Chop',
        price: 15.90,
        inCart: 0
    },
    {
        name: 'Prawn Spaghetti Aglio Olio',
        tag: 'Prawn_Spaghetti_Aglio_Olio',
        price: 16.90,
        inCart: 0
    },
    {
        name: 'Garlic Spaghetti Aglio Olio',
        tag: 'Garlic_Spaghetti_Aglio_Olio',
        price: 12.90,
        inCart: 0
    },
    {
        name: 'Lala Spaghetti Aglio Olio',
        tag: 'Lala_Spaghetti_Aglio_Olio',
        price: 16.90,
        inCart: 0
    },
    {
        name: 'Salmon Spaghetti Aglio Olio',
        tag: 'Salmon_Spaghetti_Aglio_Olio',
        price: 20.90,
        inCart: 0
    },
    {
        name: 'Seafood Spaghetti Aglio Olio',
        tag: 'Seafood_Spaghetti_Aglio_Olio',
        price: 18.90,
        inCart: 0
    },
    {
        name: 'Mee Goreng Mamak',
        tag: 'Mee_Goreng_Mamak',
        price: 10.90,
        inCart: 0
    },
    {
        name: 'Veggie Mee Goreng Mamak',
        tag: 'Veggie_Mee_Goreng_Mamak',
        price: 10.90,
        inCart: 0
    },
    {
        name: 'Fried Bee Hoon',
        tag: 'Fried_Bee_Hoon',
        price: 9.90,
        inCart: 0
    },

    /*Rice*/
    {
        name: 'Chicken Rice',
        tag: 'Chicken_Rice',
        price: 10.90,
        inCart: 0
    },
    {
        name: 'Nasi Lemak with Fried Chicken',
        tag: 'Nasi_Lemak_with_Fried_Chicken',
        price: 13.90,
        inCart: 0
    },
    {
        name: 'Nasi Lemak with Curry Chicken',
        tag: 'Nasi_Lemak_with_Curry_Chicken',
        price: 13.90,
        inCart: 0
    },
    {
        name: 'Nasi Lemak with Spicy Sotong',
        tag: 'Nasi_Lemak_with_Spicy_Sotong',
        price: 15.90,
        inCart: 0
    },
    {
        name: 'Fried Rice with Enoki Mushroom and Egg',
        tag: 'Fried_Rice_with_Enoki_Mushroom_and_Egg',
        price: 9.90,
        inCart: 0
    },
    {
        name: 'Butter Chicken Rice',
        tag: 'Butter_Chicken_Rice',
        price: 11.90,
        inCart: 0
    },
    {
        name: 'Taiwan Braised Chicken Rice',
        tag: 'Taiwan_Braised_Chicken_Rice',
        price: 13.90,
        inCart: 0
    },
    {
        name: 'Prawn Fried Rice',
        tag: 'Prawn_Fried_Rice',
        price: 14.90,
        inCart: 0
    },
    {
        name: 'Sweet and Sour Chicken Rice',
        tag: 'Sweet_and_Sour_Chicken_Rice',
        price: 12.90,
        inCart: 0
    },

    /*Western Food*/
    {
        name: 'Black Pepper Chicken Chop',
        tag: 'Black_Pepper_Chicken_Chop',
        price: 17.90,
        inCart: 0
    },
    {
        name: 'Fish and Chips',
        tag: 'Fish_and_Chips',
        price: 17.90,
        inCart: 0
    },
    {
        name: 'Roasted Salmon with Fries',
        tag: 'Roasted Salmon with Fries',
        price: 22.90,
        inCart: 0
    },
    {
        name: 'Chicken Burger and Fries',
        tag: 'Chicken_Burger_and_Fries',
        price: 16.90,
        inCart: 0
    },
    {
        name: 'Fish Burger and Fries',
        tag: 'Fish_Burger_and_Fries',
        price: 16.90,
        inCart: 0
    },

    /*Kids Meal*/
    {
        name: 'Vegetarian and Meat Free Kids Meal',
        tag: 'Vegetarian_and_Meat_Free_Kids_Meal',
        price: 12.90,
        inCart: 0
    },
    {
        name: 'Easter Bunny Pancakes Kids Meal',
        tag: 'Easter_Bunny_Pancakes_Kids_Meal',
        price: 14.90,
        inCart: 0
    },
    {
        name: 'Becca Pancakes Kids Meal',
        tag: 'Beccas_Pancakes_Kids_Meal',
        price: 12.90,
        inCart: 0
    },
    {
        name: 'Spagehetti Kids Meal',
        tag: 'Spagehetti_Kids_Meal',
        price: 13.90,
        inCart: 0
    },
    {
        name: 'Noodles Kids Meal',
        tag: 'Noodles_Kids_Meal',
        price: 13.90,
        inCart: 0
    },
    {
        name: 'Rice Kids Meal',
        tag: 'Rice_Kids_Meal',
        price: 14.90,
        inCart: 0
    },

    /*Lite Bites*/
    {
        name: 'Chicken Satay',
        tag: 'Chicken_Satay',
        price: 17.90,
        inCart: 0
    },
    {
        name: 'Fried Dumplings',
        tag: 'Fried_Dumplings',
        price: 13.90,
        inCart: 0
    },
    {
        name: 'Xiao Long Bao',
        tag: 'Xiao Long Bao',
        price: 19.90,
        inCart: 0
    },
    {
        name: 'Crispy French Fries',
        tag: 'Crispy_French_Fries',
        price: 9.90,
        inCart: 0
    },
    {
        name: 'Cheese French Fries',
        tag: 'Cheese_French_Fries',
        price: 13.90,
        inCart: 0
    },
    {
        name: 'Seaweed French Fries',
        tag: 'Seaweed_French_Fries',
        price: 14.90,
        inCart: 0
    },
    {
        name: 'Cheezy Wedges',
        tag: 'Cheezy_Wedges',
        price: 13.90,
        inCart: 0
    },
    {
        name: 'Chicken Salad',
        tag: 'Chicken_Salad',
        price: 13.90,
        inCart: 0
    },
    {
        name: 'Vegetable Salad',
        tag: 'Vegetable_Salad',
        price: 14.90,
        inCart: 0
    },
    {
        name: 'Dumpling Soup',
        tag: 'Dumpling_Soup',
        price: 13.90,
        inCart: 0
    },
    {
        name: 'Shaomai Steamed Dumpling',
        tag: 'Shaomai_Steamed_Dumpling',
        price: 10.90,
        inCart: 0
    },
    {
        name: 'Otak-Otak',
        tag: 'Otak-Otak',
        price: 10.90,
        inCart: 0
    },
    {
        name: 'Fried Chicken',
        tag: 'Fried_Chicken',
        price: 15.90,
        inCart: 0
    },

    /*Desserts*/
    {
        name: 'Caramel Pudding',
        tag: 'Caramel Pudding',
        price: 10.90,
        inCart: 0
    },
    {
        name: 'Chocolate Lava Cake',
        tag: 'Chocolate_Lava_Cake',
        price: 12.90,
        inCart: 0
    },
    {
        name: 'Mango Cake',
        tag: 'Mango_Cake',
        price: 10.90,
        inCart: 0
    },
    {
        name: 'Oreo Cake',
        tag: 'Oreo_Cake',
        price: 10.90,
        inCart: 0
    },
    {
        name: 'Jelly Fruit Cake',
        tag: 'Jelly_Fruit_Cake',
        price: 10.90,
        inCart: 0
    },
    {
        name: 'Honeydew Melon Sago',
        tag: 'Honeydew_Melon_Sago',
        price: 10.90,
        inCart: 0
    },
    {
        name: 'Mango Sago',
        tag: 'Mango_Sago',
        price: 10.90,
        inCart: 0
    },
    {
        name: 'Portuguese Egg Tart',
        tag: 'Portuguese_Egg_Tart',
        price: 16.90,
        inCart: 0
    },
    {
        name: 'Longan Pudding',
        tag: 'Longan_Pudding',
        price: 10.90,
        inCart: 0
    },

    /*Beverages*/
    {
        name: 'Brown Sugar Milk Tea',
        tag: 'Brown_Sugar_Milk_Tea',
        price: 11.90,
        inCart: 0
    },
    {
        name: 'Passion Fruit Juice',
        tag: 'passion_fruit_juice',
        price: 9.90,
        inCart: 0
    },
    {
        name: 'Hong Kong Milk Tea',
        tag: 'hong_kong_milk_tea',
        price: 7.90,
        inCart: 0
    },
    {
        name: 'Carrot Milk',
        tag: 'carrot_milk',
        price: 7.90,
        inCart: 0
    },
    {
        name: 'Teh Ice',
        tag: 'teh_ice',
        price: 5.90,
        inCart: 0
    },
    {
        name: 'Coconut Milk Shake',
        tag: 'coconut_milk_shake',
        price: 10.90,
        inCart: 0
    },
    {
        name: 'Coconut Drink',
        tag: 'coconut_drink',
        price: 8.90,
        inCart: 0
    },
    {
        name: 'Orange Juice',
        tag: 'orange_juice',
        price: 7.90,
        inCart: 0
    },
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
        if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
        console.log("action running");
    } else if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1; 
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]:product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost( product, action ) {
    let cartCost = localStorage.getItem('totalCost');
        if( action) {
        cartCost = parseFloat(cartCost);

        localStorage.setItem("totalCost", cartCost - product.price);
    } else if(cartCost != null) {
        
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem("totalCost");
    cartCost = parseFloat(cartCost);
    let productContainer = document.querySelector('.products');
    
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map( (item, index) => {
        /*Object.values(cartItems).map(item => {*/
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <span>${item.name}</span>
            </div>
            <div class="price">RM${item.price}</div>
            <div class="quantity">
                <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
            </div>

            
            <div class="total">
                RM ${item.inCart * item.price}
            </div>
            `;
        });

        cartCost = Math.round(cartCost * 100) / 100

        productContainer.innerHTML +=  `
            <div class="cartTotalContainer">
                <h4 class="cartTotalTitle">
                    Total
                </h4>
                <h4 class="cartTotal">
                    RM ${cartCost}
                </h4>
        `
        deleteButtons();
        manageQuantity();

    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            if( cartItems[currentProduct].inCart > 1 ) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        })
    }
}

onLoadCartNumbers();
displayCart();
