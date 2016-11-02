function helloWorld(username) {
  return function() {
    console.log('My Name is' + username);
  }
}
var displayName = helloWorld('Jack');
displayName();
