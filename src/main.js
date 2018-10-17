import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

let hue = document.querySelector("input:checked").value;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = hue;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const clearCanvas = e => {
  if (e.code === 'KeyZ' && (e.metaKey || e.ctrlKey)) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
}

const draw = e => {
  if (!isDrawing) return; //stop the function from running when they are not moused down
  ctx.strokeStyle = hue;
  ctx.beginPath();
  // start from:
  ctx.moveTo(lastX, lastY);
  // move to:
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

const addEventListeners = () => {
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
  window.addEventListener('keydown', clearCanvas);
}

const init = () => {
  addEventListeners();
}

document.addEventListener("DOMContentLoaded", function () {
  console.log('(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Welcome to my site!! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧')
  init();
});
