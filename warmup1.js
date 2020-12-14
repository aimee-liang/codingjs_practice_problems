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
    if (!weekday){
        return true
    } else if (vacation){
        return true
    } else {
        return false
    }
}

/* monkeyTrouble
We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

Examples

monkeyTrouble(true, true) → true
monkeyTrouble(false, false) → true
monkeyTrouble(true, false) → false */

function monkeyTrouble(aSmile, bSmile){
    if (aSmile === bSmile){
        return true
    } else {
        return false
    }
}

/* sumDouble
Given two int values, return their sum. Unless the two values are the same, then return double their sum.

Examples

sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8 */

function sumDouble(a, b){
    if (a === b){
        return (a + b)*2
    } else {
        return a + b
    }
}

/* diff21
Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

Examples

diff21(19) → 2
diff21(10) → 11
diff21(21) → 0 */

function diff21(n){
    if (n <= 21){
        return 21 - n
    } else {
        return (Math.abs(21-n) *2)
    }
}

/* parrotTrouble
We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.

Examples

parrotTrouble(true, 6) → true
parrotTrouble(true, 7) → false
parrotTrouble(false, 6) → false */

function parrotTrouble(talking, hour){
    if (talking === true){
        return true
    } else if (hour < 7 || hour > 20) {
        return true
    } else {
        return false
    }
}

/* makes10
Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

Examples

makes10(9, 10) → true
makes10(9, 9) → false
makes10(1, 9) → true */

function makes10(a, b){
    if (a === 10 || b === 10){
        return true
    } else if (a + b === 10){
        return true
    } else {
        return false
    }
}