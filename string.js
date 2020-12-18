/* helloName
Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!". */

function helloName(name){
    return `Hello ${name}!`
}

/* makeAbba
Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi". */

function makeAbba(a, b){
    return a+b+b+a
}