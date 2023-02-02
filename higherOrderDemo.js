let names = ['biLly BoB', 'jOe maMa', 'boBby BRown' , 'lUKas Nessi']
let nums = [3,1,7,6,9,4,3,7,3,2,2,1,1,5]


const logNames =function(element, index){
    console.log(`${element} is at the index of ${index}`)
}

names.forEach(logNames)

let filteredArray = nums.filter (num => {
    return num % 2 === 0
})
console.log(filteredArray)

let sum = nums.reduce((acc, curr) => {
    return acc * curr
})
console.log(sum)
// const copyAndChangeArr = (arr, callBack) => {
    //     let newArr = []
    //     for (let i = 0; i< arr.length; i++){
        //         let newValue = callBack(arr[i])
        //         newArr.push(newValue)
        //     }
        //     return newArr
        // }
        
        const strToCamelCase = str => {
                let splitStr = str.split(' ')
                for(i = 0; i <splitStr.length; i++){
                        splitStr[i] = splitStr[i].toLowerCase()
                        if(i !== 0){
                                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1)
                            }
                    
                        }
                        return splitStr.join('')
                    }
                    let mappedArray = names.map(strToCamelCase)
                    console.log(mappedArray)
// const addFive = num => {
//     return num += 5
// }
// console.log(copyAndChangeArr(names, strToCamelCase))
// console.log(copyAndChangeArr(nums, addFive))


class Users {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    greeting(){
        console.log(`hello, my name is ${this.firstName}`)
    }
}
let nameObj = []
names.forEach ((name) => {
    let nameArr = name.split(' ')
    let newUser = new Users(nameArr[0], nameArr[1])
    nameObj.push(newUser)
})
console.log(nameObj)

let firstNameArr  = nameObj.map(user =>{
    return user.firstName
})
let greet =(user) =>{
    user.greeting()
}
nameObj.forEach(greet)
// console.log(firstNameArr)


let array  = [2,3,4,5,6]

array.forEach((element,index,arr) => {
    console.log(`the element at index ${index} in the array ${arr} is ${element}`)
})

let upscaledArr = array.map((element,index,arr) => {
    return element * index
})

console.log(upscaledArr)

let filteredArr = upscaledArr.filter((element,index,) => element % index === 0)

console.log(filteredArr)

let reduceArr = filteredArr.reduce((acc,curr) => {
    console.log(`The added value is ${acc}`)
    console.log(`the current value in the loop is ${curr}`)
    return acc + curr
},0)
console.log(reduceArr)