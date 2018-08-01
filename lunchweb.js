document.addEventListener("DOMContentLoaded", function(event) {
    var image = document.getElementById("mondayImage")
    console.log ("bruh")
    image.addEventListener('click',function(e){
        document.getElementbyId("mondayImage").src = "tuesdayImage"
    }
})
