const obj = [
    "objeto_1.png",
    "objeto_2.png",
    "objeto_3.png",
    "objeto_4.png",
    "objeto_5.png",
    "objeto_6.png",
    "objeto_7.png",
    "objeto_8.png",
    "objeto_9.png"
]

const objAlt = [
    "Hueso",
    "Calavera",
    "Pluma",
    "Hechizo",
    "Bolsa misteriosa",
    "Láudano",
    "Mechón de pelo",
    "Sangre",
    "Vela negra"
]

const objPath = "halloween-2023/pocion-bruja/img/witchs-cauldron/"


document.addEventListener("DOMContentLoaded", ()=>{
    const startBtn = document.getElementById("start-btn")

    const warnSeqText = document.querySelector(".warn-text")
    const youSeqText = document.querySelector(".you-text")
    const loseSeqText = document.querySelector(".lose-text")
    const seqImg = document.getElementById("seq-img")

    const greenPotion = document.querySelector(".container__game__cauldron--potion-green")
    const pinkPotion = document.querySelector(".container__game__cauldron--potion-pink")

    let seqNum = 3
    let selectedSequence = []
    let currentSequence = []
    let selectedSequenceIndex = 0

    function showNextEl() {
        let startWait = setTimeout(()=>{
            seqImg.src = objPath + obj[selectedSequence[selectedSequenceIndex]]
            seqImg.alt = objAlt[selectedSequence[selectedSequenceIndex]]
            seqImg.classList.remove("container__game__bubble__current-img--hidden")

            let waitNext = setTimeout(()=>{
                seqImg.classList.add("container__game__bubble__current-img--hidden")
                selectedSequenceIndex += 1
                console.log(selectedSequenceIndex)
                if(selectedSequenceIndex < seqNum) {
                    showNextEl()
                } else {
                    youSeqText.classList.remove("you-text-hidden")
                }
                clearTimeout(waitNext)
            }, 1500)

            clearTimeout(startWait)
        }, 1000)
    }

    function createSequence() {
        warnSeqText.classList.remove("warn-text-hidden")
        
        for(let i = 0; i < seqNum; i++) {
            selectedSequence.push(Math.floor(Math.random() * obj.length))
        }
        console.log(selectedSequence)

        let warnSeqTextWait = setTimeout(()=>{
            warnSeqText.classList.add("warn-text-hidden")
            showNextEl()
            clearTimeout(warnSeqTextWait)
        }, 1500)
        
    }

    startBtn.addEventListener("click", ()=>{
        document.querySelector(".container__game__bubble__title").style.display = "none"
        document.querySelector(".container__game__bubble__text").style.display = "none"
        document.querySelector(".container__game__bubble__button").style.display = "none"

        document.querySelector(".container__game__cauldron--fire").classList.remove("container__game__cauldron--fire-hidden")

        createSequence()
    })

    const gameBtns = document.querySelectorAll(".container__game__object")
    if(gameBtns) {
        for(let i = 0; i < gameBtns.length; i++) {
            gameBtns[i].addEventListener("click", ()=>{
                const currentPos = currentSequence.length
                const currentAtr = gameBtns[i].getAttribute("data-atr")
                if(!youSeqText.classList.contains("you-text-hidden")) {
                    if(currentPos < seqNum - 1) {
                        if(currentAtr == selectedSequence[currentPos]) {
                            currentSequence.push(currentAtr)
                            if(currentPos == 0) {
                                greenPotion.classList.remove("container__game__cauldron--potion-green-hidden")
                            }
                        } else {
                            greenPotion.classList.add("container__game__cauldron--potion-green-hidden")
                            pinkPotion.classList.remove("container__game__cauldron--potion-pink-hidden")
                            youSeqText.classList.add("you-text-hidden")
                            loseSeqText.classList.remove("lose-text-hidden")
                        }
                    } else {
                        if(currentAtr == selectedSequence[currentPos]) {
                            seqNum += 1
                            selectedSequence = []
                            currentSequence = []
                            selectedSequenceIndex = 0
    
                            youSeqText.classList.add("you-text-hidden")
                            document.querySelector(".container__game__bubble__title").innerText = "Muy bien..."
                            document.querySelector(".container__game__bubble__title").removeAttribute("style")
                            document.querySelector(".container__game__bubble__text").innerText = "¿Lo hacemos otra vez? Un poco más dificil..."
                            document.querySelector(".container__game__bubble__text").removeAttribute("style")
                            document.querySelector(".container__game__bubble__button").removeAttribute("style")
                        } else {
                            greenPotion.classList.add("container__game__cauldron--potion-green-hidden")
                            pinkPotion.classList.remove("container__game__cauldron--potion-pink-hidden")
                            youSeqText.classList.add("you-text-hidden")
                            loseSeqText.classList.remove("lose-text-hidden")
                        }
                        
                    }
                }
            })
        
        }
    }
})