// complie code: tsc basic.ts
// show console: ts-node basic.ts

// ======type basic======
let isDone: boolean = false
let age: number = 10
let myName: string ='ProJbh'
let msg: string = 'hello, ${myName}'

// difference between undefined and null
let u:undefined = undefined
let n:null = null

// should avoid using any type if we know the type.
// typescript type check is disabled when using any.
let unknown:any = 4
unknown='hello'
unknown=true

// ======array & tuple basic======
let arrayOfNmubers: number[] = [1,2,3,4]
arrayOfNmubers.push(3)

function test(){
    console.log(arguments)
}
// tuple
let user:[string,number]=['ProJbh',30]
user.push('123')

// ======interface basic=====
// ? indicates optional variable
interface Person{
    readonly id:number
    name:string;
    age?:number;
}

let projbh : Person = {
    name: "ProJbh",
    id: 1
}

// difference between const and readonly
// const is used for variables
// readonly is used for paramaters

// ======function basic=====
// CANNOT add typed variable after optional variable
function add(x:number,y:number,z?:number):number{
    if(typeof z === 'number'){
        return x+y+z
    }else{
        return x+y
    }
}
let result = add(1,2)
// function types can be directly assigned to variables
const add1 = (x:number,y:number,z?:number):number =>{
    if(typeof z === 'number'){
        return x+y+z
    }else{
        return x+y
    }
}
// after : is always be the type, and no related to code logic.
let add2:(x:number,y:number,z?:number)=>number = add1

// using interface describes a function
interface ISum{
    (x:number,y:number,z?:number):number
}

let add3:ISum = add1

// ======type interface=====
// based on given value, assign a type to the variable
let a = 123
// union types
let numOrStr:number|string
numOrStr = 1
numOrStr = 'hello'
numOrStr.length

// using as assign a type to variable
function getLength(input: string|number):number{
    const str = input as string
    if (str.length){
        return str.length
    }else{
        const num = input as number
        return num.toString().length
    }
}

// type guard
function getLength2(input: string|number):number{
    if (typeof input==='string'){
        // now input is string type
        return input.length
    }else{
        // now input is number type
        return input.toString().length
    }
}

// ======enums=====
enum Direction{
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
// can transfer enum to const enum to prove the performance
const enum Direction2{
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
// not all enums can transfer to const enum
// only constant number enum can transfer to const enum
// computing number enum CANNOT transfer to const enum

const value = 'RIGHT'
if (value === Direction.Right){
    console.log('go right!')
}

// ======generics=====
function echo<T>(arg:T):T{
    return arg
}
const result2 = echo('str')

function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}
const result3 = swap(['string',20])

interface IwithLength{
    length:number
}
function echoWithLength<T extends IwithLength>(arg: T):T{
    console.log(arg.length)
    return arg
}
// duck typing: if a variable contains length 
// then it can be the input of the echoWithLength function
const str1 = echoWithLength('hello')
const obj = echoWithLength({length : 10})
const arr = echoWithLength([1,2,3])

interface IQueue<T>{
    push(item: T): void;
    pop(): T|undefined;
}

// fifo queue
class Queue<T>implements IQueue<T>{
    private data:T[] = []
    push(item: T){
        return this.data.push(item)
    }
    pop(): T | undefined{
        return this.data.shift()
    }
}
const queue = new Queue<number>()
queue.push(2)
queue.push(3)
console.log(queue.pop()?.toFixed())

interface KeyPair<T,U>{
    key: T,
    value: U
}
let kp1 : KeyPair<number,string> = {key:1,value:'20'}
let kp2 : KeyPair<string,number> = {key:'30',value:2}
let arr1:number[]=[1,2,3]
let arr2:Array<number> = [1,2,3]

// ======type alias=====
// keyword 'type'
let sum : (x:number,y:number)=>number | undefined
type PlusType = (x:number,y:number)=>number | undefined
let sum2: PlusType
type StrOrNum = string | number
let rst:StrOrNum = '1'
let rst1:StrOrNum = 2
type Direction3 = 'UP'|'DOWN'|'RIGHT'|'LEFT'
let toWhere : Direction3 = 'DOWN'

interface IName{
    name:string
}
type IPerson = IName & {age:number}
let person:IPerson = {name : 'ProJbh',age:30}

// build-in types
Math.pow(2,2)
// DOM and BOM
let body = document.body
let allLis = document.querySelectorAll('li')

document.addEventListener('click', (e)=>{
    e.preventDefault()
})

// Utility Types
let user1:IPerson={name:'abc',age:345}
type IPartial = Partial<IPerson>
let user2:IPartial={name:'234'}
let user3:IPartial={age:234}
let user4:IPartial={}

type IOmit = Omit<IPerson,'age'>
let user5:IOmit = {name:'123'}