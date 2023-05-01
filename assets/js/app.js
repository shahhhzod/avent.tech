let mask = document.querySelector(".mask");

window.addEventListener("load", () => {
	mask.classList.add("hide");
	setTimeout(() => {
		mask.remove();
	}, 600);
});


function burgerMenu() {
	const menuIcon = document.getElementsByClassName("burgerMenu")[0];
	const navigationBlock =
		document.getElementsByClassName("navigationMobile")[0];

	if (navigationBlock.classList.length === 2) {
		navigationBlock.classList.remove("navigationMobileNoActive");
	} else {
		navigationBlock.classList.add("navigationMobileNoActive");
	}
}



//Global variables
var element;


document.addEventListener("DOMContentLoaded", function(event) {
    var cursor = document.querySelector(".custom-cursor");
    var links = document.querySelectorAll("a");
    var initCursor = false;
  
    for (var i = 0; i < links.length; i++) {
      var selfLink = links[i];
  
      selfLink.addEventListener("mouseover", function() {
        cursor.classList.add("custom-cursor--link");
      });
      selfLink.addEventListener("mouseout", function() {
        cursor.classList.remove("custom-cursor--link");
      });
    }
  
    window.onmousemove = function(e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;
  
      if (!initCursor) {
        // cursor.style.opacity = 1;
        TweenLite.to(cursor, 0.3, {
          opacity: 1
        });
        initCursor = true;
      }
  
      TweenLite.to(cursor, 0, {
        top: mouseY + "px",
        left: mouseX + "px"
      });
    };
  
    window.onmouseout = function(e) {
      TweenLite.to(cursor, 0.3, {
        opacity: 0
      });
      initCursor = false;
    };
  });
  







//Detect onclick event
if (window.matchMedia("(max-width: 920px)").matches === false) {
    $(".ham").on("click", function(){
        $("menu").css("right", "0px");
        $(".overlay").css("opacity","1");
        $(".overlay").css("z-index","99");
    });

    $(".close").on("click", function(){
        $("menu").css("right", "-400px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });

    $(".overlay").on("click", function(){
        $("menu").css("right", "-400px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });
} else {
    $(".ham").on("click", function(){
        $(".nav_content").css("right", "0px");
        $(".overlay").css("opacity","1");
        $(".overlay").css("z-index","1");
    });
    
    $(".close").on("click", function(){
        $(".nav_content").css("right", "-200px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });
    
    $(".overlay").on("click", function(){
        $(".nav_content").css("right", "-200px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });
}


//Scroller Nav
window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("nav").css("background-color","var(--black)") ;
    } else {
        $("nav").css("background-color","transparent") ;
    }
}



