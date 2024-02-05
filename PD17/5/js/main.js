//5. Suraskite ir išveskite konsolėje visus vaikinius elementus, esančius tam tikrame div’e. Turi
//būti sukurtas div elementas su keletu vaikinių elementų. Turi būti naudojamas DOM.


const dad = document.getElementById("dad");
const kids = dad.children;

for (let i = 0; i < kids.length; i++){
    console.log(kids[i]);
};