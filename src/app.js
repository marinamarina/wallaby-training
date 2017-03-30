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
  if (num === 0) return 'red'; 
  if (num === 1) return 'yellow'; 
  if (num === 2) return 'green'; 
  if (num === 3) return 'blue'; 
}
