const menuButton = document.querySelector(".headerMenu")
const menu = document.querySelector(".sideMenu")
const optionButton = document.querySelector(".sideMenu")
const startOption = document.querySelector(".linkInicio")
const videoOption = document.querySelector(".linkVideo")
const PicosOption = document.querySelector(".linkPicos")
const IntegrantesOption = document.querySelector(".linkIntegrantes")
const CamisasOption = document.querySelector(".linkCamisas")
const PinturasOption = document.querySelector(".linkPinturas")

menuButton.addEventListener("click", () =>{
    menu.classList.toggle("sideMenuActive")
})

startOption.addEventListener("click", () => {
    if("sideMenuLinkAtivo" in startOption.classList.item){
    } else {
        startOption.classList.toggle("sideMenuLinkAtivo")
        videoOption.classList.toggle("sideMenuLinkAtivo")
        PicosOption.classList.toggle("sideMenuLinkAtivo")
        IntegrantesOption.classList.toggle("sideMenuLinkAtivo")
        CamisasOption.classList.toggle("sideMenuLinkAtivo")
        PinturasOption.classList.toggle("sideMenuLinkAtivo")
    }
})


videoOption.addEventListener("click", () => {
    videoOption.classList.toggle("sideMenuLinkAtivo")
    startOption.classList.toggle("sideMenuLinkAtivo")
})