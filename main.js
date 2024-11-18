// ES1

let numbers = [2, 5, 10, 6, -3, 25, -12, 8, 15, 98];
numbers.sort((a, b) => b - a)
numbers.sort((a, b) => a - b)
console.log(numbers.join());


// ES2
function palindroma(str) {
    let cleanedStr = str.replace(/\W/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join
    ('');
}
let stampa = "i topi non avevano nipoti";
console.log(palindroma(stampa));


// ES3

function operazioni(a, b , operazioni) {
    let c = [];
    for (let i = 0 ; i < a.length; i++) {
        switch (operazione ){
            case "addizzione":
                c.push(a[i] + b[i]);
                break;
            case "sottrazione":
                c.push(a[i] - b[i]);
                break;
            case "moltiplicatore":
                c.push(a[i] * b[i]);
                break;
            case "divisione":
                if (b[i] 1==0) {
                c.push(a[i] / b[i]);
                } else {
                    c.push(null);
                }
                break;
            default:
                console.log("Operazione non valide"):
                return null;
        }
    }
    return c;
}
let a = [5, 7, 9, 2, 4, 12, 4, 2, 50, 10]
let b = [6, 2, 5, 1, 9, 14, 3, 7, 23, 12]
let operazione = "moltiplicazione"
let risultato = operazioni(a, b, operazione);
console.log('${a}');
console.log('${b}');
console.log('(${operazione}): ${risultato}');