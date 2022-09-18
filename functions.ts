
function rad (a: number,b: number): number {
    return Math.pow (a , b);

} 

console.log (rad(3.1416,2));


function numMayor (a: number, b: number, c: number): number {
    return Math.max(a,b,c); 
}

console.log (numMayor(16,42,7));


interface Name {
    name: string
    lastName:string
}
function createName(): Name {
    return {
        name: "Edward",
        lastName: "Fino" 
}

}

console.log ("hello i'm", createName);


