var a = 10
let b = 20
const c = 30

function Demo () {  //Parent Function
  let p = 100 
  var q = 200
  var r = 300  
  

function outer (){ //Child Function 
  let x = 1000
  var y = 2000
  let z = 3000
console.log(a,b,c,p,q,r,x,y,z)
}
outer()
}
Demo()
