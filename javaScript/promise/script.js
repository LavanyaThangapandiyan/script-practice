
//promise


/*const booking=new Promise((resolve,reject)=>
{
   let ticketBooking=false
    if(ticketBooking)
    resolve()
    else
    reject()
})
booking.then(()=>console.log("Thank you For Booking"))
.catch(()=>console.log("Thanks For Trying"))*/

//static method
let reachA=new Promise((resolve,reject)=>{
    const reached=true
if(reached)
setTimeout(resolve,3000,"Ravi Reached")
else
reject("Ravi Not Reached")
})
let reachB=new Promise((resolve,reject)=>{
    const reached=false
if(reached)
setTimeout(resolve,2000,"Naresh Reached")
else
reject("Naresh Not Reached")
})
let reachC=new Promise((resolve,reject)=>{
    const reached=true
if(reached)
setTimeout(resolve,1000,"Nagul Reached")
else
reject("Nagul Not Reached")
})

//promise.all()
Promise.all([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

//promise.allSettled
Promise.allSettled([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

//Promise.any()
Promise.any([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

//
Promise.race([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))







