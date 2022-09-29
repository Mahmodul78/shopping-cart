/**----------- Item-1 & Item-2 are both in using same function -----------*/
function handelItems (items,isIncrease){
    const itemsCount = getInputValue(items);

    let itemsNewCount = itemsCount;
    if (isIncrease == true) {
        itemsNewCount = itemsCount + 1;
    }
    if (isIncrease == false && itemsCount > 0) {
        itemsNewCount = itemsCount - 1;
    }
    document.getElementById(items + 'Input').value = itemsNewCount;

    let itemsTotal = 0;
    if (items == 'phone') {
        itemsTotal = itemsNewCount * 1219;
    }
    if (items == 'case') {
        itemsTotal = itemsNewCount * 59;
    }
    document.getElementById(items + 'Total').innerText = '$' + itemsTotal;
    calculationTotal();
}

function calculationTotal(){
    const phoneCount = getInputValue('phone');   
    const caseCount = getInputValue('case');
    
    let subTotalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('subTotal').innerText = '$' + subTotalPrice;

    let taxAmount = Math.round(subTotalPrice * 0.1);
    document.getElementById('tax').innerText = '$' + taxAmount;

    let totalAmount = subTotalPrice + taxAmount;
    document.getElementById('total').innerText = '$' + totalAmount;
}

function getInputValue(id) {
    let itemInput = document.getElementById(id + 'Input');
    let itemCount = parseInt(itemInput.value);
    return itemCount;
}