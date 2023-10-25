let btnaction = document.getElementById("btn-action");

btnaction.addEventListener("click" ,() => {
//lay tu the input
    let billvalue = parseFloat(document.getElementById("bill-value").value);
    if (billvalue >= 4000000){
        alert(`ban duoc giam gia ${billvalue *0.2}vnd`);
        billvalue *= 0.8;
        
    } else if (billvalue >= 2500000){
        alert(`ban duoc giam gia ${billvalue *0.15}vnd`);
        billvalue *= 0.85;
    } else if (billvalue >=1500000){
        alert(`ban duoc giam gia ${billvalue - 200000}vnd`);
        billvalue -= 200000;
    } else {
        alert ("don hang k duoc giam gia");
    }

    let infoelem = document.getElementById("info");
    infoelem.innerText = `ban can thanh toan ${billvalue} vnd`;
    

});