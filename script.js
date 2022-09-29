

const mobNavigation = document.getElementsByClassName("mob-navigation")[0];
const hambergerR = document.getElementsByClassName("hamberger-r")[0];

        hambergerR.addEventListener("click" , function(){
            hambergerR.classList.toggle("hamberger-active");
            mobNavigation.classList.toggle("open");
        });

 // ---------------------------------------------------------
        
const accordian = document.querySelectorAll(".accordian");

accordian.forEach((item,index)=>{
    let menu = item.querySelector(".menu");
    menu.addEventListener("click", ()=>{
        item.classList.toggle("open");
        let mnuitems = item.querySelector(".childmenu-ul");
        if(item.classList.contains("open")){
            mnuitems.style.height = `${mnuitems.scrollHeight}px` ;
            item.querySelector(".menu").classList.replace("fa-plus" , "fa-minus");
            item.querySelector(".bg_mobLdiv").setAttribute("style"," background-color: yellow;");
        }else{
            mnuitems.style.height = "0px"
            item.querySelector(".menu").classList.replace("fa-minus" , "fa-plus");
            item.querySelector(".bg_mobLdiv").setAttribute("style","background-color: unset;");
        }
        removeOpen(index);
        console.log(mnuitems);
    });
})

function removeOpen (index1) {
    accordian.forEach((item2,index2) => {
        if (index1 != index2){
            item2.classList.remove("open");
            let mnuitems2 = item2.querySelector(".childmenu-ul");
            mnuitems2.style.height = "0px";
            item2.querySelector(".menu").classList.replace("fa-minus","fa-plus");
            item2.querySelector(".bg_mobLdiv").setAttribute("style", "background-color: unset;");
        }
    });

}


























   
// ------------
        // $(function() {
        //     $(".mobLidiv-hbx").click(function() {
        //         $(".child-menu-hbx").slideToggle(600);
        //     });
        // }); 

        // $(function() {
        //     $(".mobLidiv-pro").click(function() {
        //         $(".child-menu-pro").slideToggle(600);
        //     });
        // }); 

        // $(function() {
        //     $(".mobLidiv-sol").click(function() {
        //         $(".child-menu-sol").slideToggle(600);
        //     });
        // }); 

        // $(function() {
        //     $(".mobLidiv-over").click(function() {
        //         $(".child-menu-over").slideToggle(600);
        //     });
        // }); 

        // $(function() {
        //     $(".mobLidiv-cor").click(function() {
        //         $(".child-menu-cor").slideToggle(600);
        //     });
        // }); 




        // li-bg-yellow color ----------

        // var  bghbx = document.getElementsByClassName("bg-hbx") [0];
        // var obghbx = document.getElementsByClassName("obg-hbx")[0];
        // bghbx.addEventListener("click",function() {
        //     bghbx.setAttribute("style" , " background: yellow;")
        //     obghbx.classList.toggle("y-color");
        // });

        // const bgpro = document.getElementsByClassName("bg-pro")[0];
        // const tbgpro = document.getElementsByClassName("tbg-pro")[0];
        //     bgpro.addEventListener("click", function () {
        //         tbgpro.classList.toggle("y-color");
        //     });

        // const bgsol = document.getElementsByClassName("bg-sol")[0];
        // const thbgsol = document.getElementsByClassName("thbg-sol")[0];
        //       bgsol.addEventListener("click", function () {
        //         thbgsol.classList.toggle("y-color");
        //     });

        // const bgover = document.getElementsByClassName("bg-abo")[0];
        // const fbgabo = document.getElementsByClassName("fbg-abo")[0];
        //     bgover.addEventListener("click", function(){
        //         fbgabo.classList.toggle("y-color");
        //     });

        // const bgcor = document.getElementsByClassName("bg-cor")[0];
        // const fifbgcor = document.getElementsByClassName("fifbg-cor")[0];
        //     bgcor.addEventListener("click", function(){
        //         fifbgcor.classList.toggle("y-color");
        //     });

     