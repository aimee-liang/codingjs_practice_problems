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