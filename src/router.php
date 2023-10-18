<?php

require __DIR__ . "/../class/Router.php";

$router = new Router();

$router->add('/', __DIR__ . '/../halloween-2023/landing/index.php');
$router->add('/404', __DIR__ . '/../halloween-2023/landing/404.php');
$router->add('/cuenta-atras-halloween', __DIR__ . '/../halloween-2023/cuenta-atras/index.php');

$router->dispatch();

?>