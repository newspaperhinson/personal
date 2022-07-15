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
//                          function sq(n) => {return n*n}
//                          sqn = n.map(sq);
//                          1 4 9 
//-------------------------------------------------------------------------------------------