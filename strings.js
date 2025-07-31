// let str="Gilgit Baltistan"; //for counting length we use 'str.lenght..
 
// //We can access each character of str using:
// console.log(str[7]); //and in programming language it starts from 0..Means For accessing  'G' we write 0.


//template literals...Just like string but easier than that to use..

// let obj = {
//     item:"pen",
//     price: 10,
// } ;
// console.log("The price of ",obj.item,"is",obj.price,"rupees");   //<- thihs is simple method

// let output = `The price of ${obj.item} is ${obj.price} rupees.`; //<- This is template literal
// console.log(output)

// let templateliterals = `This is a number of ${1+2+3}`;
// console.log(templateliterals);

//escape characters
// console.log("Yasat \n the business") //text will move to next line..
// console.log("Yasat \t the business") // tab space..

//strings methods

// let str = "Yasat.the business";
// let newStr = str.toUpperCase(); //it can also b written as 'str = str.toUpperCase'
// console.log(str); //<- the real str is always remian unchanged..we should save the newstr in a variable.
// console.log(newStr); 

//in js as it is immutable, the old str never changes..We should have to save the newStr in a new variable to create the changes...


// let str = "   My   Village   "; //remove the whitespaces..
// console.log(str.trim());

// let str1 = "Myvillage ";
// console.log(str1.slice(2, 6)); //it will give you a part of your string and the ending number will not b counted.

//concat is used to connect two or more strings..we can also use + insstead of concatination..
// let str1 = "Yasat";
// let str2 = "the business";
// let result = str1.concat(str2);
// let result1 = "I am working on "+ str1 + str2;
// console.log(result);
// console.log(result1);

// let result= "Balti"+123;
// console.log(result);

//replace value is used to replace a value with some other value...

// let str = "Baltistan";
// console.log(str.replace("Balt", "Pak")); //in repeated value 'replace' will replace a one value..but if we write'replaceAll' it wil replace all repeated values..

//charAt value

// let str =" I am Pakistani";
// console.log(str.charAt(3)); //it will identifie the character as we put a number.

//practice..
 let username = prompt("Please enter your name :");
 console.log("@",username,username.length);


 let fullName = prompt("Please enter your name");
 let sug = "@"
 let result = sug+fullName+fullName.length
 console.log(result);