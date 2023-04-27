const video = document.getElementById('video');
const fileInput = document.getElementById('fileInput');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const volumeUp = document.getElementById('volumeUp');
const volumeDown = document.getElementById('volumeDown');
const selector = document.getElementById('selector');
const videoybotones= document.getElementById('videoybotones');


fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const type = file.type;
    if (type.includes('video/')) {
      const fileURL = URL.createObjectURL(file);
      video.src = fileURL;
      video.load();
    } else {
      alert('Error: Solo se permiten archivos de video.');
    }
  });

  play.addEventListener('click', () => {
    video.play();
  });
  
  pause.addEventListener('click', () => {
    video.pause();
  });
  
  volumeUp.addEventListener('click', () => {
    if (video.volume < 1) {
      video.volume += 0.1;
    }
  });
  
  volumeDown.addEventListener('click', () => {
    if (video.volume > 0) {
      video.volume -= 0.1;
    }
  });

  video.addEventListener('loadstart', () => {
    alert ('Cargando vídeo...');
  });
  
  video.addEventListener('loadeddata', () => {
    alert('Vídeo listo para reproducir');
    selector.setAttribute("style", "display:none;");
    videoybotones.setAttribute("style", "display:flex;");
  });
  