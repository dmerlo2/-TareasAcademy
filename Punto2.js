const arrayEquipos = ["Talleres","Belgrano","Instituto", "Boca"];
const arrayCampeones =["River","Boca","Talleres","Independiente"];
const coinciden =[];
console.log("Vector 1:")
console.log(arrayEquipos);
console.log("Vector 2:")
console.log(arrayCampeones);

let nLongitudVector1=arrayEquipos.length;
let cValorArray1='valor';

for (i=0;i<nLongitudVector1;i++){
     cValorArray1=arrayEquipos[i];
     
     if (arrayCampeones.includes(cValorArray1)){
            coinciden.push(cValorArray1);
     }
}
console.log("Vector Resultante:")
console.log(coinciden);