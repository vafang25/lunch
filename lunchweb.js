document.addEventListener("DOMContentLoaded", function(event) {
    var sasaso = document.getElementById("mondayImage");
    sasaso.addEventListener('click',function(e){
        console.log (sasaso.src)
        if (sasaso.src === "file:///C:/Users/GWC13/Documents/whack/sss.jpg") {
            sasaso.src = "file:///C:/Users/GWC13/Documents/whack/monday.jpg";
        } else if (sasaso.src === "file:///C:/Users/GWC13/Documents/whack/monday.jpg") {
            sasaso.src = "file:///C:/Users/GWC13/Documents/whack/sss.jpg";
        }
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    var mex = document.getElementById("tuesdayImage");
    mex.addEventListener('click',function(e){
        console.log (mex.src)
        if (mex.src === "file:///C:/Users/GWC13/Documents/whack/tacos.jpg") {
            mex.src = "file:///C:/Users/GWC13/Documents/whack/tuesday.jpg";
        } else if (mex.src === "file:///C:/Users/GWC13/Documents/whack/tuesday.jpg") {
            mex.src = "file:///C:/Users/GWC13/Documents/whack/tacos.jpg";
        }
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    var noah = document.getElementById("wednesdayImage");
    noah.addEventListener('click',function(e){
        console.log (noah.src)
        if (noah.src === "file:///C:/Users/GWC13/Documents/whack/pasta.jpg") {
            noah.src = "file:///C:/Users/GWC13/Documents/whack/wednesday.jpg";
        } else if (noah.src === "file:///C:/Users/GWC13/Documents/whack/wednesday.jpg") {
            noah.src = "file:///C:/Users/GWC13/Documents/whack/pasta.jpg";
        }
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    var lascano = document.getElementById("thursdayImage");
    lascano.addEventListener('click',function(e){
        console.log (lascano.src)
        if (lascano.src === "file:///C:/Users/GWC13/Documents/whack/pizza.jpg") {
            lascano.src = "file:///C:/Users/GWC13/Documents/whack/thursday.jpg";
        } else if (lascano.src === "file:///C:/Users/GWC13/Documents/whack/thursday.jpg") {
            lascano.src = "file:///C:/Users/GWC13/Documents/whack/pizza.jpg";
        }
    });
});