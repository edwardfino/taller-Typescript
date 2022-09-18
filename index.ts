
const Name : string = "Edward Fino";

const favoriteNumber : number = 11;

const animals : string[] = [ "horse", "rabbit", "dog", "cat", "fish", "eagle", "bird", "bear", "shark", "lion"]


interface Organization {
    Name: string
    slogan: string
    numberWorkers: Number
    officeHours: string
    remoteWork: string
    creationDate: Number
    workSaturday?: string
}

const Organization: Organization = {
    Name: "Entregamos a tiempo Ltda",
    slogan: "Entregas a tiempo y seguras",
    numberWorkers: 540,
    officeHours: "7:00-17:00",
    remoteWork: "yes",
    creationDate: 2/5/2003,    
}

interface Students{
    name: string
    age: Number
    course: Number
    address?: string
}

const students: Students[] = [
    {name: "Alicia Guerra", age: 17, course: 702, address:"av 123 # 25-09"},
    {name: "Anderson Romero", age: 18, course: 703},
    {name: "Alberto Quevedo", age: 16, course: 703, address: "cra 55 # 44-33"},
    {name: "Margarita Beltran", age: 19, course: 704, address: "calle 145 a # 66- 12"},
    {name: "Mariana Jimenez", age: 20, course: 701,},
    {name: "Esteban Ramirez", age: 16, course: 702, address: "diag 67 # 74 a 00"},
    {name: "Jesus Rodriguez", age: 22, course: 701,},
    {name: "Natalia Perez", age: 20, course: 703, address: "calle 84 b # 55- 43"},
    {name: "Ernesto Bustos", age: 21, course: 704},
    {name: "Luisa Leon", age: 18, course: 703, address: "transv 77 # 126-87"}    
]





