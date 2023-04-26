function piramide(nvalor){
    let linea="";
    console.log("");
    console.log(`Pirámide de ${nvalor} elementos`);
    console.log("=======================")
    for (i=0; i<nvalor+1; i++)
    {
        linea=linea+" "+i;
        console.log(linea);        
    }
}

piramide(4);
piramide(15);
piramide(7);