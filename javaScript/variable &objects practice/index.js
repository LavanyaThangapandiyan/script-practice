/*//variable using
let name="Lavanya";
let message="Hello "+name+ " we welcome";
//alerting
alert(message);
//logging
console.log(message);*/

/*//Adding
let number1=10;
let number2=10;
let result=number1+number2;
console.log(result);*/

/* 
Variable Rules
1.No java Script Keywords Name
2.Should not start with NUmber
3.No space & no
4.Its Case sensitive
5.use Meaning ful name.
*/
//Ojects
let name="Lavanya";
let age="23";
let gender="Female";
let address="Madurai";
let person={
//key:"value"
name:"lavanya",
age:"23",
gender:"Female",
address:"Madurai",
sibiling:
{
brother:"Naresh",
Sister:"Kanithra"
}
}
//calling object and override 
person.age="22";

//Dot Notation
console.log(person.sibiling.Sister)

//Bracket Notation
console.log(person['gender'])

