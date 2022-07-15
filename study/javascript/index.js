//  ... Spread operator :   unpacks an iterable
//
//                          let list1 = [0, 0, 0];
//                          let list2 = [1, 1, 1];
//                          list2.append(...list1);
//                          console.log(list2);
//                          [0, 0, 0, 1, 1, 1]
//-------------------------------------------------------------------------------------------
//  ... rest parameters  :   packs argument into an array
//                          
//                          n = sum(a, b, ,c, d);
//                          function sum(...numbers) {
//                              let total = 0;
//                              for(let n in numbers) {
//                                  total += n;
//                              }
//                              return total;
//                          }
//-------------------------------------------------------------------------------------------
//  callback             :   pass a function as an argument of another function
//                          
//                          n = sum(a, b, console.log);
//                          function sum(x, y, callBack) {
//                              sum = a + b;
//                              callBack(sum);
//                          }
//-------------------------------------------------------------------------------------------
//  array.forEach()      :   execute a callback function on each elements in array
//                          
//                          let n = [1, 2, 3];
//                          n.forEach(console.log);
//                          1 2 3
//-------------------------------------------------------------------------------------------
//  array.map()         :   execute a callback function on each elements in array and return a new array
//                          
//                          let n = [1, 2, 3];
//                          function sq(n) => {return n*n;}
//                          sqn = n.map(sq);
//                          1 4 9 
//-------------------------------------------------------------------------------------------
//  array.filter()         :   creates a new array with elements that the funciton is true
//                          
//                          let n1 = [1, 2, 3];
//                          n2 = n1.filter((n) => {return (n > 1);})
//                          console.log(n2)
//                          [2, 3]
//-------------------------------------------------------------------------------------------
//  array.reduce()         :   reduces the array into a value using function
//                          
//                          let n1 = [1, 2, 3];
//                          function checkOut(total, number) => {return total + number;}
//                          let total = n1.reduce(checkOut);
//                          console.log(total);
//                          6
//-------------------------------------------------------------------------------------------
//  static keyword         :   state the properties/methods belongs to the class, not object
//                          
//                          class Car {
//                              static numberOfCars = 0;
//                              Constructor(model) {
//                              this.model = model;
//                              Car.numberOfCars += 1;
//                              }
//                          }
//                          const car1 = new Car("Mustang");
//                          const car2 = new Car("Corvette");
//                          const car3 = new Car("BMW");
//                          console.log(Car.numberOfCars);
//                          3
//  -------------------------------------------------------------------------------------------
//  error handling          :   try,         execute codes that may have error
//                              catch,       if have error, execute
//                              throw,       execute a user defined error
//                              finally,     execute no matter have error or not
//                          
//                          try {
//                              let x = window.prompt("ENter a #");
//                              x = Number(x);
//
//                              if(isNaN(x)) throw "That wasn't a number!";
//                              if(x == "") throw "That was empty";
//
//                              console.log(`${x} is a number`);
//                              }
//                          }
//                          catch(error) {
//                              console.log(error);
//                          }
//                          finally {
//                              console.log("THis always executes");
//                          }
//  -------------------------------------------------------------------------------------------
