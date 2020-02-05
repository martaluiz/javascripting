let sumArgs = function(args) {
  console.log(parseInt(args[2]) + parseInt(args[3]));
};

const args = process.argv;
sumArgs(args);

// expect output : Array [10, 25]

