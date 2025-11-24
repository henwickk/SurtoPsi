const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});



// Modal 2
const openBtn2 = document.getElementById('openModal2');
const closeBtn2 = document.getElementById('closeModal2');
const overlay2 = document.getElementById('overlay2');

openBtn2.addEventListener('click', () => {
  overlay2.style.display = 'flex';
});

closeBtn2.addEventListener('click', () => {
  overlay2.style.display = 'none';
});     

// MODAL 3
const openBtn3 = document.getElementById('openModal3');
const closeBtn3 = document.getElementById('closeModal3');
const overlay3 = document.getElementById('overlay3');   

openBtn3.addEventListener('click', () => {
  overlay3.style.display = 'flex';
});

closeBtn3.addEventListener('click', () => {
  overlay3.style.display = 'none';
});   

// MODAL 4
const openBtn4 = document.getElementById('openModal4');
const closeBtn4 = document.getElementById('closeModal4');
const overlay4 = document.getElementById('overlay4');

openBtn4.addEventListener('click', () => {
  overlay4.style.display = 'flex';
});

closeBtn4.addEventListener('click', () => {
  overlay4.style.display = 'none';
});

  const codigoFrequencia = "presenca-12345"; // aqui você muda pro código que quiser

  new QRCode(document.getElementById("qrcode"), {
    text: codigoFrequencia,
    width: 256,
    height: 256
  });

    new QRCode(document.getElementById("qrcode2"), {
    text: codigoFrequencia,
    width: 256,
    height: 256
  });