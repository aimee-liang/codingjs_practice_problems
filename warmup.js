/* 
Warmup-1 -- endUp
Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. 
Note that str.toUpperCase() returns the uppercase version of a string.

Examples:
    endUp('Hello') → HeLLO
    endUp('hi there') → hi thERE
    endUp('hi') → HI 
*/

function endUp(str){
    if (str.length < 3){
        return str.toUpperCase()
    } else {
        // turn to array
        // iterate from the back
        // push the three characters to a new array
        // reverse, make uppercase, join
        // join back with the other characters
    }
}