window.onload = () => {
    document.getElementById("c-barra").onclick = function () {
        let nav = document.getElementsByClassName("c-nav")[0];
        if(nav.style.display=="inline-block"){
            nav.style='display:none;'
        }else{
            nav.style = 'display:inline-block;';
        } 
    }
}