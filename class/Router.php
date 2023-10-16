<?php

class Router {
    private $routes = [];

    public function add($route, $file) {
        $this->routes[$route] = $file;
    }

    public function dispatch() {
        $url = $_SERVER['REQUEST_URI'];
        if ($url !== "/" && substr($url, -1) == '/') {
            $url = substr($url, 0, -1);
        }

        foreach ($this->routes as $route => $file) {
            if ($url == $route) {
                if (file_exists($file)) {
                    include $file;
                    return;
                } else {
                    header("Location: /404");
                    return;
                }
            }
        }

        header("Location: /404");
    }
}

?>