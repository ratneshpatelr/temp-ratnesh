// Variable

// let greetings

// greetings = 'Hello, How are you?'

// alert(greetings)
// console.log(greetings)

// let user = 'john', age = 20, greetings = 'Hello, How are you'

// let firstname = 'Ratnesh'
// let lastname = 'patel'
// console.log(firstname + ' ' + lastname + ' ', 'without literals')

// console.log(`${firstname} ${lastname}`, 'with literals ')

// password checker -> task

// let username = prompt('Enter your Username')
// if (username === 'Piyush') {
//   let password = prompt('Enter your Password')
//   if (password === '1234') {
//     alert('Welcome to my website')
//   } else if (password === '' || password === null) {
//     alert('canceled')
//   } else {
//     alert('Wrong Password')
//   }
// }

// objects
// 1st syntax
// let user  = new Object()

// 2nd syntax
// let user1 = {
//   firstName: 'Ratnesh',
//   lastName: 'patel',
//   age: 26,
// }
// delete user1.age

// alert('firstname is ' + user1.firstName)
// console.log('lastname is ' + user1.lastName)
// console.log('age is' + user1.age)

// let user = {
//   name: 'piyush',
//   age: 30,
// }

// let key = prompt('What do you want to know about the user', 'name')

// alert(user[key])

// let makeUser = (name, age) => {
//   return {
//     // shorthand
//     name,
//     age,
//   }
// }

// let user = makeUser('piyush', 28)
// alert(user.name)

//existence

// let user = { name: 'Piyush' }
// let key = 'name'

// alert(key in user)

// looping in objects

// let user = {
//   name: 'Piyush',
//   age: 28,
//   isAdmin: true,
// }

// for (let key in user) {
//   alert(key)
//   alert(user[key])
// }

// let message = 'Hello'
// let phrase = message
// console.log(phrase)

// let user = {
//   name: 'Piyush',
// }
// let admin = user

// admin.name = 'ratnesh'
// alert(user.name)

// let user = {
//   name: 'Piyush',
//   age: 28,
//   isAdmin: true,
// }

// Object.assign(user, { name: 'Ratnesh' })

// alert(user.name)

// let user = {
//   name: 'Piyush',
//   age: 28,
// }

// user.sayHi = function () {
//   alert('Hi')
// }

// user.sayHi()

// functions in objects

// let user = {
//   name: 'Piyush',
//   age: 30,
//   sayHi() {
//     alert(this.name)
//   },
// }
// user.sayHi()

// let user = {
//   name: 'Piyush',
//   age: 30,
//   sayHi() {
//     alert(user.name)
//   },
// }

// let admin = user
// user = null

// admin.sayHi()

// let user = { name: 'Piyush' }
// let admin = { name: 'Admin' }

// function sayHi() {
//   alert(this.name)
// }
// user.f = sayHi
// admin.f = sayHi

// user.f()
// admin.f()

// calculator

// let calculator = {
//   sum() {
//     return this.a + this.b
//   },
//   subtract() {
//     return this.a - this.b
//   },

//   multiply() {
//     return this.a * this.b
//   },
//   read() {
//     this.a = +prompt('a', 0)
//     this.b = +prompt('b', 0)
//   },
// }

// calculator.read()
// alert(calculator.sum())
// alert(calculator.multiply())
// alert(calculator.subtract())

// ladder

// let ladder = {
//   step: 0,
//   up() {
//     this.step++
//     return this
//   },
//   down() {
//     this.step--
//     return this
//   },
//   showStep() {
//     alert(this.step)
//     return this
//   },
// }
// ladder.up().up().up().down().showStep().up().up().down().showStep()

// let user = {}
// alert(user?.address?.block)

// let str = 'Piyush'
// alert(str.toUpperCase())

// let n = 1.234567
// alert(n.toFixed(2))

// let zero = new Number(0)

// if (zero) {
//   alert('Zero is truthly!!')
// }

// add a string property

// let str = 'hello'

// str.test = 5  //(*)
// alert(str.test)

// primitives are not objects, they cant store additional data

// numebers

// let billion = 1e9
// alert(billion)

// let num = 24

// alert(num.toString(16))

// let num = 1.23456 // 123
// alert(Math.round(num * 100))

// alert(Math.random())

// alert(Math.max(3, 5, -10, 0, 20))

// const randomVerificationNumber = Math.floor(Math.random() * 5)
// alert(randomVerificationNumber)

// const randomVerifcationNumber = []

// for (let i = 0; i < 6; i++) {
//   const randomNumber = Math.floor(Math.random() * 10)
//   randomVerifcationNumber.push(randomNumber)
// }
// console.log(randomVerifcationNumber.join(''))

// let pete = 'pete1'
// let guestList = `       Guests: * john *${pete} * Mary`.trim()
// alert(guestList)

// let str = '        hello world'
// console.log(str)
// str = str.trim()
// console.log(str)

// check for spam

// write a function that returns true if string contains word 'clothes' or 'pajamas' otherwise false

// function checkSpam(str) {
//   let lowerStr = str.toLowerCase()
//   return lowerStr.includes('clothes') || lowerStr.includes('pajamas')
// }
// //Piyush piyush

// alert(checkSpam('My favorite CLotHes is PaAMAS'))

// declaration of arrays with two syntaxes
// let arr = new Array();
// let arr1 = []

// let fruits = ['Apple', 'Orange', { name: 'Piyush' }, 'watermelom']

// alert(fruits[2].name)
// push, pop, shift, unshift

//push

// let fruits = ['Apple', 'Orange']
// fruits.push('Watermelon')
// console.log(fruits)

// pop

// let fruits = ['Apple', 'Orange', 'Watermelon']
// fruits.pop()
// console.log(fruits)

// shift -> extracts the first element of array and returns it

// let fruits = ['Apple', 'Orange', 'Watermelon']
// fruits.shift()
// console.log(fruits)

// unshift -> add the elements to the beginning of array

// let fruits = ['Apple', 'Orange', 'Watermelon']
// fruits.unshift('Pear')
// console.log(fruits)

// splice -> delete an element from the array

// let arr = ['A', 'E', 'I', 'O', 'U']
// // delete arr[1]
// arr.splice(1,1,)

// console.log(arr)

// slice  -> much easier than splice

// let arr = ['A', 'E', 'I', 'O', 'U']
// console.log(arr.slice(1, 4))

// let arr = [1, 23, 4]
// console.log(arr.concat([5, 46]))

// let arr = [1, 2]

// let arrayLike = {
//   0: 'Something',
//   1: 'Awesome',
//   length: 2,
// }

// console.log(arr.concat(arrayLike))

// sort in decreasing order

// let arr = [1, 2, 4, 3, 96]
// let arr1 = arr.concat([0, 55])
// console.log(arr1.sort((a, b) => b - a))
