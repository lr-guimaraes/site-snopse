function input(){

	var keyword = ["SHERLOCK","MARVEL","+18"];
    var card = ["cards.html","cards_marvel.html","card+18.html"];
    var keyword_input = document.getElementById("keyword").value;
    var cont = 0;
    
    if(keyword.length =="" || keyword.length == null){
        alert("Campo vazio, digite a categoria");
    }
   
    for (var i = 0; i < keyword.length; i++){
        if ( keyword_input.toUpperCase() == keyword[i]){
            window.location.href = card[i];
        }else{
            cont += 1;
        }
    }
    if (cont== keyword.length){
        alert("Não encontramos series, filmes e livros com esse nome");
    }
}