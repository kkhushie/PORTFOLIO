// Add an event listener to wait for the content to load
window.addEventListener("load", function() {
    // When the content is loaded, add a "loaded" class to the body
    document.body.classList.add("loaded");
});

var tl=gsap.timeline()

tl.from("nav h1",{
    y:-70,
    duration:0.6,
})
tl.from("#search",{
    y:-70,
    duration:0.6,
})
tl.from(".btns button,h3",{
    y:-70,
    duration:0.6,
})
tl.from(".profile",{
    height:0,
    opacity:0
})
tl.from(".profile-image",{
    height:0,
    opacity:0
})
tl.from(".profile-data",{
    height:0,
    opacity:0
})
gsap.from(".slider .know",{ 
    width:0,
        duration:2,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        start: 'top 80%',
        marker:true,
        scrub:2,
        end: 'bottom 70%',
       

    }
})

tl.from(".project-box .project",{
    height:"0px",
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        start: 'top 10%',
        scrub:2,
        end: 'bottom 70%',
       

    }
    
})
gsap.from("footer",{
    height:"0px",
    opacity:0,
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        start: 'top 10%',
        scrub:2,
        end: 'bottom 70%',
       

    }
    
})
let menuBar=document.querySelector(".menubar")
let btns=document.querySelector(".btns")
let flag=0

menuBar.addEventListener("click",()=>{
    if(flag===0){
btns.style.display="block"
flag=1
gsap.from(".btns",{
    height:0,
    duration:0.3
})
}
else{
    btns.style.display="none"
    flag=0
    }
})