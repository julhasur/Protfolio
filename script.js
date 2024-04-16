
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
function valueSetters(){
    gsap.set("#nav a",{y:"-100%",opacity:0});
    gsap.set("#home span .child",{y: "100%"}) 
    gsap.set("#home .row i",{opacity:0})
    var tl=gsap.timeline();

    document.querySelectorAll("#Visual>g>g>path, #Visual>g>g>polyline ").forEach(function(e){
        var character = e
    
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
      })
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


.to("#loader .parent .child",{
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
   ease:Circ.easeInOut,
//calling home page function here 
   onComplete:function(){
    animateHomepage();
   }
})
 }
 function animateHomepage(){
 var tl=gsap.timeline();
 
 tl
 .to("#nav a",{
    y:0,
    opacity:1,
    stagger: .05,
    ease: Expo.easeInOut,
 })
 .to("#home .parent .child",{
     y:0,
     opacity:1,
     duration:1.5,
     ease: Expo.easeInOut
  
 })
 .to("#home .row i",{
 delay:-.5,
     opacity:1,
     ease: Expo.easeInOut,
     onComplete:function(){
         animateSVG();
     }
 })
 
 }
// function to animate the svg
function animateSVG(){
    
    gsap.to("#Visual>g>g>path,#Visual>g>g>polyline",{
        strokeDashoffset:0,
        duration:2,
        ease:Expo.easeInOut,
   

    })
}
  


//Function to animate each letter of the word
function animateWord() {
    var wordSpan = document.querySelector('.word'); // Get the span containing the word
    var word = wordSpan.innerText; // Get the word from the span
    wordSpan.innerHTML = ''; // Clear the original content
    for (var i = 0; i < word.length; i++) {
        var letter = word[i]; // Get each letter of the word
        var letterSpan = document.createElement('span'); // Create a new span for the letter
        letterSpan.textContent = letter; // Set the text content of the span to the letter
        letterSpan.classList.add('letter'); // Add the 'letter' class to the span
        wordSpan.appendChild(letterSpan); // Append the letter span to the word span
    }
    
    // GSAP animation to make letters bounce
    // gsap.fromTo('.letter', { y: -2 }, { y: 2, repeat: -1, yoyo: true, duration: 1, stagger: 0.1 });
    gsap.fromTo(".letter",{
      y: -2, 
    
    }, 
  
     { y: 2,
         repeat: -1,
          yoyo: true, 
          duration: 0.2,
 
          stagger:0.1
        
    })
}


  



 
revealToSpan();
valueSetters();
loaderAnimation();
animateWord();

