// khai bao mang
let namelist = ["anne", "bella", "chris", "dan"];
let agelist = [12, 23, 45 ,58];
let genderlist = [false, false, true, true];
let hobbylist = [[], ["music","book"],["baminton", "swinming"]];
 
document.write(`name list of student: ${namelist}<br>`);
document.write(`age list of student: ${agelist}<br><br>`);


// test kieu du lieu

document.write(`liểudữ liêuk của mảng namelist: ${typeof(namelist)}<br><br>`);

//truy vấn phần tử trong mảng
document.write(`phần tư thứ ba trong namelist: ${namelist[2]}<br><br>`);

// thay chris -->colle
// thay thế phân tử
 document.write(`mảng ban đầu: ${namelist}<br><br>`);
 namelist[2]= "colle"; //thay đổi giá trị số 2
 document.write(`mảng sau khi thay đổi giá trị: ${namelist}<br><br>`);
