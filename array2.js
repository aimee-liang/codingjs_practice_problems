/* countEvens
Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1. */
function countEvens(nums){
    let total = 0
    for (let i = 0; i < nums.length; i++){
        if (nums[i] % 2 === 0){
        total += 1
        }
    }
    return total
}