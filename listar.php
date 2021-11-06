<?php

    $con = mysqli_connect("localhost: 3306", "root", "root", "baco_tde" );

    $result = mysqli_query($con, "INSERT INTO habitante (Nome_Habitante, Data_Nascimento,Sexo) VALUES('Steve', '88/88/8888', 'M)");

    while ($line = mysqli_fetch_assoc($result)){
        
        echo $line["Cod_Habitantes"].": ";
        echo $line["Nome_Habitante"]."<br>"; 
        echo $line["Data_Nascimento"]; 
        echo $line["Sexo"];  
    }
?>
