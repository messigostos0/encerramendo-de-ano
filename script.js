let menuAberto = false;

function toggleMenu() {
  const menu = document.getElementById("side-menu");
  if(menuAberto) {
    menu.style.width = "0";
    menuAberto = false;
  } else {
    menu.style.width = "250px";
    menuAberto = true;
  }
}
let fontSize = 16; // tamanho inicial da fonte em pixels

function changeFontSize(change) {
  fontSize += change; // aumenta ou diminui
  if(fontSize < 12) fontSize = 12; // tamanho mínimo
  if(fontSize > 30) fontSize = 30; // tamanho máximo
  document.querySelectorAll('body, main, section, p, h1, h2').forEach(el => {
    el.style.fontSize = fontSize + 'px';
  });
}
