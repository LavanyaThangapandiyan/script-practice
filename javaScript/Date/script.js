function findAge()
{
    var input=document.getElementById("dob").value;
    console.log(input);
     // convert user input value into date object
     var birthDate=new Date(input);
     console.log("BirthDate" +birthDate);
     // get difference from current date;
     var difference=Date.now()-birthDate.getTime();
     var ageDate=new Date(difference);
     var CalculateAge=Math.abs(ageDate.getUTCFullYear()-1970);  //years passed till 1970
     alert("Your Age Is : "+CalculateAge);

}

/*
//Print the string Format of current Mechine Date
const date=new Date();
console.log(date);*/

/*//Here create customn Date object
const now=new Date('May 26 2023');

//object using methods of date 
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getMonth());*/

/* // custom change date using set method
const anotherDate=new Date();
anotherDate.setFullYear('1999');
console.log(anotherDate.getFullYear());
*/
