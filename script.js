const DetectingBtn = document.getElementById('startDetecting');
let originaltext = DetectingBtn.textContent;
let originalbackground=DetectingBtn.style.backgroundColor

DetectingBtn.addEventListener('click', function() {

  if (DetectingBtn.textContent === originaltext) {
      DetectingBtn.textContent = 'Initiated...';
      DetectingBtn.style.backgroundColor= '#48df73';
    } else {
      DetectingBtn.textContent = originaltext;
      DetectingBtn.style.backgroundColor=originalbackground;
    }
});