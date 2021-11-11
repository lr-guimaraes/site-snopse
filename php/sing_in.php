<?php

    $NameUser = $_POST["NameUser"];
    $BirthDate = $_POST["BirthDate"];
    $User = $_POST["User"];
    $Email = $_POST["Email"];
    $PasswordUser = $_POST["PasswordUser"];
    $Feed = $_POST["Feed"];
   
    $con = mysqli_connect("localhost:3306", "root", "root", "bank_tde");

    mysqli_query($con, "INSERT INTO registration (NameUser, BirthDate,User, Email, PasswordUser) VALUES('$NameUser', '$BirthDate' ,'$User', '$Email','$PasswordUser') ");    
?>
