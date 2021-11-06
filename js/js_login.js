function Login(){
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var i =  false;

    LoginStorage = window.localStorage;
    
    var registration  = JSON.parse(LoginStorage.getItem('registrationStorage'));
    //usar while = false qnd entrar o usario usar true 
    // colocar alert e/ou
    
    do {
        console.log("Usuario" +user);
        console.log("Storange"+registration[0]);
        console.log("Senha:"+ password);
        console.log("Storage"+registration[5]);
        if (usuario == registration[0] && senha == registration[5]){
            alert("Login realizado com sucesso");
            i = true;
        }else{//Fazer ler o print
            alert("Usuário e/ou senha incorreto, tente novemente");
            break;
            
        }
    }while (i = false );
  
}

