/**
 * Viết hàm calcFactorial() nhận vào một số nguyên và trả về giá trị giai thừa của số nguyên đó
 * 
 * Ví dụ: 
 * calcFactorial(4)
 * 
 * Output:
 * 24
 *  
 * */ 

function calcFactorial(number)  {
        
    let a=1 ;
    for(let i = 1; i<= number;i++){
        a= a*i;
    }
    
    return a;
    console.log('gia thua la ${a}');
}

console.log(calcFactorial(5));