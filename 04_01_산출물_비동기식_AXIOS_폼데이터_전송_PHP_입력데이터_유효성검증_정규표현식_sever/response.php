<?php

    //$irum  변수 - 첫글자 $ 사용
    $irum = $_POST['irum'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];

    //db SQL
    //insert into 데이터베이스 저장

    
    //응답(Response)
    $txt = '';
    $txt .= $irum.';'; 
    $txt .= $email.';'; 
    $txt .= $tel;

    echo json_encode($txt);

?>