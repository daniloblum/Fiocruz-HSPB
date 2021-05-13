// DESKTOP



// // MOBILE


var sidebarBtn = $("#sidebar-toggle")
var content = $(".content")
var sidebarMobile = $(".sidebar")


function touchControl(event, obj) {
    if (event == true) {
        obj.style.touchAction = "auto";
    }
}

sidebarBtn.on("click", function () {
   
    

    if (sidebarMobile.hasClass("sidebar--open")) {
        
        // closing
        sidebarMobile.removeClass("sidebar--open")
        sidebarMobile.addClass("sidebar--close")
        sidebarBtn.removeClass("sidebar-toggle--open")
        sidebarBtn.addClass("sidebar-toggle--close")

        content.removeClass("touch-disable")
        content.addClass("touch-enable")
        
    } else {

        // opening
        sidebarMobile.removeClass("sidebar--close")
        sidebarMobile.addClass("sidebar--open")
        sidebarBtn.removeClass("sidebar-toggle--close")
        sidebarBtn.addClass("sidebar-toggle--open")

        content.removeClass("touch-enable")
        content.addClass("touch-disable")
        
    }
})

if($(window).width()<768){

   

}