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
function calculateShipping(){
    let input = document.querySelector(".order-amount-textbox");
    let Cost = parseFloat(input.value);
    if(Cost < 40){
        Cost += 10;
        document.querySelector(".final-shipping-cost").innerHTML = `Cost: $${Cost}`;
    }
    else if(isNaN(Cost)){
        alert("Please enter a valid number");
        document.querySelector(".final-shipping-cost").innerHTML = `Cost: $0`;
    }
    else{
        Cost = Cost;
        document.querySelector(".final-shipping-cost").innerHTML = `Cost: $${Cost}`;
    }
}
// document.addEventListener('keydown', function(event) {
//     calculateOnKeydown(event);
// });

function calculateOnKeydown(event){
    if(event.key === "Enter"){
        calculateShipping();
    } 
}

function displayMessage(){
    const inputElementText = document.querySelector('.message-box').value;
    document.querySelector('.message').innerHTML = `Hello ${inputElementText}, how can I help you today?`; 
}

function displayText(){
    document.querySelector('.text').innerHTML = document.querySelector('.text-box').value;
}