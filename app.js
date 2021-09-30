// Step 1 - selecting all the elements
var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

// Ex-06
submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    if(initialPrice.value == "" || stocksQuantity.value == "" || currentPrice.value == ""){
        showOutput("Please fill out all Fields");
    } else{
        var ip = Number(initialPrice.value);
        var qty = Number(stocksQuantity.value);
        var curr = Number(currentPrice.value);        

        calculateProfitAndLoss(ip, qty, curr);
    }
}

// Ex-05
function calculateProfitAndLoss(initial, quantity, current){
    if (initial > current) {
        // loss logic here
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/initial) * 100;

        outputBox.style.color = 'red';
        showOutput(`Hey the loss is ${limitDigit(loss)} and the percent is ${limitDigit(lossPercentage)}%`);
    } else if (current > initial) {
        // Profit logic here
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/initial) * 100;

        outputBox.style.color = 'green';
        showOutput(`Hey the profit is ${limitDigit(profit)} and the percent is ${limitDigit(profitPercentage)}%`);
    } else {
        // the rest of logic
        outputBox.style.color = '#A5B4FC';
        showOutput(`No pain no gain and no gain no pain`);
    }
}

function showOutput(message){
    // switch (status) {
    //     case "PROFIT":
    //         outputBox.innerHTML = message;
    //         break;
    //     case "LOSS":
    //         outputBox.innerHTML = message;
    //         break;
    //     default:
    //         break;
    // }
    outputBox.innerHTML = message;
}

function limitDigit(x) {
    return Number(x).toFixed(2);
}

// calculateProfitAndLoss(100, 10, 10);
// calculateProfitAndLoss(10, 10, 100);
// calculateProfitAndLoss(10, 10, 10);
