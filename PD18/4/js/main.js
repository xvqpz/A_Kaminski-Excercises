const zmogus ={
    ka_vairuoja: 'land cruiser 300',
    ugis: '140cm',
    age: 48
}

function print(obj) {
    for(const info in obj){
        console.log(info, obj[info]);
    }
}

print(zmogus)