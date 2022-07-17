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
//  setTimeout(callBack, ms)    :   invokes callBack function after some milliseconds, asynchronous function (doesnt stop execution)
//                          
//                          setTimeout(firstMessage, 3000);
//                          setTimeout(secondMessage, 6000);
//                          setTimeout(thirdMessage, 9000);
//
//                          function firstMessage() {
//                              alert("First alert");
//                          }
//                          function secondMessage() {
//                              alert("Second alert");
//                          }
//                          function thirdMessage() {
//                              alert("Third alert");
//                          }
//-------------------------------------------------------------------------------------------
//  setInterval(callBack, ms)    :   invokes callBack function after some milliseconds repeatedly, asynchronous function (doesnt stop execution)
//                          
//                          let count = 0;
//                          let max = window.prompt("Count up to what #?");
//                          max = Number(max);
//
//                          const myTimer = setInterval(countUp , 1000);
//                          
//                          function countUp() {
//                              count+= 1;
//                              consol.log(count);
//                              if(count >= max) {
//                                  clearInterval(myTimer);
//                              }
//                          }
//-------------------------------------------------------------------------------------------
//  date object             :   date.toLocaleString() return the datetime string
//                              constructor(year, month, day, hour, minute, second, ms) / constructor("January 1, 2023 00:00:00")
//                          
//                          let count = 0;
//                          let max = window.prompt("Count up to what #?");
//                          max = Number(max);
//
//                          const myTimer = setInterval(countUp , 1000);
//                          
//                          function countUp() {
//                              count+= 1;
//                              consol.log(count);
//                              if(count >= max) {
//                                  clearInterval(myTimer);
//                              }
//                          }
//-------------------------------------------------------------------------------------------
//  synchronous code        :   In an ordered sequence. Step by step linear instrcutions
//                          
//  asynchronous code       :   Out of sequence (Access database, fetch a file, tasks that takes time)
//                          let max = window.prompt("Count up to what #?");
//                          max = Number(max);
//
//                          const myTimer = setInterval(countUp , 1000);
//                          
//                          function countUp() {
//                              count+= 1;
//                              consol.log(count);
//                              if(count >= max) {
//                                  clearInterval(myTimer);
//                              }
//                          }
//-------------------------------------------------------------------------------------------
//  console.time(str)               :   Starts a timer to track how long an operation take
//                          
//  console.timeEnd(str)            :   End the timer
//                          let max = window.prompt("Count up to what #?");
//                          max = Number(max);
//
//                          const myTimer = setInterval(countUp , 1000);
//                          
//                          function countUp() {
//                              count+= 1;
//                              consol.log(count);
//                              if(count >= max) {
//                                  clearInterval(myTimer);
//                              }
//                          }
//-------------------------------------------------------------------------------------------
//  console.time(str)               :   Starts a timer to track how long an operation take
//                          
//  console.timeEnd(str)            :   End the timer
//                          let max = window.prompt("Count up to what #?");
//                          max = Number(max);
//
//                          const myTimer = setInterval(countUp , 1000);
//                          
//                          function countUp() {
//                              count+= 1;
//                              consol.log(count);
//                              if(count >= max) {
//                                  clearInterval(myTimer);
//                              }
//                          }
//-------------------------------------------------------------------------------------------
//  Promise(resolve, reject)        :   Objects that encapsulates results of asynchronous function
//                                  function myDisplayer(some) {
//                                      document.getElementById("demo").innerHTML = some;
//                                    }
//                                    
//                                    let myPromise = new Promise(function(myResolve, myReject) {
//                                      let x = 0;
//                                    
//                                    // The producing code (this may take some time)
//                                    
//                                      if (x == 0) {
//                                        myResolve("OK");
//                                      } else {
//                                        myReject("Error");
//                                      }
//                                    });
//                                    
//                                    myPromise.then(
//                                      function(value) {myDisplayer(value);},
//                                      function(error) {myDisplayer(error);}
//                                    );
//-------------------------------------------------------------------------------------------
//  async keyword                    :     define functions that returns a Promise
//                                   
//                                      async function leadFile(){
//                                          let fileLoaded = false;
//                                    
//                                          if(fileLoaded){
//                                              return "File loaded";
//                                          }
//                                          else{
//                                              throw "File NOT loaded";
//                                          }
//                                      loadFile().then(value => console.log(value)).catch(error => console.log(error));
//-------------------------------------------------------------------------------------------
//  await keyword                    :     makes an async function wait for a Promise
//                                   
//                                      async function loadFile(){
//                                          let fileLoaded = false;
//                                    
//                                          if(fileLoaded){
//                                              return "File loaded";
//                                          }
//                                          else{
//                                              throw "File NOT loaded";
//                                          }
//                                      
//                                      async function startProcess(){
//                                          try{
//                                              let message = await loadFile();
//                                              console.log(message);
//                                          }
//                                          catch(error) {
//                                              console.log(error);
//                                          }
//                                      }
//-------------------------------------------------------------------------------------------
//  .addEventListener(event, function, useCapture)  :     makes an async function wait for a Promise
//-------------------------------------------------------------------------------------------
