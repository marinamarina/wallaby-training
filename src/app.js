var RandomColorSequence = function(num) {
  this.items = [];
  
  for (var index = 0; index < num; index ++) {

    // generate a random number
    var number = Math.floor(Math.random() * 4);

    // push to the array of items
    this.items.push(number);
  }
}
