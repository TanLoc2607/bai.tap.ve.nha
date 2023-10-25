let btnaction1 = document.getElementById("btn-action-1");

btnaction1.addEventListener("click", () => {
    let chieudai = parseInt(document.getElementById("length").value);
    let chieurong = parseInt(document.getElementById("width").value);

    if (chieudai===chieurong) {
        alert("đây là hình vuông");

    }else {
        alert("đây không phải hình vuông");
    }
});
//bai2
let  btnaction2 = document.getElementById("btn-action-2");

btnaction2.addEventListener("click",() => {
    let numbera = parseFloat( document.getElementById("number-a").value);
    let numberb = parseFloat( document.getElementById("number-b").value);
    
    if(numbera>=numberb){
        alert(`so lon nhat ${numbera}`);
    }else{
        alert(`so lon nhat ${numberb}`);
    } 

});
//bai 3
let btnaction3 = document.getElementById("btn-action-3");
btnaction3.addEventListener("click", () => {
    let songuyen =parseInt(document.getElementById("n").value);
    if(songuyen>=0){
        alert(`gia tri truyet doi la ${songuyen}`);
    }
    else{
        alert(`gia tri tuyet doi ${songuyen} la ${-songuyen}`);
    }
});
//bai4


let btnaction4 = document.getElementById("btn-action-4");
btnaction4.addEventListener("click", () => {
    let day = parseInt(document.getElementById("day").value);
    if(day==2) alert("monday");
    if(day==3) alert("tuesday");
    if(day==4) alert("wednesday");
    if(day==5) alert("thursday");
    if(day==6) alert("friday");
    if(day==7) alert("saturday");
    if(day==8) alert("sunday");
});

//bai5

let btnaction5= document.getElementById("btn-action-5");
btnaction5.addEventListener("click", () => {
    let n1 = parseInt (document.getElementById("n1").value);
    let n2 = parseInt (document.getElementById("n2").value);
    let n3 = parseInt (document.getElementById("n3").value);
    if (n1>n2 && n1>n3){
        alert(`so lon nhat la ${n1}`);
    }else if(n2>=n1 && n2>=n3){
        alert(`so lon nhat la ${n2}`);

    }else {
        alert(`so lon nhat la ${n3}`);
    }
    
});