module.exports = function(name, separator) {
  return name.replace(/([a-z]|(?:[A-Z0-9]+))([A-Z0-9]|$)/g, function(_, $1, $2) {
    return $1 + ($2 && (separator || '_') + $2);
  }).toLowerCase();
};
