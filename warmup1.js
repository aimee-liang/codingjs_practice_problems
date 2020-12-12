/* endUp
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
        // turn to array and save white space in new array
        let stringToArray = str.split(/(\s+)/);
        let capitals = []
        let index = 3
        // iterate from the back & push the characters to a new array
        for (let i = stringToArray.length-1; i >=0; i++){
            capitals.push(stringToArray[i])
        }
        // reverse, make uppercase, join
        let lastThree = capitals.splice(index).toUpperCase().reverse().join()
        // join back with the other characters
        let restOfString = capitals.reverse().join()
        return restOfString.concat(lastThree)
    }
}

/* sleepIn
The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

Examples

sleepIn(true, true) → true
sleepIn(true, false) → false
sleepIn(false, true) → true */

function sleepIn(weekday, vacation){
    // weekday === true
    // vacation === true
    // if (!weekday) == false
    if (weekday || vacation){
        return true // if it is a weekday or we're on vacation
    } else if (!weekday){
        return true // if it's a weekend, we sleep in and it's true
    } else if {

    }
}
