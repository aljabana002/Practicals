// defining an array
let catFamily =['lion', 'cheetah', 'leopard', 'cat']

// length = catFamily.length
console.log(catFamily.length);

// access elements 
console.log(catFamily[1]);

// print full array 
console.log(catFamily);

console.log(catFamily[catFamily.length - 1]);

// change cat to tiger
catFamily[catFamily.length - 1] = 'tiger'
console.log(catFamily);
 // lets change lion to jaguar
 catFamily[catFamily.length - 4] = 'jaguar'
 console.log(catFamily);

 // add anew value/element at the end of the array
 catFamily.push('panther')
 console.log(catFamily);
  // add anew value/element at the beginning of the array
  catFamily.unshift('puma')
  console.log(catFamily);

  // remove a value at the end of the array
  catFamily.pop()
  console.log(catFamily);
  
  // remove a value at the beginning of the array
  catFamily.shift()
  console.log(catFamily);

  // get index of array elements
  console.log(catFamily.indexOf('cheetah'))

  // print cheetah
console.log(catFamily[catFamily.indexOf('cheetah')])
