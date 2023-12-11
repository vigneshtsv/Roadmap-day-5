// const a = 1;
// function test(){
//     const b = 2;
//     console.log("block",a,b)
// }
// test();
// console.log("global",a,b);

// const fruits = ["🍍","🍌","🍎","🍊","🍒"]

//!without destructuring
// const pineapple = fruits[0];
// const banana = fruits[1];
// console.log(pineapple);
// console.log(banana);


//! with destructuring
// const [pineapple,bannana,apple,orange,graps,watermeleon = "🍿"] = fruits;
// console.log(apple);
// console.log(bannana);
// console.log(watermeleon);

// console.log(fruits);

// const obj = {
//     names:"john",
//     age: 30,
//     address:{
//       city:"chennai",
//       state: "tamilnadu"
//     }
//    }
     //!without destructuring
    //   console.log(obj.names);
    //   console.log(obj.address.city)
    //   console.log(obj.address.state);

     //!with destructuring
     //const {key} = objectname;

    //  const {names,age} = obj;
    //  console.log(names);
    //  console.log(age);
     
    //!Nested object destructuring

    // const {names,age,address:{city}} = obj
    // console.log(names);
    // console.log(age);
    // console.log(city);

  //! Array of objects destructuring
   
//  const groceryshop = [
//     {item:"apple",price:25, categary:"fruits"},
//     {item:"salt",price: 10, categary:"misc"},
//     {item:"tomato",price: 120, categary:"vegetables"}
//  ] 
 //!without destructuring
//  console.log(groceryshop);
//  console.log(groceryshop[0].item);

 //!with destructuring
//  const [{item,price,categary}]= groceryshop
//  console.log(item)
//  console.log(price);
//  console.log(categary);

//!Array and objects destructuring
// const person = {
//     names: "john",
//     location:["chennai","madurai","paramakudi"]
// }

// const {location:[main,sub1,sub2]}= person;
// console.log(main);
// console.log(sub1);
// console.log(sub2);
// console.log(person.location);

//!normal way to create object
// const order = {
//     id: 1000,
//     pizza:"formhouse" 
// }
// console.log(order)
    //! using shorthand property
    // const id = 1000;
    // const pizza = "farmhouse";
    // const order = {
    //     id,
    //     pizza
    // }
    // console.log(order);
//!Template lterals:-
//   backtick(`) use pani <br> tage ilama line ya break panalam print panrathu aprm $ simple use pani variable ya call panikkalam ex:- (`type string ${a}`)
  // var a = 10;
  // var b = 20;
  // var c = 30;
  // console.log(`the value of a is ${a}
  // the value of b is ${b}
  // the value of c is ${c}`);
//!spread & rest operators:-
  //!spread operators
      //converts a string into character array
      /*ex1:
      const arr = ["guvi"];
      console.log(...arr);*/
      //ex2
      // const arr1 = ["bob","john","doe"]
      // const arr2 = ["elisa","satya","leo"]
      // const arr3 = [...arr1,...arr2]
      // console.log(arr3);
   //! Rest parameter:-
      //it is used inside the function to consider the remaining values.
      
      function test(a,b,...rest){
        let sum =0;
        for(let i=0;i<rest.length;i=i+1){
          sum = sum+rest[i];
        }
        return sum;
      }
      console.log(test(12,13,14,15,16,17));
    
      