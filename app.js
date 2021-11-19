/////   CHAPTER 35-38 ////



////    Q1 /////



// function foo() {

//     var a = new Date();
    
//     return a
// }

// document.write( foo());
// console.log( foo());


//////  Q2   ///////////


// function names() {

//     var firstName = prompt("enter your first name");

//     var lastName = prompt("enter your last name ")

//     var fullName = firstName + lastName

//     alert("hello",fullName);

//     console.log("hello" , fullName);

// }

// names();





//////  Q3 //////

// var sum1 = +prompt("enter your number1");

// var sum2 = +prompt("enter your number2")

// function foo() {

//     return sum1 + sum2

    
// }

// document.write( foo());
// console.log( foo());





/////   Q4  //////



// var num1 = +prompt("enter your number 1")

// var opt = prompt ("enter your option")

// var num2 = +prompt ("enter your number 2")



// function calc() {

//     if(opt === "+"){
//         return num1 + num2
//     }else if(opt === "-"){
//         return num1 - num2
//     }else if(opt === "*"){
//         return num1 * num2
//     }else if(opt === "/"){
//         return num1 / num2
//     }else if(opt === "%"){
//         return num1 % num2
//     }else{
//         return ("enter correct option")
//     }
    
// }
// console.log(calc(num1 , opt ,num2))





/////   Q5   ///////



// function square() {
    
//     var num = Math.pow(2,4)

//     return num

// }

// console.log( square() )





//////  Q6  /////

    

    // var number = +prompt("enter your number")
    
    // var fact = 1;
    
    // function factorial(n) {
    //     if(n>number){
    //         return;
    //     }
    //     fact = fact * n;
    //     console.log(fact)
    //     n++;
    //     factorial(n);
    // }


    // factorial(1);




    //////  Q7 //////

    
//     function counts() {

//         var strCoun = +prompt("enter your number1")

//         var endCoun = +prompt("enter your number2")
        
//         var mixCoun = strCoun + endCoun

//         return mixCoun
        
//     }

// console.log(counts())




    /////   Q8  //////

// var base = +prompt ("enter base")

// var per = +prompt("enter per")


// function calcHypotenus() { 
//     return Math.sqrt(base*base  + per*per) ; 
// } 

// console.log(calcHypotenus())




//////  Q9  //////

// var width = +prompt("Enter a whole number for the width of your rectangle.");
// var length = +prompt ("Enter a whole number for the length of your rectangle.");

// function area (width,length) {
// return  width  * length;
// }

// console.log("The area of your rectangle is " + area (width , length));





/////   Q10   //////////////

// function strings() {
    
//     var string = prompt ("enter a string");
//     var stringArr = string.split("");
//     var stringArrRev = stringArr.reverse();
//     var revString = stringArrRev.join("");
//     console.log(revString);
//     if(string === revString){
//         console.log(string ,"is Palindrom ")
//     }else{
//         console.log(string ,"is not Palindrom ")
//     }

// }

// console.log(strings())





/////   Q11     /////


// function uppercase(str) {

//     var array = str.split(" ");

//     var newArray = [];
    
//     for(var i = 0 ; i < array.length; i++){
        
//         newArray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1) ) ;
//     }
//        return  newArray.join(" ");
//     }



// console.log(uppercase('the quick brown fox'))



/////   Q12     ///////


//   function find_longest_word(str)
//   {
//     var array1 = str.match(/\W[a-z]{0,}/gi);
//     var result = array1[0];
  
//     for(var i = 1 ; i < array1.length ; i++)
//     {
//       if(result.length < array1[i].length)
//       {
//       result = array1[i];
//       } 
//     }
//     return result;
//   }
//   console.log(find_longest_word('Web Development Tutorial'));
  



//////  Q13  ////////



// function charCount(str, letter) 
// {
//  var letterCount = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) === letter) 
//       {
//       letterCount += 1;
//       }
//   }
//   return letterCount;
// }

// console.log(charCount('JSResourceS.com', 'o'));



