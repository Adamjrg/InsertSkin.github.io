const deepfakeBtn = document.querySelector('#deepfake-btn');
const deepfakeVideo = document.querySelector('#deepfake-video');

deepfakeBtn.addEventListener('click', () => {
  deepfakeVideo.innerHTML = '<video src="deepfake.mp4" controls></video>';
  deepfakeVideo.style.display = 'block';
});
