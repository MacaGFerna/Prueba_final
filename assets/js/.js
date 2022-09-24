$(function(){
    $("a").click (function(event){
        event.preventDefault();

        var car = this.hash; 

        $("html, body").animated({

        }, 800, function (){
            window.location.hash = car; 
        });

     }
)}
) 