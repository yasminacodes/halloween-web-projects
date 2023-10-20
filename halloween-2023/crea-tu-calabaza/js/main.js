const pumpkinBodyImg = ["linea-1.png", "linea-2.png", "linea-3.png", "linea-4.png", "linea-5.png"]

const pumpkinBodyColor = [
    ["linea-1-1.png", "linea-1-2.png", "linea-1-3.png"],
    ["linea-2-1.png", "linea-2-2.png", "linea-2-3.png"],
    ["linea-3-1.png", "linea-3-2.png", "linea-3-3.png"],
    ["linea-4-1.png", "linea-4-2.png", "linea-4-3.png"],
    ["linea-5-1.png", "linea-5-2.png", "linea-5-3.png"]
]
const pumpkinEyes = [
    ["ojos-1-1.png", "ojos-1-2.png", "ojos-1-3.png"],
    ["ojos-2-1.png", "ojos-2-2.png", "ojos-2-3.png"],
    ["ojos-3-1.png", "ojos-3-2.png", "ojos-3-3.png"],
    ["ojos-4-1.png", "ojos-4-2.png", "ojos-4-3.png"],
    ["ojos-5-1.png", "ojos-5-2.png", "ojos-5-3.png"]
]

const imagesFolder = "halloween-2023/crea-tu-calabaza/img/calabazas/"

document.addEventListener("DOMContentLoaded", ()=>{
    const bodyColorBig = document.getElementById("pumpkin-body-color")
    const bodyBig = document.getElementById("pumpkin-body")
    const eyesBig = document.getElementById("pumpkin-eyes")

    const bodyColorSel = document.getElementById("body-color")
    const bodyLineSel = document.getElementById("body-line")
    const eyes = document.getElementById("eyes")
    const eyesColor = document.getElementById("eyes-color")

    const numBodyColor = 3
    const numBodyLine = 5
    const numEyes = 5
    const numEyesColor = 3

    let currentBodyColor = Math.floor(Math.random() * numBodyColor)
    let currentBodyLine = Math.floor(Math.random() * numBodyLine)
    let currentEyes = Math.floor(Math.random() * numEyes)
    let currentEyesColor = Math.floor(Math.random() * numEyesColor)

    bodyColorSel.src = imagesFolder + pumpkinBodyColor[currentBodyLine][currentBodyColor]
    bodyLineSel.src = imagesFolder + pumpkinBodyImg[currentBodyLine]
    eyes.src = imagesFolder + pumpkinEyes[currentEyes][2]
    eyesColor.src = imagesFolder + pumpkinEyes[currentEyes][currentEyesColor]

    bodyColorBig.src = imagesFolder + pumpkinBodyColor[currentBodyLine][currentBodyColor]
    bodyBig.src = imagesFolder + pumpkinBodyImg[currentBodyLine]
    eyesBig.src = imagesFolder + pumpkinEyes[currentEyes][currentEyesColor]

    const hidden = document.querySelectorAll('.image-hidden')
    if(hidden) {
        for(let i = 0; i < hidden.length; i++) {
            hidden[i].classList.remove('image-hidden')
        }
    }

    const backBtn = document.querySelectorAll(".container__main__selector__element__back")
    if(backBtn) {
        for(let i = 0; i < backBtn.length; i++) {
            backBtn[i].addEventListener("click", ()=>{
                const el = backBtn[i].getAttribute("data-for")
                const elNode = document.getElementById(el)

                switch(el) {
                    case "body-color":
                        if (currentBodyColor <= 0) {
                            currentBodyColor = numBodyColor-1
                        } else {
                            currentBodyColor -= 1
                        }
                        elNode.src = imagesFolder + pumpkinBodyColor[currentBodyLine][currentBodyColor]
                        bodyColorBig.src = imagesFolder + pumpkinBodyColor[currentBodyLine][currentBodyColor]
                        break;
                    case "body-line":
                        if (currentBodyLine <= 0) {
                            currentBodyLine = numBodyLine-1
                        } else {
                            currentBodyLine -= 1
                        }
                        elNode.src = imagesFolder + pumpkinBodyImg[currentBodyLine]
                        document.getElementById("body-color").src = imagesFolder + pumpkinBodyColor[currentBodyLine][currentBodyColor]
                        bodyBig.src = imagesFolder + pumpkinBodyImg[currentBodyLine]
                        bodyColorBig.src = imagesFolder + pumpkinBodyColor[currentBodyLine][currentBodyColor]
                        break;
                    case "eyes":
                        if (currentEyes <= 0) {
                            currentEyes = numEyes - 1
                        } else {
                            currentEyes -= 1
                        }
                        elNode.src = imagesFolder + pumpkinEyes[currentEyes][2]
                        document.getElementById("eyes-color").src = imagesFolder + pumpkinEyes[currentEyes][currentEyesColor]
                        eyesBig.src = imagesFolder + pumpkinEyes[currentEyes][currentEyesColor]
                        break;
                    case "eyes-color":
                        if (currentEyesColor <= 0) {
                            currentEyesColor = numEyesColor-1
                        } else {
                            currentEyesColor -= 1
                        }
                        elNode.src = imagesFolder + pumpkinEyes[currentEyes][currentEyesColor]
                        eyesBig.src = imagesFolder + pumpkinEyes[currentEyes][currentEyesColor]
                        break;
                }
            })
        }
    }

    const nextBtn = document.querySelectorAll(".container__main__selector__element__next")
    if(nextBtn) {
        for(let i = 0; i < nextBtn.length; i++) {
            nextBtn[i].addEventListener("click", ()=>{
                const el = nextBtn[i].getAttribute("data-for")
                const elNode = document.getElementById(el)

                switch(el) {
                    case "body-color":
                        if (currentBodyColor >= numBodyColor - 1) {
                            currentBodyColor = 0
                        } else {
                            currentBodyColor += 1
                        }
                        elNode.src = imagesFolder + pumpkinBodyColor[currentBodyLine][currentBodyColor]
                        bodyColorBig.src = imagesFolder + pumpkinBodyColor[currentBodyLine][currentBodyColor]
                        break;
                    case "body-line":
                        if (currentBodyLine >= numBodyLine - 1) {
                            currentBodyLine = 0
                        } else {
                            currentBodyLine += 1
                        }
                        elNode.src = imagesFolder + pumpkinBodyImg[currentBodyLine]
                        document.getElementById("body-color").src = imagesFolder + pumpkinBodyColor[currentBodyLine][currentBodyColor]
                        bodyBig.src = imagesFolder + pumpkinBodyImg[currentBodyLine]
                        bodyColorBig.src = imagesFolder + pumpkinBodyColor[currentBodyLine][currentBodyColor]
                        break;
                    case "eyes":
                        if (currentEyes >= numEyes - 1) {
                            currentEyes = 0
                        } else {
                            currentEyes += 1
                        }
                        elNode.src = imagesFolder + pumpkinEyes[currentEyes][2]
                        document.getElementById("eyes-color").src = imagesFolder + pumpkinEyes[currentEyes][currentEyesColor]
                        eyesBig.src = imagesFolder + pumpkinEyes[currentEyes][currentEyesColor]
                        break;
                    case "eyes-color":
                        console.log(currentEyesColor, numEyesColor)
                        if (currentEyesColor >= numEyesColor - 1) {
                            currentEyesColor = 0
                        } else {
                            currentEyesColor += 1
                        }
                        elNode.src = imagesFolder + pumpkinEyes[currentEyes][currentEyesColor]
                        eyesBig.src = imagesFolder + pumpkinEyes[currentEyes][currentEyesColor]
                        break;
                }
            })
        }
    }

})