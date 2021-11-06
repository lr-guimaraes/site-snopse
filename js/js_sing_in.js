$(document).ready(function(){

    fLocalEventosClick();
}); 

function fLocalEventosClick(){

    $("#bsubmit").click(function(){

        fLocalComunicaServidor("sing_in");
        
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
        success:function(retorno){

        }
    });
}

