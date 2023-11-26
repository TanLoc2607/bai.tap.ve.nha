//tạo ra một bảng mô phỏng về xe hơi, từ đó tạo ra các đối tượng xe hơi thực tế

//tạo ra 1 class car --mô phỏng đối tượng cần quản lý trong chương trình

class Car {
    // mô tảo thuộc tính 
   // carName = "vinFast VF 8";
    //brandName = "Vinfast";
    //carColor = "red";

    //contructor --hàm khởi tạo
    constructor(carName, brandName, carColor){//params
          this.carName = carName;
          this.brandName = brandName;
          this.carColor = carColor;
     }

    //mô tả hành động / phương thức

    moveForward() {
        console.log("The car is moving forward!");
    }
    introduce(){
        console.log(`Car name: ${this.carName}`);
        console.log(`brand name: ${ this.brandName}`);
        console.log(`car color:${this/this.carColor}`);
        this.moveForward();

    }
}
//tạo và tuong tác với đối tượng class car
car1 = new Car("vinfast", "vinfast", "silver");
car1.introduce();

car2 = new Car("GTR", "Nissan","Black");
car2.introduce();

car3 = new Car("tot", "OI", "asd");
car3.introduce();