
// add smooth scrolling 

$(document).ready(function(){
    'use strict';
    
        $('.nav-item, #scroll-to-top').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
             }
          }
       });
});

/* active menu item on click */
$(document).ready(function(){
    'use strict';
    $('.navbar-nav li a').click(function(){
        
        'use strict';
       $('.navbar-nav li a').parent().removeClass("active");
        $(this).parent().addClass("active");
    });

});

/* highlight menu item on scroll*/

$(document).ready(function(){
     'use strict';
    
    $(window).scroll(function(){
       'use strict';
        
        $("section").each(function(){
           'use strict';
            var x = $(this).attr("id"); //ABOUT itd
            var  hei = $(this).outerHeight(); 
            var grttop = $(this).offset().top -70;
            
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei){
                $(".navbar-nav li a[href='#" + x + "']").parent().addClass("active");
              }
            
             else {
                 $(".navbar-nav li a[href='#" + x + "']").parent().removeClass("active");
                 }
            
        });
    });
});

/* add auto padding to header 
$(document).ready(function(){
    'use strict'
    setInterval(function(){
       'use strict'
       var windowsHeight = $(windows).height();
       var containerHeight = $(".header-container").height();
       var padTop = windowsHeight - containerHeight;
       $(".header-container").css({
           'padding-top': Math.round(padTop / 2) + 'px',
           'padding-bottom': Math.round(padTop / 2) + 'px',
       });
    }, 10);
});

*/
