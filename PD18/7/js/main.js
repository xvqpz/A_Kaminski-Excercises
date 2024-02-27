//Parašykite JavaScript funkciją, kuri kopijuoja JavaScript objektą, 
//leidžiant keisti naujo objekto savybes nepaveikiant originalo.

const komputeris ={
    marke: 'dell',
    ram: 16
}

function kopijuojamIrIsardom(obj, savybe, kaNori){

    const clone = {
        ...obj
    }

    clone[savybe] = kaNori

    console.log(clone)
    console.log(obj)
}

kopijuojamIrIsardom(komputeris, "ram", 0)