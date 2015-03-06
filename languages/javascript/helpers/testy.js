/**
 * Pull out request parameters from the resource.
 *
 * @param  {Object} resource
 * @return {String}
 */
var params = function (resource) {
  return resource.uriParameters.map(function (param) {
    return param.displayName;
  }).join(', ');
};
console.log(">> Log");
/**
 * Stringify a resource into a request snippet.
 *
 * @param  {Object} resource
 * @return {String}
 */
module.exports = function (resource,b) {
    var context = this;
    console.log('1--------------');
    console.log(resource);
    console.log('2--------------');
    //console.log(resource.getResources());
    console.log('3--------------');
    console.log(context);
    console.log('4--------------');
    var arr = [];
    arr.push('000');
    var blah='blah';

    console.log(">> testy- "+blah);
    console.log(">> testy1 ");
    for (var key in resource) {
	console.log(">> testy2 " + key);
    }
    console.log(">> testy3 ");
    var resources = resource.resources;
    for (var key in resources) {
	console.log(">> testy4 " + key);
    }
    arr.push('999');
    return arr.join('');

  return ['zzz','eee'].join('');
  var parts = [];
  var part  = resource;

  while (part && part.parent) {
    var segment = part.key;

    // If uri parameters exist, push onto the stack.
    if (part.uriParameters.length) {
      segment += '(' + params(part) + ')';
    }

    parts.unshift(segment);

    part = part.parent;
  }

  return 'resources' + (parts.length ? '.' + parts.join('.') : '');
};
