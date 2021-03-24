<?php
    function user_from_token($token)    {

        $token =  explode('-', $token); 
        $tokenArray = array("user" => $token[5]);

        return $tokenArray["user"];
       
    }