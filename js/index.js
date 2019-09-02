// for (let i = 100; i > 0; i--) {
//   if(i % 2 === 0 && i % 10 !== 0){
//       document.write( i + '<br>');
//     }
// }
// let i = 0;
// while (i < 100){
//     document.write( i + '<br>');
//     i++
// }

// let i = 0;
// do {
//   document.write( i + '<br>');
//   i++
// } while(i < 100);

// let num = parseFloat(prompt("Enter number"));

// while(Number.isNaN(num)){
//     alert("You entered not a number!");
//     num = parseFloat(prompt("Enter number"));
// }

// let num;
// do{
//    if (num !== undefined){
//        alert('You entered not a number!');
//    }
//    num = parseFloat(prompt("Enter number"));
// }while(Number.isNaN(num));


let products = ['Tesla x', 'Tesla s', 'BMW i3'];
products[3] = 'Tesla y';
products[4] = 'ZAZ Sens';
products.push('Chevy Corvette');
products.push('AUDI');
products[7] = 'Volvo';
products[10] = 'Shkoda';
console.log(products.length);

// for(let i = 0; i < products.length; i++){
//     if(products[i] !== undefined){
//     console.log(products[i]);
//     }
// }

products.forEach(el => console.log(el));


