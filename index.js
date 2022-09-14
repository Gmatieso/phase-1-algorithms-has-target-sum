// function hasTargetSum(array, target) {

//   // let total = 0;  
//   //  iterate from the beggining to the middle of the array vice versa 
//   for(let i = 0; i < array.length/2; i++)
//   {
//     // // vice versa 
//     let j = array.length -1 -i;
//     // for(let j = array.length -1; j < array.length; j--){

//     // }

// // sum the integer we're Iterating Over to the corresponding Interger at the end of the array 

//   // total = array[i] + array[j]; 

//   // compare sum of two integers with target 

//     if(array[i] + array[j] == target )return true;
   
// }
// }

function hasTargetSum(array, target){
  // looping through the array first time 
  for(let i = 0; i < array.length; i++)
  {
    // looping through the array the second time
    for(let j = (i+1); j < array.length; j++)
    {
      if(array[i] + array[j] == target)
      {
        return true
      }
    }
  }
  return false
}

// hasTargetSum()

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

// // Don't Think hard, Just Think about it
// function hasTargetSum(array, target){
//   // looping through the array first time 
//   for(let i = 0; i < array.length; i++)
//   {
//     // looping through the array the second time
//     for(let j = (i+1); j < array.length; j++)
//     {
//       if(array[i] + array[j] == num)
//       {
//         return true
//       }
//     }
//   }
//   return false
// }
