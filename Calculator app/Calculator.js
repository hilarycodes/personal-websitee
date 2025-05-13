const input = document.getElementById("display");

//appends the character within a button onto the display
function appendNumber(digit){
    if(digit){
        console.log(parseInt(digit));
        input.value += digit;
    }
}

function clearDisplay(){
    input.value = "";
}

function calculate(){
    try{
        input.value = eval(input.value);
    }
    catch(error){
        clearDisplay.value = "Syntax Error";
    }
}

function deleteCharacter(){
    input.value = input.value.slice(0, -1);
}