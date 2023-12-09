//Parašykite JavaScript programą, kuri gauna atsitiktinius elementus iš masyvo.

const months = ["morka", "burokas", "agurkas", "1984", "kinieciai", ];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);