var show = document.getElementsByClassName('show');


var buttonArray = document.getElementsByTagName('button');

var button = document.getElementsByTagName('button')[0];

function displayCards(array){
  show[0].innerHTML = null;
  for (var i = 0; i < array.length; i++) {
      var p = document.createElement('p');
      show[0].appendChild(p);
      p.innerHTML = array[i];
    };
}


button.onclick = function(){
var numOfCards = prompt('How many cards do you want?');
  var tempArray = playGame(numOfCards);
  displayCards(tempArray);
};


