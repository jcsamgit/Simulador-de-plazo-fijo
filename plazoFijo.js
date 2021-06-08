// var interes
// var capitalFinal

// var capital
// var plazo
// const historialInversiones=[]


// class PlazoFijo{

//     constructor(capital_inicial, duracion){
//         this.capital_inicial= capital_inicial;
//         this.duracion=duracion;
        
//     }
//     //mostrar por alert y console los importes correspondientes
//     mostrarInteres(){
//         //la tasa de interes es fija (del 27% anual)
//         interes= (this.capital_inicial*0.27/365)*this.duracion
//         console.log("Intereses generados: "+ interes.toFixed(2))
//         // alert("Intereses generados: "+ interes.toFixed(2))
        
//     }
    
//     mostrarCapitalFinal(){
//         capitalFinal= this.capital_inicial + interes
//         console.log("Monto final a cobrar: "+ capitalFinal.toFixed(2))
//         // alert("Monto final a cobrar: "+ capitalFinal.toFixed(2))
//         // return interes

//     }
// }
// function nuevaInversion(){
//     // capital= parseInt(prompt("Por favor ingrese el monto a invertir: "))

//     // while (capital<1000){
//     //     alert("El monto minimo es de $1000");
//     //     capital= parseInt(prompt("Por favor ingrese el monto a invertir: "))

//     // }
//     // // plazo= parseInt(prompt("Por favor ingrese un plazo entre 30 y 365 dias"))

//     // while ((plazo<30) || (plazo>365)){
//     //     alert("ingrese un plazo valido!");
//     //     plazo= parseInt(prompt("Por favor ingrese un plazo entre 30 y 365 dias"))

//     // }
    
//     function granInversion(capital) {
//         const capitalMillonario=[]
//         const Inversiones = {capital};
//         if (capital > 999999){
//             capitalMillonario.push(Inversiones.capital);
//             console.log("capital abundante => "+ capitalMillonario+ " <= no lo dejen ir!");
    
//         }
        
//     }

//     function agregarHistorial(capital,plazo,tasa,interes){
//         const items={capital,plazo, tasa, interes};
//         historialInversiones.push(items);
//         console.log(historialInversiones)
//     }
//     granInversion(capital);
//     const inversion1= new PlazoFijo(capital,plazo);
    
    
//     inversion1.mostrarInteres();
//     inversion1.mostrarCapitalFinal();
//     const tasa= "27%"
//     agregarHistorial(capital,plazo,tasa,interes.toFixed(2))  
    

// }
// nuevaInversion();


  
//DOM


function calcular(){
    var capitalDom= parseInt(document.getElementById("inputCapital").value);
    var plazoDom= parseInt(document.getElementById("inputPlazo").value);
    interesDom= (capitalDom*0.27/365)* plazoDom
    montoFinalDom= capitalDom+ interesDom
    alert("Intereses ganados: $" + interesDom+ "\nMonto final: $" + montoFinalDom)
    // IMPORTANTE: AGREGUE EL ALERT PORQUE DESPUES DE HACER CLICK EN EL BOTON CALCULAR LA PAGINA SE ACTUALIZA Y SE REINICIA LA CONSOLA, POR ESO AGREGUE EL ALERT PARA QUE POR LO MENOS SE PUEDA VISUALIZAR LOS DATOS
    console.log("Intereses ganados: $" + interesDom+ "\nMonto final: $" + (capitalDom+interesDom))
   
   
    





    // esto quizas sirva para mas adelante
    // function boton(){
    //     var contenedor= document.getElementsByClassName("contenido");
    //     var resultado= document.getElementsByClassName("resultado");
    //     contenedor.style.display="none";
    //     resultado.style.display="block";
    // }
    // boton()
}

























