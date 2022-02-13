<?php

$token = "5035483612:AAEUNTsVtMcIKHOpJBr-fYBiT1N6qYAn7wE";
$chat_id = "-1001729284270";

$name = null;
$phone = null;
$email = null;
$select = null;
$txt = null;
$arr = [];
$arr2 = [];

//функции преобразования ломают отправку в телеграм, потому так
$symbols = array( "," , "<", ">", "/" , "\\", "|" ,"-", "%" , "&" , "$" , "#", "(",")" , "-", "=" );

if (!empty($_POST)) {
    if (isset($_POST['name1'])) {
        $name = str_replace( $symbols , "" , $_POST['name1']);
    }

    if (isset($_POST['name2'])) {
        $name = str_replace( $symbols , "" , $_POST['name2']);
    }

    if (isset($_POST['phone'])) {
        $phone = str_replace( $symbols , "" ,  $_POST['phone']);
    }
    
    if (isset($_POST['email'])) {
        $email = str_replace( $symbols , "" , $_POST['email']);
    }

    if (isset($_POST['select'])) {
        $select = str_replace( $symbols , "" , $_POST['select']);
    }

    $arr = array(
        'Имя:' => $name,
    );

    if(mb_strlen($phone) > 0){
        $arr['Телефон:'] = $phone;
    }

    if(mb_strlen($email) > 0){
        $arr['Почта:'] = $email;
    }

    if(mb_strlen($select) > 0){
        $arr['Связь'] = $select;
    }

    foreach($arr as $key => $value) {
        $txt .= "<b>". $key."</b> ". $value . "%0A";
    };

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

}
