const nombre = "Edgar";
const dias = [
    "Lunes","Martes", "Miercoles", "Jueves", "Viernes","Sabado","Domingo"
]
function promedioCorrer(){
    const min = 5
    const max = 15
    
    return Math.round(Math.random()*(max-min)+min)
}

let TotalKms = 0
const length = dias.length  //refactorizar, acortar variable (dias.length - length)
for(let i = 0; i<length; i++){
    const km = promedioCorrer()
    TotalKms = TotalKms + km
    console.log(`El dia ${dias[i]}, ${nombre} corrio ${km} kms`)
}
const promedioKms = TotalKms / length
console.log(`En promedio ${nombre} corrio ${promedioKms.toFixed(2)} a la semana`);//to fixed, trunca a 2 decimales 