'use strict';

var navButtons = document.querySelectorAll('#navbar ul li');
var navBar = document.querySelector('#navbar');

function wrapper() {
  var _this = this;

  var changeColor = function changeColor() {
    navBar.classList.toggle('red');
  };

  var loopThrough = function loopThrough() {

    var thisButtonText = _this.childNodes[0].nodeValue;
    var thisButtonLength = thisButtonText.length;

    for (var i = 0; i < thisButtonLength; i++) {
      setTimeout(function () {
        changeColor();
      }, i * 1000);
    }
  };
  loopThrough();
};

for (var i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener('click', wrapper);
};