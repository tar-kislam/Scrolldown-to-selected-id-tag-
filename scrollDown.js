function scrollDown(){
    $(document).ready(function(){
        // The line below (and the second condition involving winLocHash are included just so this example works
        var winLocHash = '#toppageload';           
        if ((window.location.hash === '#topageload') || (winLocHash === '#toppageload')) {
            $('html, body').animate({scrollTop: $("#pageload").offset().top}, 200);
        }   
    });
}

//You can edit the 'pageload' id with anything you want.
//'200' is the timer that shows how slowly scroll down
