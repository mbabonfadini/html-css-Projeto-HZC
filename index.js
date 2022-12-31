const menuButton = document.querySelector(".headerMenu")
const menu = document.querySelector(".sideMenu")
const btLaterais = document.querySelectorAll(".sideMenuLink")

menuButton.addEventListener("click", () =>{
    menu.classList.toggle("sideMenuActive")
})

function btSideMenu(){
    console.log(btLaterais)
}


btLaterais.forEach((elemento)=>{
    elemento.addEventListener("click",()=>{
        btLateraisSelected(elemento)
    })
})

function btLateraisSelected(elemento){
    for(let i=0;i<btLaterais.length;i++){
        if(btLaterais[i].textContent != elemento.textContent){
            btLaterais[i].classList.remove("sideMenuLinkAtivo")
        }
        else(
            btLaterais[i].classList.add("sideMenuLinkAtivo")
        )
    }
}