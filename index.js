var Nyancat = require('nyansole');

module.exports = function(msg) {
  var nyanCat = new Nyancat();

  nyanCat.start();

  setTimeout(function() {
    nyanCat.end();
    console.log('\n\n\n', msg, '\n\n\n');
  }, 2000);

};