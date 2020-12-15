/* endUp -- need to return to
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
 */

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
 */

function monkeyTrouble(aSmile, bSmile){
    if (aSmile === bSmile){
        return true
    } else {
        return false
    }
}

/* sumDouble
Given two int values, return their sum. Unless the two values are the same, then return double their sum.
*/

function sumDouble(a, b){
    if (a === b){
        return (a + b)*2
    } else {
        return a + b
    }
}

/* diff21
Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.
*/

function diff21(n){
    if (n <= 21){
        return 21 - n
    } else {
        return (Math.abs(21-n) *2)
    }
}

/* parrotTrouble --need to return to
We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.
 */

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
 */

function makes10(a, b){
    if (a === 10 || b === 10){
        return true
    } else if (a + b === 10){
        return true
    } else {
        return false
    }
}

/* nearHundred
Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.
 */

function nearHundred(n){
    if (Math.abs(n) < 90){
        return false
    } else if (Math.abs(n) >= 90 && Math.abs(n) <=110){
        return true
    } else if (Math.abs(n) < 190){
        return false
    } else if (Math.abs(n) >= 190 && Math.abs(n) <= 210){
        return true
    }
}

/* posNeg
Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.
 */

function posNeg(a, b, negative){
    let product = a * b
    if (product < 0 && negative === false){
        return true
    } else if (a < 0 && b < 0 && negative === true){
        return true
    } else if (product > 0 && negative === false){
        return false
    } else {
        return false
    }
}

/* notString
Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.
 */

function notString(str){
    let subString = "not"
    let newString = str.slice(0, 3)
    if (newString.includes(subString)){
        return str
    } else {
        return "not " + str
    }
}

/* missingChar
Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).
 */

function missingChar(str, n){
    return str.replace(str.charAt(n), "")
}

/* frontBack --need to return to 
Given a string, return a new string where the first and last chars have been exchanged.

Examples

frontBack('code') → eodc
frontBack('a') → a
frontBack('ab') → ba */

function frontBack(str){

}

/* front3
Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.
*/

function front3(str){
    if (str.length <= 3){
        return str+str+str
    } else {
        let newStr = str.slice(0,3)
        return newStr+newStr+newStr
    }
}

/* or35
Return true if the given non-negative number is a multiple of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)
*/

function or35(n){
    if (n % 3 === 0 || n % 5){
        return true
    } else {
        return false
    }
}

/* startHi
Given a string, return true if the string starts with 'hi' and false otherwise.
*/

function startHi(str){
    let subString = "hi"
    let newString = str.slice(0,3)
    if (newString.includes(subString)){
        return true
    } else {
        return false
    }
}

/* icyHot
Given two temperatures, return true if one is less than 0 and the other is greater than 100.
 */

function icyHot(temp1, temp2){
    if (temp1 < 0 && temp2 > 100){
        return true
    } else if (temp1 > 100 && temp2 > 100){
        return false
    } else if (temp1 > 0 && temp2 > 100){
        return false
    } else if (temp1 > 100 && temp2 < 0){
        return true
    } else if (temp1 < 0 && temp2 >= 100){
        return false
    }
}

/* in1020 --need to return to
Given 2 int values, return true if either of them is in the range 10..20 inclusive.

Examples

in1020(12, 99) → true
in1020(21, 12) → true
in1020(8, 99) → false */

function in1020(a, b){

}

/* lastDigit
Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % 'mod' operator computes remainders, so 17 % 10 is 7.
 */

function lastDigit(a, b){
    let lastDigitOfA = a % 10
    let lastDigitOfB = b % 10

    if (lastDigitOfA === lastDigitOfB){
        return true
    } else {
        return false
    }
}

/* stringE
Return true if the given string contains between 1 and 3 'e' chars.
*/

function stringE(str){
    let count = {}
    str = str.split('').forEach((i){
        count[i] = (count[i] || 0) + 1
    })
    if (0 < count["e"] && count["e"] < 4 ){
        return true
    } else {
        return false
    }
}

/* intMax
Given three int values, a b c, return the largest.
*/

function intMax(a, b, c){
    let largest = (a > b ) ? largest = a : largest = b
    if (largest > c){
        return largest
    } else {
        largest = c
    }
    return largest
}

/* close10
Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.
*/

function close10(a, b){
    let diffA = Math.abs(10 - a)
    let diffB = Math.abs(10 - b)

    if (diffA < diffB){
        return a
    } else if (diffA > diffB) {
        return b
    } else if (diffA === diffB) {
        return 0
    }
}