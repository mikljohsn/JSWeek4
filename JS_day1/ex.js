//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2){
  return n1 +n2;
}
function mul(n1,n2){
  return n1*n2
}

//Function Expression
const sub = function(n1,n2){
  return n1 - n2
} 
const division = function(n1,n2){
  return n1/n2
}

//Callback example
const cb = function(n1,n2, callback){
  try {
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
  } catch (error) {
    //throw new Error("Failed", {cause: error})
    console.error(`${error.name} : ${error.message}`);
  }
};
//The following questions might seem trivial, but it's extremely important that you can answer (and understand) each, in order to do the JS-stuff we want to do this semester


//2) Call the functions above as sketched below. It’s not about doing it as fast as you can, but about understanding what's happening, so make sure you understand each line.

console.log(add(1,2));     // What will this print? -- It will call the function and print 3
console.log(add);       // What will it print and what does add represent? --  it will print the function expression, because add without () is just a reference to the function
console.log(add(1,2,3)); // What will it print -- it will print 3, because the add function only takes two arguments and stops there
console.log(add(1));	  // What will it print -- it will print NaN - not a number, because we have only given 1 number as argument	
console.log(cb(3,3,add)); // What will it print -- it will print the return statement "xx" 3 "xx" 3 = 6 
console.log(cb(4,3,sub)); // What will it print -- same as above, it will return the string, numbers and the callback function, just with subtraction
console.log(cb(3,3,add())); // What will it print (and what was the problem) -- it will print an error, because we call the add() function which returns a number. But the function requires a callback
console.log(cb(3,"hh",add));// What will it print -- it calls the callback function and prints "xx" 3 "xx" hh = 3hh
console.log();

//3
typeof n1 === "number" //Will fail if n1 is undefined, or is not a number
typeof callback === "function" //Will fail if callback is undefined or is not a function

function addVersion2(n1, n2, ...rest){
  return n1 +n2 + rest.reduce((acc,cur)=> acc +cur)
};
console.log(addVersion2(1,2,3,4,5,6));
console.log();


//4)  Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb 
console.log(cb(2,4,mul));
//5) Call cb, this time with an anonymous function that divides the first argument with the second
console.log(cb(4,2,division));

//CALLBACKS with map, filter and forEach

//1
const names = ["Lars", "Philip", "Micki", "Kong Louie", "Alexander", "Jan", "Bo"];
const namesFiltered = names.filter(name => name.length <=3);
names.forEach(element => {
  console.log(element);
});
console.log();
namesFiltered.forEach(element => {
  console.log(element);
});
console.log();
//2
const namesMapped = names.map(name => name.toUpperCase());

console.log(namesMapped);