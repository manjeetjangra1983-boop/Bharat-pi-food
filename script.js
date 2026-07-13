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
  Pi.createPayment({
    amount: total,
    memo: "Order from Bharat Pi Food",
    metadata: { orderId: "12345" },
  }, {
    onReadyForServerApproval: function(paymentId) {
      // Server Approval
    },
    onReadyForServerCompletion: function(paymentId, txid) {
      cart = [];
      total = 0;
      document.getElementById("cart").innerHTML = "";
      document.getElementById("total").textContent = "Total Pi: 0.00";
      alert("Payment successful!");
    },
    onCancel: function(paymentId) {
      alert("Payment canceled");
    },
    onError: function(error, payment) {
      alert("Payment error: " + error.message);
    }
  });

    
}
