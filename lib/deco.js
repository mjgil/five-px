

module.exports = function(fn) {

  return function() {
    var args = [].slice.call(arguments, 0);
    if (args.length === 3) {
      args[1] = args[1] || {};
    }
    else if (args.length === 2) {
      if (typeof args[0] !== 'string' && typeof args[0] !== 'number') {
        args[0] = args[0] || {};
      }

      if (typeof args[1] === 'function' && typeof args[0] !== 'object') {
        args.push(args[1]);
        args[1] = {};
      }
    }
    else if (args.length === 1) {
      if (typeof args[0] === 'function') {
        args.push(args[0]);
        args[0] = {};
      }
    }

    fn.apply(this, args);
  };
};