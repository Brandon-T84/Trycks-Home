
  var count = 0;

document.getElementById('Submit').onclick = function (){

count+=1;

  console.log(count)
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

   if (count <4){
  var size = images.length;
  var x = Math.floor(size * Math.random());
  console.log(x);
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";
}

if (count >=4){
var size = images.length;
var getcard = localStorage.getItem("sendcard");
console.log(getcard)

if (getcard == "AceSpades"){
  var x = 39
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}
 if (getcard == "KingSpades"){
  var x = 47
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

 if (getcard == "QueenSpades"){
  var x = 51
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "JackSpades"){
  var x = 43
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}
if (getcard == "10Spades"){
  var x = 3
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "9Spades"){
  var x = 35
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "8Spades"){
  var x = 31
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "7Spades"){
  var x = 27
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "6Spades"){
  var x = 23
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "5Spades"){
  var x = 19
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "4Spades"){
  var x = 15
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "3Spades"){
  var x = 11
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "2Spades"){
  var x = 7
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "AceHearts"){
  var x = 38
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

 if (getcard == "KingHearts"){
  var x = 46
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

 if (getcard == "QueenHearts"){
  var x = 50
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "JackHearts"){
  var x = 42
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}
if (getcard == "10Hearts"){
  var x = 2
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "9Hearts"){
  var x = 34
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "8Hearts"){
  var x = 30
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "7Hearts"){
  var x = 26
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "6Hearts"){
  var x = 22
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "5Hearts"){
  var x = 18
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "4Hearts"){
  var x = 14
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "3Hearts"){
  var x = 10
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "2Hearts"){
  var x = 6
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}
//////////

if (getcard == "AceDiamonds"){
  var x = 37
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

 if (getcard == "KingDiamonds"){
  var x = 45
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

 if (getcard == "QueenDiamonds"){
  var x = 49
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "JackDiamonds"){
  var x = 41
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}
if (getcard == "10Diamonds"){
  var x = 1
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "9Diamonds"){
  var x = 33
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "8Diamonds"){
  var x = 29
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "7Diamonds"){
  var x = 25
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "6Diamonds"){
  var x = 21
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "5Diamonds"){
  var x = 17
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "4Diamonds"){
  var x = 13
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "3Diamonds"){
  var x = 9
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "2Diamonds"){
  var x = 5
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}
/////////////////////

if (getcard == "AceClubs"){
  var x = 36
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

 if (getcard == "KingClubs"){
  var x = 44
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

 if (getcard == "QueenClubs"){
  var x = 48
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "JackClubs"){
  var x = 40
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}
if (getcard == "10Clubs"){
  var x = 0
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "9Clubs"){
  var x = 32
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "8Clubs"){
  var x = 28
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "7Clubs"){
  var x = 24
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "6Clubs"){
  var x = 20
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "5Clubs"){
  var x = 16
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "4Clubs"){
  var x = 12
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "3Clubs"){
  var x = 8
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}

if (getcard == "2Clubs"){
  var x = 4
  console.log(x)
  var element = document.getElementsByClassName('flip-card-back');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";

}
}
}
