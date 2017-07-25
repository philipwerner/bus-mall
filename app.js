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

Image.imgEl1 = document.getElementById('image1');
Image.imgEl2 = document.getElementById('image2');
Image.imgEl3 = document.getElementById('image3');

var randomImage = function(){
  var rand1 = Math.floor(Math.random() * Image.all.length);
  var rand2 = Math.floor(Math.random() * Image.all.length);
  var rand3 = Math.floor(Math.random() * Image.all.length);


  Image.imgEl1.src = Image.all[rand1].source;
  Image.imgEl1.alt = Image.all[rand1].name;

  Image.imgEl2.src = Image.all[rand2].source;
  Image.imgEl2.alt = Image.all[rand2].name;
  while(rand2 === rand1){
    console.log('duplicated image 2, re-roll');
    rand2 = Math.floor(Math.random() * Image.all.length);
  };

  Image.imgEl3.src = Image.all[rand3].source;
  Image.imgEl3.alt = Image.all[rand3].name;
  while(rand3 === rand1 || rand3 === rand2){
    console.log('duplicated image 3, re-roll');
    rand3 = Math.floor(Math.random() * Image.all.length);
  };
  // afterClick();
  // deDuplicate();

  Image.all[rand1].timesShown += 1;
  console.log(Image.all[rand1].name + ' has been shown ' + Image.all[rand1].timesShown + '.');
  Image.all[rand2].timesShown += 1;
  console.log(Image.all[rand2].name + ' has been shown ' + Image.all[rand2].timesShown + '.');
  Image.all[rand3].timesShown += 1;
  console.log(Image.all[rand3].name + ' has been shown ' + Image.all[rand3].timesShown + '.');

};

function eventHandler(){
  getRandoms();
}
//
// function deDuplicate (){
//   if(Image.imgEl1.src === Image.imgEl2.src || Image.imgEl1.src === Image.imgEl3.src){
//     console.log('re-roll 1');
//     randomImage();
//   } else if(Image.imgEl3.src === Image.imgEl2.src) {
//     console.log('re-roll 2');
//     randomImage();
//   };
// }

function getRandoms(){
  randomImage();
  // randomImage2();
  // randomImage3();
  // afterClick();
}
// function afterClick (){
//   if(Image.imgEl1.src === Image.imgEl1.src || Image.imgEl1.src === Image.imgEl2.src || Image.imgEl1.src === Image.imgEl3.src || Image.imgEl2.src === Image.imgEl2.src || Image.imgEl2.src === Image.imgEl3.src || Image.imgEl3.src === Image.imgEl3.src){
//     console.log('re-roll after clicked');
//     // getRandoms();
//   // } else if(Image.imgEl2.src === Image.imgEl1.src || Image.imgEl2.src === Image.imgEl2.src || Image.imgEl2.src === Image.imgEl3.src) {
//   //   console.log('re-roll 2 after clicked');
//   //   randomImage2();
//   // } else if(Image.imgEl3.src === Image.imgEl1.src || Image.imgEl3.src === Image.imgEl2.src || Image.imgEl3.src === Image.imgEl3.src){
//   //   console.log('re-roll 3 after clicked');
//   //   randomImage3();
//   }
// }
// function onClick(){
//   var randomIndex = Math.floor(Math.random() * Image)
//   Image.all[randomIndex].timesClicked += 1;
//   console.log(Image.all[randomIndex].name + ' has been clicked ' + Image.all[randomIndex].timesClicked + '.');
// }

document.getElementById('products').addEventListener('click', getRandoms);

// afterClick();
// document.getElementById('image1').addEventListener('click', onClick);
// document.getElementById('image2').addEventListener('click', onClick);
// document.getElementById('image3').addEventListener('click', onClick);
randomImage();
// randomImage2();
// randomImage3();
