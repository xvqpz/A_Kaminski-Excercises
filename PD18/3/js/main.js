const knyga1 ={
    autorius: "Chipinkos",
    name : "Chipinkos comics vol 1",
    puslapiai : 34
}

const knyga2 ={
    autorius: "Tadas Valanciunas",
    name : "vairavimas atbulom",
    puslapiai : 789
}

const knyga3 ={
    autorius: "Marina Babiene",
    name : "Seimos Receptai : Fentas",
    puslapiai : 20
}

function labas(obj) {
    console.log(obj.autorius);
    console.log(obj.name);
    console.log(obj.puslapiai);
};

labas(knyga1)
labas(knyga2)
labas(knyga3)