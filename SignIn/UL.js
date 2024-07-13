
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".netflix-navbar").css("background" , "#0C0C0C");
        }
  
        else{
            $(".netflix-navbar").css("background" , "transparent");  	
        }
    });

  })


function position(id){
  var card = document.getElementsByClassName('card')[id];
  // card.style.transform = 'scale(1.5)';
  console.log(id)
}

// JavaScript
const video = document.getElementById("video");
const muteBtn = document.getElementById("mute-btn");
const muteIcon = document.getElementById("mute-icon");

muteBtn.addEventListener("click", () => {
    if (video.muted) {
        video.muted = false;
        muteIcon.classList.remove("bi-volume-mute-fill");
        muteIcon.classList.add("bi-volume-up-fill");
        muteBtn.innerText = "Mute";
    } else {
        video.muted = true;
        muteIcon.classList.remove("bi-volume-up-fill");
        muteIcon.classList.add("bi-volume-mute-fill");
        muteBtn.innerText = "Unmute";
    }
});
