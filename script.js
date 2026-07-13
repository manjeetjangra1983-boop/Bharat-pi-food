let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;

    const cartList = document.getElementById("cart");
    const li = document.createElement("li");
    li.textContent = `${item} - ${price} Pi`;
    cartList.appendChild(li);

    document.getElementById("total").textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert("Please add food to your cart first.");
        return;
    }

    alert("Demo Checkout\nTotal: " + total.toFixed(2) + " Pi");

    // Pi SDK payment बाद में यहाँ जोड़ा जाएगा

    cart = [];
    total = 0;
    document.getElementById("cart").innerHTML = "";
    document.getElementById("total").textContent = "0";
}
