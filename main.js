/** ------------------------------------- For first item -------------------------------------  */

// For Plus Button
let i = document.getElementById("inputBtn1").value;
let firstAmount = document.getElementById("firstAmount").innerText;

let j = document.getElementById("inputBtn2").value;
let secondAmount = document.getElementById("secondAmount").innerText;

let subTotal = document.getElementById("subTotal").innerText;
let total = document.getElementById("total").innerText;

let plusBtn1 = document.getElementById("plusBtn1");
plusBtn1.addEventListener('click', function () {
    let incrementFirst = ++i;
    document.getElementById("inputBtn1").value = incrementFirst;

    let convertAmount1 = parseFloat(firstAmount);
    let newAmount1 = convertAmount1 * incrementFirst;
    let num1 = document.getElementById("firstAmount").innerText = newAmount1;

    let updateSecondAmount = document.getElementById("secondAmount").innerText;
    let convertSecondAmount = parseFloat(updateSecondAmount);

    let result = num1 + convertSecondAmount;

    document.getElementById("subTotal").innerText = result;
    document.getElementById("total").innerText = result;
})

// For Minus Button
let minusBtn1 = document.getElementById("minusBtn1");
minusBtn1.addEventListener('click', function () {

    if (document.getElementById("inputBtn1").value > 1) {
        let decrementFirst = --i;
        document.getElementById("inputBtn1").value = decrementFirst;

        let convertAmount2 = parseFloat(firstAmount);
        let newAmount2 = convertAmount2 * decrementFirst;
        let num2 = document.getElementById("firstAmount").innerText = newAmount2;

        let updateSecondAmount = document.getElementById("secondAmount").innerText;
        let convertSecondAmount = parseFloat(updateSecondAmount);

        let result = num2 + convertSecondAmount;

        document.getElementById("subTotal").innerText = result;
        document.getElementById("total").innerText = result;
    }

})


/** ------------------------------------- For second item -------------------------------------  */

// For Plus Button
let plusBtn2 = document.getElementById("plusBtn2");
plusBtn2.addEventListener('click', function () {
    let incrementSecond = ++j;
    document.getElementById("inputBtn2").value = incrementSecond;

    let convertAmount3 = parseFloat(secondAmount);
    let newAmount3 = convertAmount3 * incrementSecond;
    let num3 = document.getElementById("secondAmount").innerText = newAmount3;

    let updatefirstAmount = document.getElementById("firstAmount").innerText;
    let convertfirstAmount = parseFloat(updatefirstAmount);

    let result = num3 + convertfirstAmount;

    document.getElementById("subTotal").innerText = result;
    document.getElementById("total").innerText = result;
})

// For Minus Button
let minusBtn2 = document.getElementById("minusBtn2");
minusBtn2.addEventListener('click', function () {

    if (document.getElementById("inputBtn2").value > 1) {
        let decrementSecond = --j;
        document.getElementById("inputBtn2").value = decrementSecond;

        let convertAmount4 = parseFloat(secondAmount);
        let newAmount4 = convertAmount4 * decrementSecond;
        let num4 = document.getElementById("secondAmount").innerText = newAmount4;

        let updatefirstAmount = document.getElementById("firstAmount").innerText;
        let convertfirstAmount = parseFloat(updatefirstAmount);

        let result = num4 + convertfirstAmount;

        document.getElementById("subTotal").innerText = result;
        document.getElementById("total").innerText = result;
    }
})