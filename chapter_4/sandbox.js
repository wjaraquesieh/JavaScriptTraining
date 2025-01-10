// function declaration
function greet(){
    console.log('hello there');
  }
  
  // function expression
  const speak = function(){
    console.log('good day!');
  };
  
  // greet();
  // greet();
  
  speak();


  // arguments & parameters

const speak2 = function(name = 'luigi', time = 'night'){
    console.log(`good ${time}, ${name}!`);
  };
  
  // speak2('mario', 'morning');
  // speak2();
  speak2('shaun');


  // return statements

// const speak = function(name, time){
//   console.log(`good ${time}, ${name}!`);
// };

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
  }
  
  const area = calcArea(5);
  console.log('area is:', area);


  // arrow functions

// regular function
// const calcArea = function(radius){
//   return 3.14 * radius**2;
// }

// arrow function
const calcArea2 = radius => 3.14 * radius**2;

const area2 = calcArea2(5);
console.log('area is:', area2);

// practise arrow functions

// const greet = function(){
//   return 'hello, world';
// }

const greet = () => 'hello, world';

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i]  + products[i] * tax;
  }
  return total;
}

console.log(greet());
console.log(bill([10,15,30], 0.2));


const name = 'shaun';

// function

const greet = () => {
  return 'hello';
};

let resultOne = greet();
console.log(resultOne);

// method

let resultTwo = name.toUpperCase();
console.log(resultTwo);


// callbacks & forEach
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
}

// people.forEach(person => {
//   console.log(`hello ${person}`);
// });

people.forEach(logPerson);


const ul = document.querySelector('.people');

const people1 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people1.forEach(person => {
  // create html template for each person
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;


