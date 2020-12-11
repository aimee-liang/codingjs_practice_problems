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
    if (str.length < 3){ // edge cases
        let newString = str.toUpperCase()
        return newString
    } else {
        str = str.replace(/\s+/g, ''); //removes whitespace from string if there
        for (let i = str.length, )
    }
}