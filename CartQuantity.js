let quantity;
function showQuantity() {
    console.log(`Cart Quantity: ${quantity}`);
}

function addToCart() {
    quantity ++;
    showQuantity();
}
function addTwoItems (){
    quantity += 2;
    showQuantity();
}
function addThreeItems (){
    quantity += 3;
    showQuantity();
}
function resetCart() {
    quantity = 0;
    console.clear();
    console.log("Cart is empty");
    showQuantity();
}
function redirectToHomePage() {
    alert("You are about to leave this window");
    window.location.href = "homepage.html";
}