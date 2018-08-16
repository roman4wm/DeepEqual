"use strict";

let a = {
  name: "John",
  order: {
    price: 20
  },
  age: 10
};

let b = {
  name: "John",
  order: {
    price: 20
  },
  age: 10
};

function deepEqual(a, b) {
  for (var key in a) {
    if (typeof a[key] === typeof b[key] && typeof a[key] === "object") {
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    } else if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

console.log(deepEqual(a, b));
