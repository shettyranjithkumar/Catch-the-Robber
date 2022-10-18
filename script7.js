var th= document.querySelector(".catch");


th.addEventListener('mousemove',()=>{
    let x= Math.random()*500;
    let y= Math.random()*800;
    th.style.marginTop=x+"px";
    th.style.marginLeft=y+"px";
})