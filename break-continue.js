// const array = [1,2,3,4,5,6,7,8,9];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(array[i]);
//     if (array[i]>3) {
//         break;
//     }
// }

const array = [1,2,-3,-4,-5,6,7,8,9];
for (let i = 0; i < array.length; i++) {
    // const element = array[i];
    //console.log(array[i]);
    if (array[i]<0) {
        continue;
    }
    console.log(array[i]);
}