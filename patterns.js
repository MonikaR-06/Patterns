//Square
console.log("Square");
let n = 5;
let square = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    square = square + "* ";
  }
  square = square + "\n";
}
console.log(square);
console.log("---------------------------------------------------");

//inverse pyramid
console.log("Inverse Pyramid");
let n2 = 5;
let pyramid = "";
for (let row = n2; row >= 1; row--) {
  for (let sp = 1; sp <= n2-row; sp++) {
    pyramid = pyramid + " ";
  }
  for (let col = 1; col < 2*row; col++) {
    pyramid = pyramid + "*";
  }
  pyramid = pyramid + "\n";
}
console.log(pyramid);
console.log("---------------------------------------------------");

//inverse right-angle traingle
console.log("Inverse Right-Angle Traingle");
let n3 = 5;
let angle = "";
for (let i = 1; i <= n3; i++) {
  for (let j = 1; j <= n3 - i + 1; j++) {
    angle = angle + "* ";
  }
  angle = angle + "\n";
}
console.log(angle);
console.log("---------------------------------------------------");

//hollow square
console.log("Hollow Square");
let n4 = 5
let hollow = ''
for(let i = 1;i<=n4;i++){
    for(let j=1;j<=n4;j++){
        if(i===1 || i===n4){
            hollow = hollow+"*"
        }else {
            if(j===1 || j===n4){
                hollow = hollow+"*" 
            }
            else{
                hollow = hollow+" "
            }
        }
    }
    hollow = hollow+"\n"
}
console.log(hollow);
