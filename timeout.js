console.log("before");
console.log(222);
console.log(333);
console.log(444);


function doSomething(){
    console.log(333);
}
console.log("after");
console.log(222);
// setTimeout(doSomething);//sb kaj sesh korar por ei kaj korbe
setTimeout(doSomething,4000);//time set kira jay mili sec a
console.log(444);


// setTimeout(function task(){
//     console.log("late");
// },3000);
setInterval(function task(){
    console.log("again and again");
},3000);



