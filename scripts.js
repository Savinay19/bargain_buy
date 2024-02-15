let cartItems = [];
let cartTotal = 0;

function addToCart(itemName, price) {
    cartItems.push({ name: itemName, price: price });
    cartTotal += price;
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    cartItemsElement.innerHTML = "";
    cartItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(listItem);
    });

    cartTotalElement.textContent = cartTotal.toFixed(2);
}

function checkout() {

    window.location.href = 'checkout.html';
    cartItems = [];
    cartTotal = 0;
    updateCart();
}
function orderplaced(){
    window.location.href = 'tq.html'; 
}
