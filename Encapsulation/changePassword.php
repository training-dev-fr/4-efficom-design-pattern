<?php
    function generatePassword(){
        $password = "";
        for($i=0;$i<8;$i++){
            $password .= char(rand(65,97));
        }
        $user = new User();
        $user->setPassword($password);
    }