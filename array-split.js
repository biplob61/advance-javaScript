const nums = [10,20,30,40,50,60,70, 80];
// const part = nums.slice(2,5); //2 is starting index and 5 is stoping index
// console.log(part); //slice dosenot make any changes in the main array
// console.log(nums);

// const removed = nums.splice(2,3);//2 is starting index but 3 is how many element will be removed
// console.log(removed);
// console.log(nums);//it changes the main array

//splice can inject
// const removed = nums.splice(2,3,100,200);/we can inject many property what we want in the removed place
// console.log(removed);
// console.log(nums);

const together = nums.join("");//we can use many thing in join such as empty string(join(" ")) or word or anything we want
console.log(together);

