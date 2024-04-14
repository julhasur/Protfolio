
//creating this function to make span inside another span which is  inside any  elements with class reveal
//elem is what ever is inside reveal class

function revealToSpan(){
    document.querySelectorAll(".reveal").forEach(function(elem){
        //creating two spans 
        var parent = document.createElement("span");
        var child= document.createElement("span");
        //parent and child sets their respective class name
        parent.classList.add("parent");
        child.classList.add("child");
        //span parent gets child and child gets elem details
         child.innerHTML= elem.innerHTML;
    //this adds the child span inside parent
         parent.appendChild(child);
        //elem replaces its value with parent
        elem.innerHTML=""; //clearing the element
        elem.appendChild(parent);
    });
}
function loaderAnimation(){
    revealToSpan();

var tl=gsap.timeline();

tl
.from("#loader .child span",{
    x:100,
    stagger:.2,
    duration: 1.4,

   ease:Power3.easeInOut
})


.to("#loader.parent .child",{
    y:"-100%",
    duration:1,
   ease:Circ.easeInOut
})

.to("#loader",{
   height:0,
    duration: .5,
  
   ease:Circ.easeInOut
})
.to("#green",{
    height:"100%",
    top:0,
    duration: 1,
delay:-.5,
   ease:Circ.easeInOut
})
// to turn the green screen height to 0 again
.to("#green",{
   height:"0%",
    duration: 1,
    delay:-.5,
   ease:Circ.easeInOut
})
 }
// function to animate the svg
function animateSVG(){
    document.querySelectorAll("#Visual>g>g>path, #Visual>g>g>polyline ").forEach(function(e){
        var character = e
    
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
      })
    gsap.to("#Visual>g>g>path,#Visual>g>g>polyline",{
        strokeDashoffset:0,
        duration:2,
        ease:Expo.easeInOut,
        delay:2

    })
}

function animateHomepage(){
    gsap.set("#nav",{y:"-100%",opacity:0});
gsap.set("home span .child",{y: "100%"}) 
}

revealToSpan();
loaderAnimation();
 animateSVG();