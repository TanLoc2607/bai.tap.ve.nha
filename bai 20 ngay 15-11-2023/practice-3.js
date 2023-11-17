/**
 * Viết hàm isPrimeNumber() nhận vào một số nguyên và kiểm tra xem đó có phải là số nguyên tố hay không
 * Nếu có, trả về true. Ngược lại, trả về false.
 * 
 * Ví dụ: 
 * isPrimeNumber(4)
 * 
 * Output:
 * false
 *  
 * */ 

function isPrimeNumber(number) {let result;
    for(let i = 2; i< number;i++){
        if(number%i==0){
            result=false;
            break;
        }else{result=true;
            break;

        }
    }
    return result ;}

console.log(isPrimeNumber(4));