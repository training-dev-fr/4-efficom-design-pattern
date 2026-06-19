<?php
    $hello = new Hello();
    $birthdayHelloDecorator = new BirthdayHelloDecorator($hello);
    $birthdayHelloDecorator->sayHello("Aurélien");


    @birthdayHelloDecorator();
    $hello->sayHello('Aurélien');