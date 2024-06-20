
var blur=document.querySelector("#cursor-blur")
var crsr=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
         crsr.style.left=dets.x+15 +"px"
         crsr.style.top=dets.y+5 +"px"
         blur.style.left=dets.x-200+ "px"
         blur.style.top=dets.y-200+  "px"
})
var h4all=document.querySelectorAll(".nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=5
        crsr.style.border="0.1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95C11E"
        crsr.style.backgroundColor=" #95C11E"
    })
})




gsap.to(".nav",{

    backgroundColor:'#000',
    duration:0.5,
    height:"110px",
    scrollTrigger:{
         trigger:".nav",
         scroller:"body",
        //  markers:true,
         start:"top -10%",
         end:"top -11%",
         scrub:1,
    },
});
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    },
});
 gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
   trigger:"#about-us",
   scroller:"body",
//   markers:true,
  start:"top 60%",
  end:"top 55%",
  scrub:2
    }
 })
 gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
   trigger:".cards",
   scroller:"body",
//   markers:true,
  start:"top 70%",
  end:"top 65%",
  scrub:3
    }
 })
 gsap.from("#left",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#left",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
 })
 gsap.from("#right",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#left",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
 })
 gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3 
    }
 })
