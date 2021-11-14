var canvas = document.getElementById("myCanvas");
ctx.getContext("2d");
img_width = 300;
img_height = 100; 

var img_image;

img_x = 100;
img_y = 100;

function add(){
   img_imgTag = new Image();
   img_imgTag.onload="uploading";
   img_imgTag.src = img_image;
}

function uploading() {

       ctx.drawimage(img_imgTag, img_x , img_y , img_width , img_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)

keyPressed= e.keycode;
console.log(keyPressed);

if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<= 90)){
    alphabetkey();
     document.getElementById("d1").innerHTML="You Pressed Alphabet Key";
}

else{ 
    otherKey();
    document.getElementById("d1").innerHTML="You Pressed symbol or other Key";
    console.log("other key");
}

if (keyPressed >=48 && keyPressed <=57) {
    numberkey();
    document.getElementById("d1").innerHTML="You Pressed number Key";
}

 if (keyPressed >=37 && keyPressed <=40){
     arrowKey();
     document.getElementById("d1").innerHTML = "You Pressed Arrow Key";
}

if (keyPressed ==17){
    specialKey();
    document.getElementById("d1").innerHTML = "You Pressed Special Key";
}

if (keyPressed == 18){
    specialKey();
    document.getElementById("d1").innerHTML = "You Pressed Special Key";
}

if (keyPressed == 22){
    specialKey();
    document.getElementById("d1").innerHTML = "You Pressed Special Key";
}

function alphabetkey()
{
  img_image="Alpkey.png";
  add();

}

function numberkey()
{
   img_image="numkey.png";
   add();
}

function arrowKey()
{
   img_image="Arrkey.png";
   add();
}

function specialKey()
{
   img_image="spkey.png";
   add();
}

function otherKey()
{
   img_image="otherkey.png";
   add();
}