let a, b, f, g;
let c;
let e;
let d;
function calculate() {
    a = bill.value;
    b = percent.value;
    c = split.value;
    d = b / 100;
    tipAmount.value = d * a;
    e = tipAmount.value;
    f = tipPerPerson.value;
    g = totalAmount.value;
    tipPerPerson.value = e / c;
    totalAmount.value = eval(a + e);
}
function reset() {
    bill.value = '';
    percent.value = '';
    split.value = '';
    tipAmount.value = '';
    tipPerPerson.value = '';
    totalAmount.value = '';  
}