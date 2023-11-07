//  Hãy tạo ra một array mới bằng cách gộp hai array ban đầu.
let array1 = ["Hello ", "take "];
let array2 = ["Dear", "Sir"];
let array3 = [];
for(let i in array1){
    array3.push(array1[i]+array2[0], array1[i]+array2[1]);
}
console.log(array3); // Output: ["Hello Dear", "Hello Sir", "take Dear", "take Sir"]