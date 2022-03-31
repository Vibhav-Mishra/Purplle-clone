let container=document.getElementById("img-top");
container.addEventListener("click",(e)=>{

    e.preventDefault();
   let replace=document.querySelector("#replaceframe>div");
    let div=document.createElement("div");
    let frame1=document.createElement("iframe");
    frame1.allow="autoplay; encrypted-media";
    frame1.frameborder="0";
    frame1.height="220";
    frame1.width="370";
    frame1.allowFullscreen=true;
    frame1.src="https://www.youtube.com/embed/NrI9d0XiP7M?rel=0&showinfo=0&autoplay=1";
    div.append(frame1);
    let shadow=document.getElementById("shadow1");
    shadow.style.margin="12px 0px 0px 50px";
    replace.replaceWith(div);    
});


