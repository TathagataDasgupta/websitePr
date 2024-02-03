var cur=document.querySelector("#cursor");
var page1content=document.querySelector("#page1content");
page1content.addEventListener("mousemove", function(e){
   gsap.to(cursor,{
    x:e.clientX,
    y:e.clientY
   })
});


page1content.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    });
});
page1content.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    });
});
page1content.addEventListener("click", function(){
    gsap.to(cursor,{

        onComplete: function(){
            // Redirect to another page
            window.location.href = "page.html";}
    });
});