

var doc = document,
    cvs = doc.getElementById('j-cvs'), ctx,
config = {
    w: 400, h: 360
},
mouseDown = false;

var debug = function(msg){
    var obj = doc.getElementById('debug');
    obj.innerHTML += msg + '<br>';
}

function getLocalCoords(elem, ev) {
    var ox = 0, oy = 0;
    var first;
    var pageX, pageY;
    // currentTarget element.
    while (elem != null) {
        ox += elem.offsetLeft;
        oy += elem.offsetTop;
        elem = elem.offsetParent;
    }
    // fix,<=IE8
    if ("changedTouches" in ev) {
        first = ev.changedTouches[0];
        pageX = first.pageX;
        pageY = first.pageY;
    } else {
        pageX = ev.pageX;
        pageY = ev.pageY;
    }
    return { 'x': pageX - ox, 'y': pageY - oy };
}
function diffTransSize(cxt, threshold, callback){
    if (!'getImageData' in ctx) return; 
    threshold = threshold || 0.5;
    if (threshold >1 || threshold < 0) threshold = 1;
    var imageData = ctx.getImageData(0, 0, cvs.width, cvs.height),
        pix = imageData.data,
        pixLength = pix.length,
        pixelSize = pixLength*0.25;
    var i = 1, k, l=0;
    for (; i <= pixelSize; i++) { // 3, 7, 11 -> 4n-1
        if (0 === pix[4*i-1]) l++;
    };
    if (l>pixelSize * threshold) {
        callback.apply(ctx, [l]);
    };
}
function scratchLine(cvs, x, y, fresh) {
    ctx = cvs.getContext('2d');
    // sumsung Android 4.1.2, 4.2.2 default browser does not render, https://goo.gl/H5lwgo
    ctx.globalCompositeOperation = 'destination-out'; 

    ctx.lineWidth = 45;
    ctx.lineCap = ctx.lineJoin = 'round';
    ctx.strokeStyle = 'rgba(0,0,0,1)'; //'#000';
    if (fresh) {
        ctx.beginPath();
        // bug WebKit/Opera/IE9: +0.01
        ctx.moveTo(x+0.1, y);
    }
    ctx.lineTo(x, y);
    ctx.stroke();
    // fix sumsung bug
    var style = cvs.style; // cursor/lineHeight
    style.lineHeight = style.lineHeight == '1' ? '1.1' : '1';

    diffTransSize(ctx, 0.5, function() {
        document.getElementById('title').innerHTML ='50% complete';
    });
}
function setupCanvases() {
    cvs.width = config.w;
    cvs.height = config.h;
    var ctx = cvs.getContext("2d");
    // add mask
    ctx.fillStyle = '#242526';
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    
    // On mouse down
    var mousedown_handler = function(e) {
        var local = getLocalCoords(cvs, e);
        mouseDown = true;
        scratchLine(cvs, local.x, local.y, true);
        // debug('touchstart')
        if (e.cancelable) { e.preventDefault(); }
        return false;
    };
    // On mouse move
    var mousemove_handler = function(e) {
        // debug('touchmove')
        if (!mouseDown) { return true; }
        var local = getLocalCoords(cvs, e);
        // debug(local.x + ',' + local.y);
        scratchLine(cvs, local.x, local.y, false);

        if (e.cancelable) { e.preventDefault(); }
        return false;
    };
    // On mouseup
    var mouseup_handler = function(e) {
        // debug('touchend')
        if (mouseDown) {
            mouseDown = false;
            if (e.cancelable) { e.preventDefault(); }
            return false;
        }
        return true;
    };
    on(cvs, 'mousedown', mousedown_handler);
    on(cvs, 'touchstart', mousedown_handler);
    on(window, 'mousemove', mousemove_handler);
    on(window, 'touchmove', mousemove_handler);
    on(window, 'mouseup', mouseup_handler);
    on(window, 'touchend', mouseup_handler);
}
function on(E, N, FN){
    E.addEventListener ? E.addEventListener(N, FN, !1) : E.attachEvent('on' + N, FN);
}
setupCanvases();



  
var getcard = localStorage.getItem("sendcard2");
 
  var images = [
   '10C.png',
   '10D.png',
   '10H.png',
   '10S.png',
   '2C.png',
   '2D.png',
   '2H.png',
   '2S.png',
   '3C.png',
   '3D.png',
   '3H.png',
   '3S.png',
   '4C.png',
   '4D.png',
   '4H.png',
   '4S.png',
   '5C.png',
   '5D.png',
   '5H.png',
   '5S.png',
   '6C.png',
   '6D.png',
   '6H.png',
   '6S.png',
   '7C.png',
   '7D.png',
   '7H.png',
   '7S.png',
   '8C.png',
   '8D.png',
   '8H.png',
   '8S.png',
   '9C.png',
   '9D.png',
   '9H.png',
   '9S.png',
   'AC.png',
   'AD.png',
   'AH.png',
   'AS.png',
   'JC.png',
   'JD.png',
   'JH.png',
   'JS.png',
   'KC.png',
   'KD.png',
   'KH.png',
   'KS.png',
    'QC.png',
   'QD.png',
   'QH.png',
   'QS.png',
   
   
   
   


   ];

  
if (getcard == "AceSpades"){
  var x = 39
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}
 if (getcard == "KingSpades"){
  var x = 47
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

 if (getcard == "QueenSpades"){
  var x = 51
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "JackSpades"){
  var x = 43
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}
if (getcard == "10Spades"){
  var x = 3
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "9Spades"){
  var x = 35
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "8Spades"){
  var x = 31
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "7Spades"){
  var x = 27
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "6Spades"){
  var x = 23
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "5Spades"){
  var x = 19
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "4Spades"){
  var x = 15
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "3Spades"){
  var x = 11
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "2Spades"){
  var x = 7
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "AceHearts"){
  var x = 38
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

 if (getcard == "KingHearts"){
  var x = 46
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

 if (getcard == "QueenHearts"){
  var x = 50
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "JackHearts"){
  var x = 42
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}
if (getcard == "10Hearts"){
  var x = 2
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "9Hearts"){
  var x = 34
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "8Hearts"){
  var x = 30
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "7Hearts"){
  var x = 26
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "6Hearts"){
  var x = 22
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "5Hearts"){
  var x = 18
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "4Hearts"){
  var x = 14
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "3Hearts"){
  var x = 10
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "2Hearts"){
  var x = 6
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}
//////////

if (getcard == "AceDiamonds"){
  var x = 37
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

 if (getcard == "KingDiamonds"){
  var x = 45
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

 if (getcard == "QueenDiamonds"){
  var x = 49
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "JackDiamonds"){
  var x = 41
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}
if (getcard == "10Diamonds"){
  var x = 1
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "9Diamonds"){
  var x = 33
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "8Diamonds"){
  var x = 29
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "7Diamonds"){
  var x = 25
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "6Diamonds"){
  var x = 21
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "5Diamonds"){
  var x = 17
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "4Diamonds"){
  var x = 13
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "3Diamonds"){
  var x = 9
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "2Diamonds"){
  var x = 5
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}
/////////////////////

if (getcard == "AceClubs"){
  var x = 36
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

 if (getcard == "KingClubs"){
  var x = 44
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

 if (getcard == "QueenClubs"){
  var x = 48
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "JackClubs"){
  var x = 40
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}
if (getcard == "10Clubs"){
  var x = 0
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "9Clubs"){
  var x = 32
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "8Clubs"){
  var x = 28
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "7Clubs"){
  var x = 24
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "6Clubs"){
  var x = 20
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "5Clubs"){
  var x = 16
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "4Clubs"){
  var x = 12
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "3Clubs"){
  var x = 8
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}

if (getcard == "2Clubs"){
  var x = 4
  console.log(x)
  var img = document.getElementById("image");
  img.src = images[x];
}


