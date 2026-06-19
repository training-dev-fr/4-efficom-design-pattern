<?php
    class BirthdayHelloDecorator{
        private $hello;

        public function __construct(Hello $hello){
            $this->hello = $hello;
        }

        public function sayHello($name){
            return $this->hello->sayHello($name) . ', Joyeux anniversaire';
        }
    }