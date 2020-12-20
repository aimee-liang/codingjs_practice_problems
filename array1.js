/* firstLast6
Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more. */

function firstLast6(nums){
    if (nums[0] === 6 || nums[nums.length-1] === 6) return true
    return false
}

/* sameFirstLast
Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal. */

function sameFirstLast(nums){
    if (nums.length >= 1 && nums[0] === nums[nums.length-1]) return true
    return false
}

/* makePi
Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}. */

function makePi(){
    let arrayOfPi = [3, 1, 4]
    return arrayOfPi
}

/* sum3
Given an array of ints length 3, return the sum of all the elements. */

function sum3(nums){
    return nums.reduce((a , b) => a + b, 0)
}

/* rotateLeft3
Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}. */

function rotateLeft3(nums){
    let first = nums.splice(0,1)
    return nums.concat(first)
}

/* reverse3
Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}. */

function reverse3(nums){
    let newArr = []
    for (let i = nums.length - 1; i >= 0; i++){
        newArr.push(nums[i])
    }
    return newArr
}

/* maxEnd3
Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array. */

function maxEnd3(nums){


}

/* sum2
Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0. */
function sum2(nums){
    if (nums.length === 0) {
        return 0
    } else {
    let newSum = nums.splice(0, 2)
    return newSum.reduce((acc, cur) => acc+cur, 0)
    }
}

/* makeEnds
Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more. */

function makeEnds(nums){
    return [nums[0], nums[nums.length-1]]
}