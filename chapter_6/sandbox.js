// const para = document.querySelector('p');
// const para = document.querySelector('.error');
const para = document.querySelector('div.error');

console.log(para);

// query multiple elements at once
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

console.log(paras, errors);
console.log(paras[1], errors[0]);


// get an element by ID
const title= document.getElementById('page-title');
console.log(title);

// get elements by their class name
const errors1 = document.getElementsByClassName('error');
console.log(errors1);
console.log(errors1[0]);

// get elements by their tag name
const paras1 = document.getElementsByTagName('p');
console.log(paras1);
console.log(paras1[1]);


const para3 = document.querySelector('p');

// console.log(para3.innerText);
// para3.innerText = 'ninjas are awesome';

const paras3 = document.querySelectorAll('p');

// paras3.forEach(p => {
//   console.log(p.innerText);
//   p.innerText = 'new text!';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2>this is a new h2</h2>';

// content.innerHTML += '<h2>this is an h2 added to the content</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});



const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.textContent = 'The Net Ninja webiste';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green');



const title1 = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;');

console.log(title1.style);
console.log(title1.style.color);

title1.style.margin = '50px';
title1.style.color = 'crimson';
title1.style.fontSize = '60px';
title1.style.margin = '';


// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('success');

const paras4 = document.querySelectorAll('p');

paras4.forEach(p => {
  if(p.textContent.includes('error')){
    p.classList.add('error');
  } else if(p.textContent.includes('success')) {
    p.classList.add('success');
  }
});



const article = document.querySelector('article');

// console.log(article.children);
// console.log(Array.from(article.children));
// console.log(article.children);

Array.from(article.children).forEach(child => {
  child.classList.add('article-element');
});

const title2 = document.querySelector('h2');

console.log(title2.parentElement);
console.log(title2.parentElement.parentElement);
console.log(title2.nextElementSibling);
console.log(title2.previousElementSibling);

// chaining
console.log(title2.nextElementSibling.parentElement.children);



// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('you clicked me');
// });

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    // console.log('item clicked');
    // console.log(e);
    // console.log(e.target);
    // console.log(item);
    e.target.style.textDecoration = 'line-through';
  });
});



const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  //ul.appendChild(li);
  ul.prepend(li);
});

const items1 = document.querySelectorAll('li');

items1.forEach(item => {
  item.addEventListener('click', e => {
    // e.target.style.textDecoration = 'line-through';
    e.target.remove();
  });
});



const ul1 = document.querySelector('ul');
const button1 = document.querySelector('button');

button1.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  ul.appendChild(li);  
});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     console.log('event in LI');
//     e.stopPropagation();
//     e.target.remove();
//   });
// });

ul1.addEventListener('click', e => {
  // console.log('event in UL');
  console.log(e.target, e);
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
});




const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
  console.log('OI! my content is copyrighted!!');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
  // console.log(e);
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
  console.log(e.pageX, e.pageY);
});


const button2 = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button2.addEventListener('click', () => {
  popup.style.display = 'block';
});

close.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
  if(e.target.className === 'popup-wrapper'){
    popup.style.display = 'none';
  }
});

