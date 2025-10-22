let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');
let plus = document.querySelector('.plus');
let decimal = document.querySelector('.decimal');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let minus = document.querySelector('.minus');
let screen = document.querySelector('.screen');

var result = 0.0;

one.addEventListener('click', function() {
  let v = screen.innerHTML;
  screen.innerHTML = v + '1';
});

two.addEventListener('click', function() {
  let v = screen.innerHTML;
  screen.innerHTML = v + '2';
});

three.addEventListener('click', function() {
  let v = screen.innerHTML;
  screen.innerHTML = v + '3';
});

four.addEventListener('click', function() {
  let v = screen.innerHTML;
  screen.innerHTML = v + '4';
});

five.addEventListener('click', function() {
  let v = screen.innerHTML;
  screen.innerHTML = v + '5';
});

six.addEventListener('click', function() {
  let v = screen.innerHTML;
  screen.innerHTML = v + '6';
});

seven.addEventListener('click', function() {
  let v = screen.innerHTML;
  screen.innerHTML = v + '7';
});

eight.addEventListener('click', function() {
  let v = screen.innerHTML;
  screen.innerHTML = v + '8';
});

nine.addEventListener('click', function() {
  let v = screen.innerHTML;
  screen.innerHTML = v + '9';
});

zero.addEventListener('click', function() {
  let v = screen.innerHTML;
  screen.innerHTML = v + '0';
});

multiply.addEventListener('click', function() {
  let v = screen.innerHTML;
  screen.innerHTML = v + '×';
});

divide.addEventListener('click', function() {
  let v = screen.innerHTML;
  screen.innerHTML = v + '÷';
});

minus.addEventListener('click', function() {
  let v = screen.innerHTML;
  screen.innerHTML = v + '-';
});

plus.addEventListener('click', function() {
  let v = screen.innerHTML;
  screen.innerHTML = v + '+';
});

decimal.addEventListener('click', function() {
  let v = screen.innerHTML;
  screen.innerHTML = v + '.';
});

equal.addEventListener('click', function() {
    try {
    let expression = screen.innerHTML.replace(/×/g, '*').replace(/÷/g, '/');
    let result = eval(expression);
    screen.innerHTML = result;
  } catch (error) {
    screen.innerHTML = 'Error';
  }
});

let clear = document.querySelector('.clear');
let back = document.querySelector('.back');
let percent = document.querySelector('.percent');
let factorial = document.querySelector('.factorial');
clear.addEventListener('click', function() {
  screen.innerHTML = "";
});
back.addEventListener('click', function() {
  let v = screen.innerHTML;
  screen.innerHTML = v.slice(0,-1);
});
percent.addEventListener('click',function(){
  let expression = screen.innerHTML;
  expression += '/100';
  expression = eval(expression);
  screen.innerHTML = `${expression}`;
})
factorial.addEventListener('click', function() {
  let v = screen.innerHTML;
  v = eval(v);
  result = 1;
  if (v > 0){
      for (var i = 1; i <= v; i++) {
      result *= i
      }
  }
  else {
    result = `error`
  }
  screen.innerHTML = `${result}`
});