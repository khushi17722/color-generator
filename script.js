let colorBox = document.getElementById('colorBox');
let generateColor = document.getElementById('generateColor');
let hexacode = document.getElementById('hexacode');

function hexacolor() {
    return Math.floor(Math.random() * 0XFFFFFF);
}
generateColor.addEventListener('click', () => {
    const color = '#' + hexacolor().toString(16).padStart(6, '0');
    colorBox.style.background = color;
    hexacode.innerText = color;
});