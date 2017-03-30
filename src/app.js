var RandomColorSequence = function(num) {
  this.items = [];
  
  for (var index = 0; index < num; index ++) {

    // generate a random number
    var number = Math.floor(Math.random() * 4);
    var color = numberToColor(number);

    // push to the array of items
    this.items.push(color);
  }

}

function numberToColor(num) {
  return 'red';
}
