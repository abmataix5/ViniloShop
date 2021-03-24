<?php
////////////////////////////////////////////////
//https://github.com/miguelangel-nubla/JWT-PHP//
////////////////////////////////////////////////
   
    $path = $_SERVER['DOCUMENT_ROOT'] . '/web';
    require_once "$path . /classes/JWT.php";

 

   


function encode_token(){

    $user=$_GET['username'];
     $time = time();
     $time_exp = time() + 3600;
    $header = '{"typ":"JWT", "alg":"HS256"}';
    $secret = 'Aringtogovernthemall';

    /////////////////////////// user ////////////////////////////////////////
    //iat: Tiempo que inició el token
    //exp: Tiempo que expirará el token (+1 hora)
    //name: info user
    $payload = "{  'iat':-'$time'-,'exp':-'$time_exp'-,'name': '-$user-'}";    

    $JWT = new JWT;
    $token = $JWT->encode($header, $payload, $secret);
  
   return $token;
}

function decode_token($token){
    $secret = 'Aringtogovernthemall';
   
    $JWT = new JWT;
    $json = $JWT->decode($token, $secret);
  
    return $json;
}