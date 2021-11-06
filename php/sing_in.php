<?php

    $NameUser = $_POST["NameUser"];
    $BirthDate = $_POST["BirthDate"];
    $User = $_POST["User"];
    $Email = $_POST["Email"];
    $PasswordUser = $_POST["PasswordUser"];

    $con = mysqli_connect("localhost:3306", "root", "root", "bank_tde");

    mysqli_query($con, "INSERT INTO sing_in (NameUser, BirthDate,User, Email, PasswordUser) VALUES('$NameUser', '$BirthDate' ,'$User', '$Email','$PasswordUser') ");

?>