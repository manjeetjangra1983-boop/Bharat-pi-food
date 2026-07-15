const Pi = window.Pi;
Pi.init({ version: "2.0", sandbox: true });

let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    
    const cartList = document.getElementById("cart");
    const li = document.createElement("li");
    li.textContent = `${item} - ${price} Pi`;
    cartList.appendChild(li);
    
    document.getElementById("total").textContent = `Total Pi: ${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Please add food to your cart first!");
        return;
    }

    Pi.createPayment({
        amount: total,
        memo: "Order from Bharat Pi Food",
        metadata: { orderId: "12345" }
    }, {
        onReadyForServerApproval: function(paymentId) {
            console.log("Approval ready:", paymentId);
        },
        onReadyForServerCompletion: function(paymentId, txid) {
            alert("Payment successful! TXID: " + txid);
            location.reload();
        },
        onCancel: function(paymentId) {
            alert("Payment cancelled.");
        },
        onError: function(error, paymentId) {
            alert("Error: " + error.message);
        }
    });
}
