

let name: string = "Andy"
let age: number = 30
let teaching: boolean = true

let classes: string[] = ["typescript", "c#", "presenting"]

// console.log(name, age, teaching)
// console.table(classes)

enum TaxesForms {
    standardTaxes = 1040,
    childCredit = "677",
    cryptCredit = 2055,
}

// console.log(TaxesForms.childCredit)

let code: string | number = "11"

code = 11

// console.log(code)

let cars: string[] = ["mustang", "tesla", "accord", "truck"]

// returns the value of the element in the array at postion index
function findIndex(index: number, array: string[]) : string {
    return array[index]
}

// console.log(findIndex(1,cars))

// doesn't return anything (hence "void")
function findIndex2(index: number, array: string[]) : void {
    console.log(array[index])
}

// findIndex2(1,cars)

// let classroom: any = {
//     name: "typescript",
//     duration: 6,
//     boring: false,
// }

interface classroom {
    name: string,
    duration: number,
    boring: boolean,
    room?: string  // ? question marks makes it optional
}

let thisClassroom: classroom = {
    name: "typescript",
    duration: 6,
    boring: false,
    room: "boca code classroom"
}

// console.log(thisClassroom)

let thatClassroom: classroom = {
    name: "javascript 2.0",
    duration: 2,
    boring: true
}