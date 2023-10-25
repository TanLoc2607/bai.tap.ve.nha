let btnaction = document.getElementById("btn-action");

btnaction.addEventListener("click" ,() => {
//lay tu the input
    let billvalue = parseFloat(document.getElementById("bill-value").value);
    alert(billvalue);
    alert(typeof(billvalue));

    if(billvalue >=2000000){
        alert(`ban da duoc giam gia ${billvalue * 0.1}`);
// cap nhat billvalue
        billvalue *= 0.9;
    }

    let infoelem = document.getElementById("info");
    infoelem.innerText = `ban can thanh toan ${billvalue} vnd`;
    

});