#!/usr/bin/env js

// A "functional" is just a function that takes
// another function as input.  

// The Y combinator finds the fixed point
// of the "functional" passed in as an argument.

// Thus, the Y combinator satisfies the property:

//     Y(F) = F(Y(F))

// Note that Y does not reference itself:
  
var Y = function (F) {
 return (function (x) {
  return F(function (y) { return (x(x))(y);});
  })
        (function (x) {
  return F(function (y) { return (x(x))(y);});
  }) ;
} ;

// (In fact, all functions above are anonymous!)
 

// FactGen is the functional whose fixed point is
// factorial.
  
// That is, if you pass the factorial function to
// FactGen, you get back the factorial function.

// Since the Y combinator returns the fixed point
// of a functional, applying the Y combinator to
// FactGen returns the factorial function!

// Note that FactGen does not reference itself:
  
var FactGen = function (fact) {
 return (function(n) {
  return ((n == 0) ? 1 : (n*fact(n-1))) ;
 });
} ;


