/**
 * Hãy tạo một lớp `Rectangle` gồm có:
 * - Thuộc tính: chiều dài, chiều rộng hình chữ nhật
 * - Constructor nhận vào các thông tin khởi tạo thuộc tính
 * - Phương thức tính diện tích, chu vi
 * - Phương thức showInfo() log ra các thông tin dài, rộng,
 * diện tích, chu vi
 * 
 * Tạo ra các object hình chữ nhật từ Class Rectangle và
 * in ra thông tin của các object vừa tạo
 */
class Rectangle {
    constructor(length, width){
        this.lenghth =length;
        this.width = width;
    } 
    moveForward(){
         console.log(`chu vi va dien tich `);
    }
    introduce(){
        console.log(`chu vi :(${this.lenghth*2+this.width*2})`);
        console.log(`dien tich:(${this.lenghth*this.width})`);
        this.moveForward();
    }
}
rectangle1 = new Rectangle(35, 12);
rectangle1.introduce();