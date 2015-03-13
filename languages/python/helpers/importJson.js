/**
 * Stringify a resource into a request snippet.
 *
 * @param  {Object} resource
 * @return {String}
 */
var xxfs = require("fs");
function importJson(resource, filename, symbol) {
    var x = this;
    x = resource;
    for (var k in this)
	console.log("1:"+k);
    console.log(symbol);
    console.log("FN:"+filename);

    function cb(err,data) {
	console.log('---1');
	console.log(data);

    x[symbol] = data;
    this[symbol] = data;
	
	console.log('---9');
    }

    var data = xxfs.readFileSync(filename,'ascii');

    console.log(data);

    for (var k in x)
	console.log("2:"+k);

    data = JSON.parse(data);

    x[symbol] = data;
    this[symbol] = data;
    for (var k in x)
	console.log("3:"+k);

    return '';
};
module.exports = importJson;
