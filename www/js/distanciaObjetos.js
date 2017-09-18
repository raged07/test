let objeto1max = 100 
let objeto1min = 1
let objeto2max = 100
let objeto2min = 1
let objeto3max = 100 
let objeto3min = 1
let objeto4max = 100
let objeto4min = 1

let objeto1 = {
    x : Math.round(Math.random() * (objeto1max-objeto1min)+objeto1min),
    y :  Math.round(Math.random() * (objeto2max-objeto2min)+objeto2min)
};
let objeto2 = {
    x2 : Math.round(Math.random() * (objeto3max-objeto3min)+objeto3min),
    y2 : Math.round(Math.random() * (objeto4max-objeto4min)+objeto4min)
}

obj1 = objeto1.x
obj2 = objeto1.y
obj3 = objeto2.x2
obj4 = objeto2.y2
console.log(`x1=${obj1},y1=${obj2},x2=${obj3},y2=${obj4}`)
const distancia = Math.sqrt(Math.pow((objeto1.y-objeto1.x),2) + Math.pow((objeto2.y2-objeto2.x2),2));
console.log(distancia);
