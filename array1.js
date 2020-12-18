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