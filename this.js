THE FOUR RULES OF 
***THIS***

WIFI: hackreactor
PW: awesome bullets

Coffee + Tea: in the kitchen









====================
console.log(this);














====================
var obj = {}
obj.fn = function(){ 
  console.log(this)
} // didn't actually called the function. Trick question. 
// this was a function definition











====================
Method Invocation
obj.fn = function(){ 
  console.log(this)
}
obj.fn() // function invocation









====================
Rule #1: Method Invocation

The object to the left of the dot at 
***call time*** // !!! when it's being invoked
of the function referencing this









====================
Rule #1: Method Invocation
The object to the left of the dot at call time
of the function referencing this
var obj = { which: 'I am obj :D'};
obj.fn = function () {

 console.log(this.which);

};

console.log(obj.fn);

var x = {
  which: 'I am x',
  fn2: obj.fn
};

obj.fn();
x.fn2();

====================
Rule #1: Method Invocation

The object to the left of the dot at call time
of the function referencing this
clear();
var obj = {};
obj.fn = function () {

 console.log(this);

};

var fn = obj.fn;

fn();

====================
Rule #2: Window
2a. Free Function Invocation

obj.fn = function () {
  console.log(this);
};

setTimeout(obj.fn,   0);
setTimeout(obj.fn(), 0);





====================
Rule #2: Window
2a. Global

console.log(this);










====================
Rule #2: Window

fn = function () {
  console.log(this);
};

fn();







====================
var fn = function () {
  //console.log(this);
  var anotherFun = function(){
    console.log('hellooo', this);
  };

  this.anotherFun();
};

setTimeout(fn, 1000)
fn(); // this = window, window doesn't have anotherFun so it will give type error









====================
Rule #3: constructor invocation


var fn = function(){
  console.log(this);
}

var newInstance = new fn();








====================
Rule #3: constructor invocation
When using constructors 'this' refers to the object being created (instantiated)

var fn = function(name){
  this.name = name;
  console.log(this)
}

var newInstance = new fn('Joe');






====================
Rule #4: Using .call or .apply

var fn = function(){
  console.log(this);
}









====================
Rule #1: 
Rule #2:
Rule #3:
Rule #4:


var cat2 = {
  name: "Albrey",
  type: "Calico",
  owner: "JavaScript :)"
};



