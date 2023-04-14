

setTimeout( function(){
  console.log("U got to be kidding me");
}, 3000); 


const arr = ['apple', 'banana', 'cherry'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); //i is mentioned is to output the value of the current element in the array to the console during each iteration of the loop
}

const obj = {a: 1, b: 2, c: 3};

for (let prop in obj) {
  // console.log(`${prop}: ${obj[prop]}`);
  console.log(prop);
}

