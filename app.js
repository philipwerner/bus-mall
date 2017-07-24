'use strict';

function Image(name){
  this.name = name;
  this.source = 'img/' + this.name + '.jpg';
  this.timesShown = 0;
  this.timesClicked = 0;
  Image.all.push(this);
};

var timesClicked1 = 0;
var timesClicked2 = 0;
var timesClicked3 = 0;

Image.all = [];
Image.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

for(var i = 0; i < Image.allNames.length; i++){
  new Image(Image.allNames[i]);
};

Image.imgEl1 = document.getElementById('image1');
Image.imgEl2 = document.getElementById('image2');
Image.imgEl3 = document.getElementById('image3');

function randomImage(){
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl1.src = Image.all[randomIndex].source;
  Image.imgEl1.alt = Image.all[randomIndex].name;

  Image.all[randomIndex].timesShown += 1;
  console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + '.');

}

function randomImage2(){
  var randomIndex = Math.floor(Math.random() * Image.all.length);

  Image.imgEl2.src = Image.all[randomIndex].source;
  Image.imgEl2.alt = Image.all[randomIndex].name;

  if(Image.imgEl2 === Image.imgEl1){
    console.log('re-roll');
    Image.imgEl2.src = Image.all[randomIndex].source;
    Image.imgEl2.alt = Image.all[randomIndex].name;
  } else {
    Image.all[randomIndex].timesShown += 1;
    console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + '.');
  };
}

function randomImage3(){

  var randomIndex = Math.floor(Math.random() * Image.all.length);

  Image.imgEl3.src = Image.all[randomIndex].source;
  Image.imgEl3.alt = Image.all[randomIndex].name;

  if(Image.imgEl3 === Image.imgEl1 || Image.imgEl3 === Image.imgEl2){
    console.log('re-roll');
    Image.imgEl3.src = Image.all[randomIndex].source;
    Image.imgEl3.alt = Image.all[randomIndex].name;
  } else {
    Image.all[randomIndex].timesShown += 1;
    console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + '.');
  };

}

function onClick1(){
  timesClicked1 += 1;
  console.log('1 has been clicked ' + timesClicked1 + '.');
}
function onClick2(){
  timesClicked2 += 1;
  console.log('2 has been clicked ' + timesClicked2 + '.');
}
function onClick3(){
  timesClicked3 += 1;
  console.log('3 has been clicked ' + timesClicked3 + '.');
}

document.getElementById('products').addEventListener('click', randomImage);
document.getElementById('products').addEventListener('click', randomImage2);
document.getElementById('products').addEventListener('click', randomImage3);
document.getElementById('image1').addEventListener('click', onClick1);
document.getElementById('image2').addEventListener('click', onClick2);
document.getElementById('image3').addEventListener('click', onClick3);
randomImage();
randomImage2();
randomImage3();
