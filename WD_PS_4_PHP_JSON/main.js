

let myJSON = '{"name":"John", "age":31, "city":"New York"}';
let myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;

// Storing data:
myObj = {name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;
