export {}
const message = 'Welcome'
console.log(message)

const isActive = true
console.log(`Without type: ${isActive}`)

const areActivated: boolean = true
const phoneNumber: number = 13421
const name: string = 'Brainware'

console.log(`With type: ${areActivated}`)
console.log(`Name: ${name}, phoneNumber: ${phoneNumber}`)

const isNew: boolean = null
const myName: string = undefined

console.log(`case 1: ${isNew}, case 2: ${myName}`)

const list1: number[] = [1, 3, 2, 33]
const tupples: [string, number] = ['tes', 12]

console.log(`List1: ${list1}, ${tupples}`)

enum Color {
  Red,
  Green,
  Blue
}
const c: Color = Color.Green
console.log(c)

let randomVal: any = 21
randomVal = 'Hell'
randomVal = false
console.log(`Random value with any datatype: ${randomVal}`)

let a
a = 10
a = true

let b = 20

let multiType: number | boolean
multiType = 20
multiType = true

let anyType: any
anyType = 10
anyType = false

// Function
const add = (num1: number, num2?: number) => {
  return num2 ? num1 + num2 : num1
}

console.log(add(5, 2))
console.log(add(5))

interface Person {
  firstname: string
  lastname?: string //use ternary operator to mark the parameter as optional
}

const fullName = (person: Person) => {
  console.log(`${person.firstname} ${person.lastname}`)
}

const me = {
  firstname: 'Paul',
  lastname: 'Jenkins'
}

const other = {
  firstname: 'Tom'
}

fullName(me)
fullName(other)