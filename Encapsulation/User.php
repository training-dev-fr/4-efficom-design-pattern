<?php
class User
{
    private $email;
    private $password;

    public function __construct()
    {

    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($value)
    {
        if(!preg_match('/.*@.*/',$value)){
            throw new Exception("L'email doit contenir un @");
        }
        $this->email = $value;
    }

    public function setPassword($value)
    {
        if (count($value) < 8) {
            throw new Exception("Le mot de passe doit contenir au moins 8 caractères");
        }
        $this->password = $value;
    }
}
