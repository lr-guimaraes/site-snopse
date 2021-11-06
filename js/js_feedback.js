/* $(document).ready(function(){

    fLocalEventosClick();
}); */

function fLocalEventosClick(){

    $("#btxt").click(function(){

        alert("gravar");
        fLocalComunicaServidor("inserir");
        return false;
    });
}


function fLocalComunicaServidor(arquivo){

    var valores = $("form").serialize();

    $.ajax({
        type: "POST",
        dataType: "json",// bListaR
        data: valores, 
        url: "php/" + arquivo +".php",
        success: function(retorno){

        }
    });
}

