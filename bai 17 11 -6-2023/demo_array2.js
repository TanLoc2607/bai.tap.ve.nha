let namelist = ["anne", "bella", "chris", "dan"];

//duyệt từng phần tử trong mảng
document.write("danh sách phàn tử trong namelist : <br>");

//for (let i = 0; i<namelist.length; i++) {
 //   document.write(`${namelist[i]} <br>`);
 for(let i in namelist){
   document.write(`${namelist[i]}<br>`);
}