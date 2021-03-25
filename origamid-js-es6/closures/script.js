function makeFunc() {
    var name = "Viviane";
    function displayName() {
      alert(name);
    }
    return displayName;
}
  
  var myFunc = makeFunc();
  myFunc();
  