<?php

    $text = $_POST["txt"];

    $con = mysqli_connect("localhost: 3306", "root", "root", "bank_tde" );

    $result = mysqli_query($con, "INSERT INTO feedback (txt) VALUES('$text')");

?>
