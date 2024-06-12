function playVideo(videoId, imgElement) {
    var video = document.getElementById(videoId);
    video.style.display = "block";
    video.play();
    imgElement.style.display = "none";
    video.nextElementSibling.style.display = "none"; 
  }
  function togglePlayPause(videoId, button) {
    var video = document.getElementById(videoId);
    if (video.paused) {
      video.play();
      button.style.display = "none";
    } else {
      video.pause();
      button.style.display = "block";
      button.textContent = "Play";
    }
  }
  document.querySelectorAll("video").forEach((video) => {
    video.addEventListener("play", function () {
      this.nextElementSibling.style.display = "none";
    });
    video.addEventListener("pause", function () {
      this.nextElementSibling.style.display = "block";
      this.nextElementSibling.textContent = "Play";
    });
    video.addEventListener("ended", function () {
      this.style.display = "none"; // Hide the video
      this.nextElementSibling.style.display = "block";
      this.nextElementSibling.textContent = "Play";
      this.previousElementSibling.style.display = "block"; // Show the image again when the video ends
    });
  });