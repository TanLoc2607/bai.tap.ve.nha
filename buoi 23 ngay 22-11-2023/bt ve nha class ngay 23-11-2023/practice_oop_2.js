/**
 * Sở giao thông cần theo dõi việc đăng ký xe của người dân.
 * Dựa vào dung tích xylanh của xe, sở giao thông sẽ tính
 * mức thuế phải đóng trước bạ khi mua xe như sau:
 * 
 * - Dưới 100cc, 1% giá trị của xe
 * - Từ 100 đến 200 cc, 3% giá trị của xe
 * - Trên 20cc, 5% giá trị của xe
 * 
 * Hãy thiết kế class `Vehicle` với các thông tin như sau:
 * - Thuộc tính: tên chủ xe, loại xe, dung tích, trị giá
 * - Constructor khởi tạo các thuộc tính thông qua params
 * - Hàm tính giá trị thuế trước bạ dựa vào dung tích xylanh
 * - Hàm showInfo in ra các thông tin của xe: tên chủ xe,
 * loại xe, dung tích, trị giá, thuế phải nộp
 * 
 * Khởi tạo các đối tượng Vehicle và in ra các thông tin
 * tương ứng của các đội tượng được khởi tạo
 */

class Vehicle{
    constructor(ten, loaixe, dungtich, trigia){
        this.ten = ten;
        this.loaixe = loaixe;
        this.dungtich = dungtich;
        this.trigia = trigia;
    }
    moveForward(){
        console.log(` là số tiển phải đóng`);
    }
    introduce(){
        if(this.dungtich<100){
            console.log(`tên chủ xe:${this.ten} , loại xe ${this.loaixe}  ,     so tien:${this.trigia*0.01}`);
        }else if(this.dungtich<=200){
            console.log(`tên chủ xe:${this.ten} , loại xe ${this.loaixe} so tien:${this.trigia*0.03}`);
        }else if(this.dungtich>200) {
            console.log(`tên chủ xe:${this.ten} , loại xe ${this.loaixe}  so tien ${this.trigia*0.05}`);
        }
        this.moveForward();
        
    }
}
car1 =new Vehicle("loc","wave", 50, 2000000 );
car1.introduce();
car2 =new Vehicle("trang", "sh", 150, 5000000);
car2.introduce()
