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

/* has23
Given an int array length 2, return true if it contains a 2 or a 3. */

function has23(nums){
    for (let i = 0; i < nums.length; i++){
        if (nums.includes(2) || nums.includes(3)){
            return true
        } else {
            return false
        }
    }
}

/* no23
Given an int array length 2, return true if it does not contain a 2 or 3. */

function no23(nums){
    for (let i = 0; i < nums.length; i++){
        if (nums.includes(2) || nums.includes(3)){
            return false
        } else {
            return true
        }
    }
}

/* double23
Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2. */

function double23(nums){
    if (nums.length === 0 || nums.length === 1) return false
    if (nums[0] === nums[nums.length-1]) return true
    return false
}

/* plusTwo
Given 2 int arrays, each length 2, return a new array length 4 containing all their elements. */

function plusTwo(a, b){
    return a.concat(b)
} 

/* frontPiece
Given an int array of any length, return a new array of its first 2 elements. If the array is smaller than length 2, use whatever elements are present. */

function frontPiece(nums){
    if (nums.length <= 2) return nums
    let newArr = nums.splice(0, 2)
    return newArr
}

/* commonEnd
Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more. */

function commonEnd(a, b){
    if (a[0] === b[0] || a[a.length-1] === b[b.length-1]) return true
    return false
}

/* middleWay
Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements. */

function middleWay(a, b){
    return [a[1], b[1]]
}

/* start1
Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as their first element. */

function start1(a, b){
    let count = 0
    if (a[0] === 1){
        count += 1
    }
    if (b[0] === 1){
        count += 1
    }
    return count
}