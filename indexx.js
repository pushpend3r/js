/*
function fullName() {
  return console.log(this.firstName + " " + this.lastName);
}

let user1 = {
  firstName: "Piyush",
  lastName: "Thakur",
};

let user2 = {
  firstName: "John",
  lastName: "Doe",
};

fullName.call(user1);
fullName.call(user2);
*/

"use strict";

var obj = {
  // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this);
  },
};

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
