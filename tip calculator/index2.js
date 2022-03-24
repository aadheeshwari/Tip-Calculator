var discount = 0,
    amount = 0,
    people = 0;

function onSelect(value) {
    discount = parseInt(value);
}

function calculateTip() {
    amount = parseInt(document.getElementById("amount").value);
    people = parseInt(document.getElementById("pepole").value);

    let tip = (discount / 100) * amount;
    let total_tip = tip / people;
    document.getElementById("tip_amount").innerHTML = total_tip;
}
