let array = ['hello', 'how', 'are', 'you', 'doing'];
console.log(array);
//prints whole array

const word = 'good';
array.push(word);
console.log(array);
//new element added to end of array (i assumed 'end of end of array' was typo)

array.splice(2, 1);
console.log(array);
//splice at index 2, removing 1 element (this would be 'are')

let joinArray = array.join(',');
console.log(joinArray);
//make string of array, the 3rd element should be gone and now should output the string: "hello,how,you,doing,good"




