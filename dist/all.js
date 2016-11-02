function helloWorld(username) {
  return function() {
    console.log('My Name is' + username);
  }
}
var displayName = helloWorld('Jack');

(function() {
  console.log('hello from script-1');
})();

(function() {
  console.log('hello from script-2');
})();
