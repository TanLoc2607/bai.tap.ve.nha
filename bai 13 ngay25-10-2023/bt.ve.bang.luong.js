let btnaction1 = document.getElementById("btn-action1");
btnaction1.addEventListener("click", () => {
    let hour1 = parseInt(document.getElementById("hour").value);
    if (hour1>400){
        alert(`Số tiền thưởng cho nhân viên bậc 1 la 1000$usd`);
    } else {
        alert(`cố gắng làm đủ 400 giờ đê! ông chủ BO cho 1000$usd`);
    }
});
 let btnaction2 = document.getElementById("btn-action2");
 btnaction2.addEventListener("click", () => {
    let hour2 =parseInt(document.getElementById("hour").value);
    if(hour2>400){
        alert(`Số tiền thưởng cho nhân viên bậc 2 la 2000$usd `);
    }else {
        alert(`cố gắng làm đủ 400 giờ đê! ông chủ BO cho 2000$usd`)
    }
 });