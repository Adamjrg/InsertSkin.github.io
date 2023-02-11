
const backgroundVideo = document.getElementById("backgroundVideo");
backgroundVideo.addEventListener("ended", function() {
  backgroundVideo.classList.add("hide");
});

window.onload = function() {
    const backgroundVideo = document.getElementById("backgroundVideo");
    backgroundVideo.addEventListener("ended", function() {
      document.body.classList.add("video-ended");
    });
  };
  
