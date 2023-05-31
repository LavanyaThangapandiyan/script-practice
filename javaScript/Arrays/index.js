/* //Arrays

let favColor=["Black","Red","Blue"] //array
//find index of Value
console.log(favColor[0]);
//find length
console.log(favColor.length);
*/

let cities=["chennai","Madurai","Trichy"];
let numbers=[78,56,67,50];

//push-->add element to the end
cities.push("Covai");
console.log(cities);
//pop-->Remove the End Element
console.log(cities.pop());
//shitf -remove element from startof the array
console.log(cities.shift());
console.log(cities);

//unshift-adds element to the start of the array
console.log(cities.unshift("chennai"));
console.log(cities);

//reverse
cities.reverse();
console.log(cities);

//join-convert array to string
let string=numbers.join()
console.log(string);


//split--convert string to array
let str="a,b,c,d,e,f,g,h";
let arr=str.split(',');
console.log(arr);

//concat and spread operator
let first=[1,2,3]
let second=[4,5,6]
let join=[first,second]
console.log(join);
let joinarr=first.concat(second)
console.log(joinarr);
//spread
let joined=[...first,...second]
console.log(joined);


/*
//martrix
let martrix=[[3,4,5],[3,3,3],[1,2,3]]
console.log(martrix);*/

