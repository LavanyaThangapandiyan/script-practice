/*//====>for-in use objects
const person={
  name:'Lavanya',
  age:23,
  gender:'female'
};
for(let key in person)
{
  console.log(key+" : "+person[key]);
}
//Array
let names=['lavanya','Ravi','Raghul'];
for(let key in names)
{
  console.log(names[key ]);
}
*/
//for of loop -->it automatic takes the index of value
Array
let names=['lavanya','Ravi','Raghul'];
for(let name of names)
{
  console.log("Name :"+name);
}


 /*//while
 let i=10;
 while(i>=1)
 {
  if(i%2!==0)
  {
    console.log("Odd NUmber while" +i);
  }
  i--;
 }
 //Do while loop
do{
if(i%2!==0)
{
  console.log("Odd Number" +i);
}
i--;
}
while(i<=10)*/



  /* //for loop using Odd number
    for(let i=0;i<=20;i++)
    {
        if(i%2!==0)
        {
            console.log(" Odd Number"+i);
        }  
    }*/