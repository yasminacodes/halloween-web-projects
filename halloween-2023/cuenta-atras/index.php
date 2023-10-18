<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador regresivo para Halloween by YasminaCodes</title>
    <meta name="description" content="Aprende programación mientras disfrutas de la temporada más spooky del año!"/>

    <link rel="stylesheet" href="halloween-2023/cuenta-atras/css/style.css" />
    <link rel="stylesheet" href="halloween-2023/cuenta-atras/css/home.css" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Young+Serif&display=swap" rel="stylesheet">
</head>
<body>
    <div class="countdown">
        <div class="countdown__clock">
            <div class="countdown__clock__inner">
                <div class="countdown__clock__inner__big-needle">

                </div>
                <div class="countdown__clock__inner__small-needle">
                    
                </div>
                <div class="countdown__clock__inner__center"></div>
            </div>
        </div>

        <div class="countdown__days">
            <p class="countdown__days__text">Quedan</p>
            <div class="countdown__days__element-wrapper">
                <div class="countdown__days__element">
                    <div class="countdown__days__element__box">
                        <span class="countdown__days__element__box__value" id="days"></span> días
                    </div>
                </div>
                <div class="countdown__days__element">
                    <div class="countdown__days__element__box">
                        <span class="countdown__days__element__box__value" id="hours"></span> horas
                    </div>
                </div>
                <div class="countdown__days__element">
                    <div class="countdown__days__element__box">
                        <span class="countdown__days__element__box__value" id="minutes"></span> minutos
                    </div>
                </div>
                <div class="countdown__days__element">
                    <div class="countdown__days__element__box">
                        <span class="countdown__days__element__box__value" id="seconds"></span> segundos
                    </div>
                </div>
            </div>
            <p class="countdown__days__text">para Halloween</p>
        </div>

        <a class="countdown__link" href="/">Volver al inicio</a>
    </div>

    <script src="halloween-2023/cuenta-atras/js/countdown.js"></script>
</body>
</html>