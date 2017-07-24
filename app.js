'use strict';

function Image(name){
  this.name = name;
  this.source = 'img/' + this.name + '.jpg';
  this.timesShown = 0;
  this.timesClicked = 0;
  Image.all.push(this);
};

Image.all = [];
Image.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

for(var i = 0; i < Image.allNames.length; i++){
  new Image(Image.allNames[i]);
};

function randomImage(){
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl1.src = Image.all[randomIndex].source;
  Image.imgEl1.alt = Image.all[randomIndex].name;

  Image.all[randomIndex].timesShown += 1;
  console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + '.');

}
document.getElementById('image').addEventListener('currentTarget', randomImage);
