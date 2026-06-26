<?php
    function register($email, $password){
        $user = new User();
        $user->setEmail($email);
        $user->setPassword($password);
    }