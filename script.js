'use strict';

const body = document.querySelector('body');

const DomElement = function (properties) {
  this.selector = properties.selector;
  this.height = properties.height;
  this.width = properties.width;
  this.bg = properties.bg;
  this.fontSize = properties.fontSize;
  this.text = properties.text;
  this.color = properties.color;
};

DomElement.prototype.createElement = function () {
  if (this.selector.substr(0, 1) === '.') {
    const div = document.createElement('div');

    div.classList.add(this.selector.substr(1));
    div.style.height = this.height;
    div.style.width = this.width;
    div.style.backgroundColor = this.bg;
    div.style.fontSize = this.fontSize;
    div.textContent = this.text;
    div.style.color = this.color;
    div.innerHTML;

    body.prepend(div);
  } else if (this.selector.substr(0, 1) === '#') {
    const p = document.createElement('p');

    p.id = this.selector.substr(1);
    p.style.height = this.height;
    p.style.width = this.width;
    p.style.backgroundColor = this.bg;
    p.style.fontSize = this.fontSize;
    p.textContent = this.text;
    p.style.color = this.color;
    p.innerHTML;

    body.prepend(p);
  }
};

const element = new DomElement({
  selector: '#element',
  height: '100px',
  width: '100px',
  bg: '#000',
  fontSize: '14px',
  text: 'Задание выполнено',
  color: '#fff'
});

element.createElement();
