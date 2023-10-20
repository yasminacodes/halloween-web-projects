<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crea tu calabaza by Yasmina Codes</title>

    <meta name="description" content="Aprende programación mientras disfrutas de la temporada más spooky del año!"/>

    <link rel="stylesheet" href="halloween-2023/crea-tu-calabaza/css/style.css" />
    <link rel="stylesheet" href="halloween-2023/crea-tu-calabaza/css/home.css" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Young+Serif&display=swap" rel="stylesheet">

    <script type="text/javascript" src="halloween-2023/crea-tu-calabaza/js/main.js"></script>
</head>
<body>
    <main class="container">
        <h1 class="container__title">Crea tu calabaza</h1>

        <div class="container__main">
            <div class="container__main__view">
                <div class="container__main__view__dim"></div>
                <div class="container__main__view__img">
                    <img class="container__main__view__img__element image-hidden" alt="Color del cuerpo de la calabaza" src="/" id="pumpkin-body-color" />
                    <img class="container__main__view__img__element image-hidden" alt="Cuerpo de la calabaza" src="/" id="pumpkin-body" />
                    <img class="container__main__view__img__element image-hidden" alt="Cjos de la calabaza" src="/" id="pumpkin-eyes" />
                </div>
            </div>

            <div class="container__main__selector">
                <h2 class="container__main__selector__title">Elige las partes de tu calabaza</h2>

                <div class="container__main__selector__element">
                    <button class="container__main__selector__element__back" data-for="body-color"></button>
                    <div class="container__main__selector__element__image">
                        <img class="container__main__selector__element__image__img" alt="Color del cuerpo seleccionado" src="/" id="body-color" />
                    </div>
                    <button class="container__main__selector__element__next" data-for="body-color"></button>
                </div>

                <div class="container__main__selector__element">
                    <button class="container__main__selector__element__back" data-for="body-line"></button>
                        <div class="container__main__selector__element__image">
                            <img class="container__main__selector__element__image__img" alt="Cuerpo seleccionado" src="/" id="body-line" />
                        </div>
                    <button class="container__main__selector__element__next" data-for="body-line"></button>
                </div>

                <div class="container__main__selector__element">
                    <button class="container__main__selector__element__back" data-for="eyes"></button>
                        <div class="container__main__selector__element__image">
                            <img class="container__main__selector__element__image__img" alt="Ojos seleccionados" src="/" id="eyes" />
                        </div>
                    <button class="container__main__selector__element__next" data-for="eyes"></button>
                </div>

                <div class="container__main__selector__element">
                    <button class="container__main__selector__element__back" data-for="eyes-color"></button>
                        <div class="container__main__selector__element__image">
                            <img class="container__main__selector__element__image__img" alt="Ojos seleccionados" src="/" id="eyes-color" />
                        </div>
                    <button class="container__main__selector__element__next" data-for="eyes-color"></button>
                </div>
            </div>
        </div>

        <a class="container__back" href="/">Volver al inicio</a>
    </main>
    
</body>
</html>