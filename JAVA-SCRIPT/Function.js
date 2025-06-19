// function sub (a,b){
//   let c = a-b
//   console.log('SUB = '+c)  //This is called as Function Declaration
//   return c
// }
// let d = sub(25,5)   //Calling 
// console.log( 'Output = '+d )

// let sum = function add (a,b){
//   let c = a+b
//   // console.log(c)
//   return c
// }
// sum(10,20) 
// console.log(sum(67,90)) // We cannot call the named func becoz it is stored inside a variable "container"

//The Above both Syntax is not following from the year 2015 we are following the ARROW Syntx

let v = (a,b)=>{
let c = a*b
return c  //This is called as Arrow Function 
} 
let q = v(50,4)
console.log('output = '+q)
