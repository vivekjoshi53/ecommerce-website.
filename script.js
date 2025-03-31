// Array to hold cart items
let cart = [];

// Function to add products to the cart
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };
    cart.push(product);
    alert(`${productName} added to cart!`);
    console.log(cart);
}

// Store cart items in localStorage
window.addEventListener("beforeunload", function() {
    localStorage.setItem("cart", JSON.stringify(cart));
});
