'use strict';

const body = document.querySelector('body')
let sqrElem;

const DomElement = function (sel, h, w, backg, fz, pos) {
  this.selector = sel;
  this.height = h;
  this.width = w;
  this.bg = backg;
  this.fontSize = fz;
  this.position = pos;
  this.createElem = function () {
    let elem;
    if(sel[0] === '.'){
      elem = document.createElement('div')
      sel = sel.split('');
      sel.splice(0,1);
      sel = sel.join('')
      elem.classList.add(sel);
      elem.textContent = 'Привет меня зовут Максим'
    } else if (sel[0] === '#'){
      elem = document.createElement('p');
      sel = sel.split('');
      sel.splice(0,1);
      sel = sel.join('')
      elem.setAttribute('id', sel);
      elem.textContent = "Привет меня зовут Элька";
    }
    elem.style.cssText = `background-color:${this.bg}; height:${this.height}; width:${this.width}; font-size:${this.fontSize}; position:${this.position}`;
    body.appendChild(elem);
  }
}

const newElem = new DomElement('.max', '60px', '500px', 'red' ,'30px');
const newElem2 = new DomElement('#elya', '50px', '550px', 'purple', '22px')

const square = new DomElement('.square', '100px', '100px', 'pink', '0', 'absolute');
newElem.createElem();
newElem2.createElem();



document.addEventListener('DOMContentLoaded', (event) => {
  square.createElem()
})

function getSquare () {
  sqrElem = document.querySelector('.square');
  let countTop = 0;
  let countLeft = 0;
  document.addEventListener('keydown', (event) => {
    switch(event.key) {
      case 'ArrowUp':
        countTop -= 10
        break;
      case 'ArrowDown':
        countTop += 10

        break;
      case 'ArrowRight':
        countLeft += 10
        break;
      case 'ArrowLeft':
        countLeft -= 10
        break;
    }
    sqrElem.style.transform = 'translate(' + countLeft + 'px' + ', ' + countTop + 'px)' 
  });
}

setTimeout(getSquare, 100);













