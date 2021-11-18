let sliderX = document.getElementById('sliderX');
let sliderY = document.getElementById('sliderY');
let resultadoX = document.getElementById('resultadoX');
let resultadoY = document.getElementById('resultadoY');
let blur = document.getElementById('blur');
let spread = document.getElementById('spread');
let opacity = document.getElementById('opacity');
let resultadoBlur = document.getElementById('resultadoBlur');
let resultadoSpread = document.getElementById('resultadoSpread');
let resultadoOpacity = document.getElementById('resultadoOpacity');

let color = document.getElementById('color');
let resultadoColor = document.getElementById('resultadoColor');

let preview = document.getElementById('preview');

let buttonright = document.getElementById('buttonright');
let buttondown = document.getElementById('buttondown');
let buttonblur = document.getElementById('buttonblur');
let buttonspread = document.getElementById('buttonspread');
let buttonopacity = document.getElementById('buttonopacity');

let hover = document.querySelector('.hover');
let sides = document.querySelector('.sides');
let button= document.querySelector('.button');
let mirrors = document.querySelector('.mirrors');
let inout = document.querySelector('.inout');
let gradient = document.querySelector('.gradient');
let pile = document.querySelector('.pile');
let checker = document.querySelector('.checker');
let borders = document.querySelector('.borders');
let rainbow = document.querySelector('.rainbow');
let candy = document.querySelector('.candy');
let flames = document.querySelector('.flames');
let candle = document.querySelector('.candle');
let well = document.querySelector('.well');
let pyramid = document.querySelector('.pyramid');
let target = document.querySelector('.target');

sliderX.addEventListener('input', function () {
    resultadoX.innerHTML = sliderX.value + "px";
    preview.style.boxShadow = sliderX.value + 'px ' + sliderY.value + 'px 8px ' + color.value;
});

sliderY.addEventListener('input', function () {
    resultadoY.innerHTML = sliderY.value + "px";
    preview.style.boxShadow = sliderX.value + 'px ' + sliderY.value + 'px 8px ' + color.value;
});

blur.addEventListener('input', function(){
    resultadoBlur.innerHTML=  blur.value + "px";
    preview.style.boxShadow= blur.value + '5px 5px ' + spread.value + '1px 1px' + color.value;
});

spread.addEventListener('input', function(){
    resultadoSpread.innerHTML= spread.value + "px";
    preview.style.boxShadow= spread.value + '2px 2px ' + spread.value + '1px 1px' + color.value;
});

opacity.addEventListener('input', function(){
    resultadoOpacity.innerHTML=  blur.value + "8px";
    preview.style.boxShadow= blur.value + '8px 8px ' + spread.value + '8px 8px' + color.value;
});

color.addEventListener('input', function () {
    resultadoColor.innerHTML = color.value;
    preview.style.boxShadow = sliderX.value + 'px ' + sliderY.value + 'px 8px ' + color.value;

});

buttonright.addEventListener('click', function(){
    sliderX.value = 0;
});

buttondown.addEventListener('click', function(){
    sliderY.value = 0;
});

buttonblur.addEventListener('click', function(){
    blur.value = 0;
});

buttonspread.addEventListener('click', function(){
    spread.value = 0;
});

buttonopacity.addEventListener('click', function(){
    opacity.value = 1;
});

hover.addEventListener('click', function(){
    preview.style.boxShadow = "0px 10px 13px -7px #000000";
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 0px 10px 13px -7px #000000";
});

sides.addEventListener('click', function(){
    preview.style.boxShadow = "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000";
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000";
});

button.addEventListener('click', function(){
    preview.style.boxShadow = "inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E";
});

mirrors.addEventListener('click', function(){
    preview.style.boxShadow = "inset 2px 2px 2px 2px #1C6EA4, inset 11px 11px 2px 0px #2285C7, inset 20px 20px 2px 1px #289DEA, inset 29px 29px 2px 1px #57BBEA"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: inset 2px 2px 2px 2px #1C6EA4, inset 11px 11px 2px 0px #2285C7, inset 20px 20px 2px 1px #289DEA, inset 29px 29px 2px 1px #57BBEA";
});

inout.addEventListener('click', function(){
    preview.style.boxShadow = "5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000";
});

gradient.addEventListener('click', function(){
    preview.style.boxShadow = "0px 0px 0px 5px #A0A0A0, inset 0px 10px 27px -8px #141414, inset 0px -10px 27px -8px #A31925"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 0px 0px 0px 5px #A0A0A0, inset 0px 10px 27px -8px #141414, inset 0px -10px 27px -8px #A31925";
});

pile.addEventListener('click', function(){
    preview.style.boxShadow = "5px 5px 0px 0px #289FED, 10px 10px 0px 0px #5FB8FF, 15px 15px 0px 0px #A1D8FF, 20px 20px 0px 0px #CAE6FF, 25px 25px 0px 0px #E1EEFF"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 5px 5px 0px 0px #289FED, 10px 10px 0px 0px #5FB8FF, 15px 15px 0px 0px #A1D8FF, 20px 20px 0px 0px #CAE6FF, 25px 25px 0px 0px #E1EEFF";
});

checker.addEventListener('click', function(){
    preview.style.boxShadow = "10px 0 0 #F0F0F0, 20px 0 0 #000, 30px 0 0 #F0F0F0, 0 10px 0 #F0F0F0, 10px 10px 0 #000, 20px 10px 0 #F0F0F0, 30px 10px 0 #000, 0 20px 0 #000, 10px 20px 0 #F0F0F0, 20px 20px 0 #000, 30px 20px 0 #F0F0F0, 0 30px 0 #F0F0F0, 10px 30px 0 #000, 20px 30px 0 #F0F0F0, 30px 30px 0 #000"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 10px 0 0 #F0F0F0, 20px 0 0 #000, 30px 0 0 #F0F0F0, 0 10px 0 #F0F0F0, 10px 10px 0 #000, 20px 10px 0 #F0F0F0, 30px 10px 0 #000, 0 20px 0 #000, 10px 20px 0 #F0F0F0, 20px 20px 0 #000, 30px 20px 0 #F0F0F0, 0 30px 0 #F0F0F0, 10px 30px 0 #000, 20px 30px 0 #F0F0F0, 30px 30px 0 #000";
});

borders.addEventListener('click', function(){
    preview.style.boxShadow = "8px 0px 0px 0px #DCD0C0, 0px 8px 0px 0px #B1938B, -8px 0px 0px 0px #4E4E56, 0px 0px 0px 8px #DA635D"; 
    preview.style.background = "white";
    preview.style.color = "#1C6EA4";
    preview.style.color = "black";

    textArea.value = "box-shadow: 8px 0px 0px 0px #DCD0C0, 0px 8px 0px 0px #B1938B, -8px 0px 0px 0px #4E4E56, 0px 0px 0px 8px #DA635D";
});

rainbow.addEventListener('click', function(){
    preview.style.boxShadow = "7px -5px 10px 0px #4B0082, 11px -9px 10px 0px #0000FF, 16px -14px 10px 0px #00FF00, 20px -17px 10px 0px #FFFF00, 24px -19px 10px 0px #FF7F00, 27px -23px 10px 0px #FF0000"; 
    preview.style.background = "#9400D3";
    preview.style.color = "white";

    textArea.value = "box-shadow: 7px -5px 10px 0px #4B0082, 11px -9px 10px 0px #0000FF, 16px -14px 10px 0px #00FF00, 20px -17px 10px 0px #FFFF00, 24px -19px 10px 0px #FF7F00, 27px -23px 10px 0px #FF0000";
});

candy.addEventListener('click', function(){
    preview.style.boxShadow = "5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF";
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF";
});

flames.addEventListener('click', function(){
    preview.style.boxShadow = "4px -4px 15px 0px #FF1F1F, 12px -11px 7px 0px #FF9376, 20px -5px 7px 0px #FFE264, 20px 6px 7px 0px #F6FF33, 13px 12px 17px 0px #FF9527, 2px 17px 17px 0px #FF0000, -9px 21px 18px 0px #FFF212, -9px 6px 11px 0px #FF0808, -11px -9px 11px 0px #FFFA17, -11px -9px 11px 0px #FFFA17";
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 4px -4px 15px 0px #FF1F1F, 12px -11px 7px 0px #FF9376, 20px -5px 7px 0px #FFE264, 20px 6px 7px 0px #F6FF33, 13px 12px 17px 0px #FF9527, 2px 17px 17px 0px #FF0000, -9px 21px 18px 0px #FFF212, -9px 6px 11px 0px #FF0808, -11px -9px 11px 0px #FFFA17, -11px -9px 11px 0px #FFFA17";
});

candle.addEventListener('click', function(){
    preview.style.boxShadow = "#FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px"; 
    preview.style.background = "white";
    preview.style.color = "#1C6EA4";
    preview.style.color = "black";

    textArea.value = "box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px";
});

well.addEventListener('click', function(){
    preview.style.boxShadow = "0px 0px 0px 8px #000000, 0px 0px 0px 16px #4B4C4B, 0px 0px 0px 24px #828482, 0px 0px 0px 31px #B2B5B2, 0px 0px 0px 39px #DADDDA";  
    preview.style.background = "#000000";
    preview.style.color = "white";

    textArea.value = "box-shadow: 0px 0px 0px 8px #000000, 0px 0px 0px 16px #4B4C4B, 0px 0px 0px 24px #828482, 0px 0px 0px 31px #B2B5B2, 0px 0px 0px 39px #DADDDA";
});

pyramid.addEventListener('click', function(){
    preview.style.boxShadow = "0px 3px 0px 2px rgba(0,0,0,0.1), 0px 6px 0px 4px rgba(0,0,0,0.1), 0px 9px 0px 6px rgba(0,0,0,0.1), 0px 12px 0px 8px rgba(0,0,0,0.1), 0px 15px 0px 10px rgba(0,0,0,0.1), 0px 18px 0px 12px rgba(0,0,0,0.1), 0px 21px 0px 14px rgba(0,0,0,0.1), 0px 24px 0px 16px rgba(0,0,0,0.1), 0px 27px 0px 18px rgba(0,0,0,0.1), 0px 30px 0px 20px rgba(0,0,0,0.1)"; 
    preview.style.background = "#444444";
    preview.style.color = "white";

    textArea.value = "box-shadow: 0px 3px 0px 2px rgba(0,0,0,0.1), 0px 6px 0px 4px rgba(0,0,0,0.1), 0px 9px 0px 6px rgba(0,0,0,0.1), 0px 12px 0px 8px rgba(0,0,0,0.1), 0px 15px 0px 10px rgba(0,0,0,0.1), 0px 18px 0px 12px rgba(0,0,0,0.1), 0px 21px 0px 14px rgba(0,0,0,0.1), 0px 24px 0px 16px rgba(0,0,0,0.1), 0px 27px 0px 18px rgba(0,0,0,0.1), 0px 30px 0px 20px rgba(0,0,0,0.1)"; 
});

target.addEventListener('click', function(){
    preview.style.boxShadow = "0px 20px 0px -10px #FFFFFF, 0px -20px 0px -10px #FFFFFF, 20px 0px 0px -10px #FFFFFF, -20px 0px 0px -10px #FFFFFF, 0px 0px 0px 10px #FF0000"; 
    preview.style.background = "white";
    preview.style.color = "#F00";

    textArea.value = "box-shadow: 0px 20px 0px -10px #FFFFFF, 0px -20px 0px -10px #FFFFFF, 20px 0px 0px -10px #FFFFFF, -20px 0px 0px -10px #FFFFFF, 0px 0px 0px 10px #FF0000";
});

