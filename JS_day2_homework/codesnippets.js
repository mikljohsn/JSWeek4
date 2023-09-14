//Code Snippet for Video 
//1)
//We need to do something here
const name = document.getElementById("name-input").value
const listViewElement = document.createElement("li");
listViewElement.appendChild(document.createTextNode(name))
const ul = document.getElementById("ul1").appendChild(listViewElement)
//We need to do something here
console.log(names)

//2)
evt.preventDefault()
document.getElementById("ul1").firstChild.remove();
//We need to do something here (shift)
console.log(names)

//3)
evt.preventDefault()
document.getElementById("ul1").lastChild.remove();
//We need to do something here (pop)
console.log(names)

//4)
evt.preventDefault()
//const name = document.getElementById("name-input").value
names.push(name);
makeList();

//5)
evt.preventDefault()
names.shift()
makeList();

//6)
evt.preventDefault()
names.pop()
makeList();
//Copy this into the clipboard when we get to the XSS Demo

//<img src='x' onerror='alert("You have been hacked")'>
