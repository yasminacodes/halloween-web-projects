<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La poción de la bruja by Yasmina Codes</title>

    <meta name="description" content="Aprende programación mientras disfrutas de la temporada más spooky del año!"/>

    <link rel="stylesheet" href="halloween-2023/pocion-bruja/css/style.css" />
    <link rel="stylesheet" href="halloween-2023/pocion-bruja/css/home.css" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Young+Serif&display=swap" rel="stylesheet">

    <script type="text/javascript" src="halloween-2023/pocion-bruja/js/main.js"></script>
</head>
<body>
    <main class="container">
        <h1 class="container__title">La poción de la bruja</h1>

        <div class="container__game">
            <img class="container__game__background" src="halloween-2023/pocion-bruja/img/witchs-cauldron/fondo.png" alt="Fondo del juego la poción de la bruja" />

            <img class="container__game__witch" src="halloween-2023/pocion-bruja/img/witchs-cauldron/bruja.png" alt="Personaje de la bruja" />
            <img class="container__game__witch--pink container__game__witch--pink-hidden" src="halloween-2023/pocion-bruja/img/witchs-cauldron/bruja_brillo_rosa.png" alt="Brillo rosa de la bruja" />
            <img class="container__game__witch--green container__game__witch--green-hidden" src="halloween-2023/pocion-bruja/img/witchs-cauldron/bruja_brillo_verde.png" alt="Brillo verde de la bruja" />

            <img class="container__game__cauldron" src="halloween-2023/pocion-bruja/img/witchs-cauldron/caldero.png" alt="Caldero de la bruja" />
            <img class="container__game__cauldron--fire container__game__cauldron--fire-hidden" src="halloween-2023/pocion-bruja/img/witchs-cauldron/fuego.gif" alt="Fuego del caldero de la bruja" />
            <img class="container__game__cauldron--potion-pink container__game__cauldron--potion-pink-hidden" src="halloween-2023/pocion-bruja/img/witchs-cauldron/pocion_rosa.gif" alt="Pocion rosa del caldero de la bruja" />
            <img class="container__game__cauldron--potion-green container__game__cauldron--potion-green-hidden" src="halloween-2023/pocion-bruja/img/witchs-cauldron/pocion_verde.gif" alt="Pocion verde del caldero de la bruja" />

            <div class="container__game__bubble">
                <h2 class="container__game__bubble__title">¿Estás listo?</h2>
                <p class="container__game__bubble__text">Añade los ingredientes a la poción en el mismo orden que te digo y todo irá bien</p>
                <button class="container__game__bubble__button" id="start-btn">
                    ¡Vamos!
                </button>

                <p class="container__game__bubble__text warn-text-hidden warn-text">Atiende...</p>
                <p class="container__game__bubble__text you-text-hidden you-text">Ahora te toca</p>
                <p class="container__game__bubble__text lose-text-hidden lose-text">¡HAS PERDIDO!</p>
                <img id="seq-img" class="container__game__bubble__current-img container__game__bubble__current-img--hidden"src="/" alt="" />
                
            </div>
        </div>

        <div class="container__buttons">
            <button class="container__game__object" data-atr="0">
                <img class="container__game__object__img" src="halloween-2023/pocion-bruja/img/witchs-cauldron/objeto_1.png" alt="Hueso" />
            </button>
            <button class="container__game__object" data-atr="1">
                <img class="container__game__object__img" src="halloween-2023/pocion-bruja/img/witchs-cauldron/objeto_2.png" alt="Calavera" />
            </button class="container__game__object">
            <button class="container__game__object" data-atr="2">
                <img class="container__game__object__img" src="halloween-2023/pocion-bruja/img/witchs-cauldron/objeto_3.png" alt="Pluma" />
            </button>
            <button class="container__game__object" data-atr="3">
                <img class="container__game__object__img" src="halloween-2023/pocion-bruja/img/witchs-cauldron/objeto_4.png" alt="Hechizo" />
            </button>
            <button class="container__game__object" data-atr="4">
                <img class="container__game__object__img" src="halloween-2023/pocion-bruja/img/witchs-cauldron/objeto_5.png" alt="Bolsa misteriosa" />
            </button>
            <button class="container__game__object" data-atr="5">
                <img class="container__game__object__img" src="halloween-2023/pocion-bruja/img/witchs-cauldron/objeto_6.png" alt="Láudano" />
            </button>
            <button class="container__game__object" data-atr="6">
                <img class="container__game__object__img" src="halloween-2023/pocion-bruja/img/witchs-cauldron/objeto_7.png" alt="Mechón de pelo" />
            </button>
            <button class="container__game__object" data-atr="7">
                <img class="container__game__object__img" src="halloween-2023/pocion-bruja/img/witchs-cauldron/objeto_8.png" alt="Sangre" />
            </button>
            <button class="container__game__object" data-atr="8">
                <img class="container__game__object__img" src="halloween-2023/pocion-bruja/img/witchs-cauldron/objeto_9.png" alt="Vela negra" />
            </button>
        </div>
        
    </main>
</body>
</html>