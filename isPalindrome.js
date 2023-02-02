// Write your code below
// function isPalindrome(string){
//     const len = string.length;
//     for(let i = 0; i <len/2; i++){
//         if(string[i] !== string[len -1 -i]){
//             return('It is not a palindrome')
//         }
//     }
//     return ('It is a palindrome')
// }

// const value = isPalindrome('racecar')
// console.log(value)


const isPalindrome = str => {
    for (let i = 0; i < str.length; i++){
        let finalIndex = str.length -1 -i

        if(str[i] !== str[finalIndex]){
            return false
        }
    }   
    return true
}
console.log(isPalindrome('racecar'))
console.log(isPalindrome('apple'))


const isPalindromeMethods = str => {
    let reverseStr = str.split('').reverse().join('')
    return str === reverseStr
}
console.log(isPalindromeMethods('racecar'))

const isPalindromeMethodsOneLine = str => str === str.split('').reverse().join('')