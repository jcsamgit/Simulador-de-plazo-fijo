

var historialInversiones=[]
var tasa= 27

$(document).ready(function(){
    // $("#tema").click(function(){
    //     var noche= false
    //     if(noche===false){
    //         $("body").css({backgroundColor:"black"})
    //         $("h1").css({color:"white"})
    //         $("h3").css({color:"white"})
    //         $("form").css({backgroundColor:"grey"})
    //         $("#tema").text("modo dia")
    //         $("#tema").css({color:"black", backgroundColor:"white"})
    //         noche= !noche
    //     }
    //     if(noche===true){
    //         $("body").css({backgroundColor:"white"})
    //         $("#tema").text("modo noche")

    //     }
    // })
    // doy funcion al boton calcular
    $("#calcular").click(function(){
        var capital= parseInt( $("#inputCapital").val() )
        var plazo= parseInt($("#inputPlazo").val() )    

        // establezco las restricciones de los input

        if (isNaN(capital)===true|| capital<1000){
            // marco error en el input capital pintando el borde de rojo entre otras cosas
            $('#inputCapital').css({border: "1px solid red"})
            $('.errorCapital').css({border: "1px solid red", background:"white", color: "red"})
            return false
        }
        else{
            // quito las marcas del input capital cuando se hace click y los valores son correctos
            $('#inputCapital').css({border: "none"})
            $('.errorCapital').css({border: "none", background:"rgb(149, 161, 162)", color: "black"})
            
            // restricciones para el plazo
            if(isNaN(plazo)||(plazo<30) || (plazo>365)){
                // marco error en el input plazo
                $('#inputPlazo').css({border: "1px solid red"})         
                $('.errorPlazo').css({border: "1px solid red", background:"white", color: "red"})
                return false
            }
            else{

                // si el plazo es correcto al hacer click en el boton se elimina los cambios que marcan el error
                $('#inputPlazo').css({border: "none"})         
                $('.errorPlazo').css({border: "none", background:"rgb(149, 161, 162)", color: "black"})



                // Finalmente si los valores de todos los campos son correctos se ejecuta el resto del codigo

                // se debe prevenir que se reinicie la pagina al presionar el boton
                var formularioPrincipal=document.getElementById("formularioPrincipal");
                formularioPrincipal.addEventListener("submit", validarFormulario);
                function validarFormulario(e){
                    e.preventDefault();
                }

                //calculos necesarios para el simulador (interes y monto final)
                var interes= parseFloat(((capital*(tasa/100)/365)* plazo).toFixed(2))
                var montoFinal= capital+ interes

                console.log("Intereses ganados: $" + interes+ "\nMonto final: $" + (capital+interes))



                //incorporo la tabla con los resultados
                $("#formularioPrincipal").append( `
                
                    <div class="resultado" id="tabla" style="display:none;">
                        <table>
                            <tr>
                                <td> Capital </td>
                                <td>
                                    $${capital}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Plazo
                                </td>
                                <td>
                                    ${plazo}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Intereses ganados
                                </td>
                                <td>
                                    $${interes}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Monto total
                                </td>
                                <td>
                                    $${montoFinal}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    TNA
                                </td>
                                <td>
                                    ${tasa}%
                                </td>
                            </tr>
                        </table>
                        <button class="regresar">Regresar</button>
                    </div>
                `)

                // hago desaparecer el formulario y traigo la tabla con los resultados
                $('.contenido').fadeOut("slow", function(){
                    $('.resultado').fadeIn(2000)
                    // un pequeña animacion de billetes
                    // $('#formularioPrincipal').css({backgroundImage:"url(https://miro.medium.com/max/888/1*YGCqKYYjb1wJgeqXx-2mjA.gif)"}).fadeIn(1000)
                })
                

                // doy funcion al boton regresar en la tabla de resultados
                $('.regresar').on("click", function(){
                
                    $('.resultado').fadeOut("slow",function(){
                        $('.resultado').remove() //elimino la tabla con los resultados
                        $('.contenido').fadeIn(2000) //vuelvo a traer el formulario anterior
                        $('#formularioPrincipal').css({backgroundImage:"none"}).delay(1000) //quito el fondo animado
                    })

                })

                // Si el usuario no quiere hacer click en el boton regresar se puede presionar "ENTER"
                $("body").keypress(function(event){
                    var keycode = (event.keyCode ? event.keyCode : event.which);
                    if(keycode == '13'){
                        $(".regresar").trigger('click')   
                    }
                });

                // session storage
       
                function agregarHistorial(capital,plazo,tasa,interes,montoFinal){
                    const datos= {capital, plazo, tasa, interes, montoFinal}
                    historialInversiones.push(datos);
                }    
                agregarHistorial(capital,plazo,tasa,interes,montoFinal)
                
                
                const historialInversionesJson= JSON.stringify(historialInversiones)
                sessionStorage.setItem('Calculos de inversiones', historialInversionesJson)       

                // API
                // (no encontre una API que me pudiera brindar las tasas anuales que usan la mayoria de los bancos en los plazos fijos, de todas cada banco tasas distintas)

                // esta API es gratuita y no aporta una funcion importante en el simulador
                function enviarDatosApi() {
                    let Inversiones = {
                        "userId": 1,
                        "id": 101,
                        "title": "Inversiones",
                        "body": historialInversiones
                    }
                
                    $.post("https://jsonplaceholder.typicode.com/posts", Inversiones).done(function(respuesta, estado) {
                        console.log("Estado: " + estado);
                        console.log("Datos de la API: " + JSON.stringify(respuesta));
                        console.log(respuesta);
                    });
                }
                
                enviarDatosApi();
            }
        }
    })
})
