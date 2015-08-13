module.exports = function(name, separator) {
  return name.replace(/([a-z]|(?:[A-Z]+))([A-Z]|$)/g, function(_, $1, $2) {
    return $1.toLowerCase() + ($2 && (separator || '_') + $2.toLowerCase());
  });
};
