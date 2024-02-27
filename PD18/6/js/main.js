const darbuotojai =[
    {
        vardas: 'rymvydas',
        pavarde: 'programvidas',
        atlyginimas: 6000
    },

    {
        vardas: 'guste',
        pavarde: 'testuoteviciene',
        atlyginimas: 3000
    }
]

function jo(obj, min){
    let piratasarr = [];
    for(let i = 0; i < darbuotojai.length; i++){
        if(obj[i].atlyginimas > min){
            piratasarr.push(obj[i]);
            console.log(piratasarr)
        }
    }
}


jo(darbuotojai, 4000);