var mouseEvent="empty";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="green";
width=  3;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
  }
  canvas.addEventListener("mousemove",my_mousemove);
 function my_mousemove(e){
     current_position_of_mouse_x= e.clientX-canvasoffsetLeft;
     current_position_of_mouse_y= e.clientY-canvasoffsetTop;

     if (mouseEvent=="mouseDown"){
         console.log("current_position_of_mouse_x,current_position_of_mouse_y");
         console.log("x="+current_position_of_mouse_x + "y=" + current_position_of_mouse_y );
         ctx.beginPath();
         ctx.strokeStyle=color;
         ctx.lineWidth=width;
         ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
         ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
         ctx.stroke();
         
     }
     
 }
  
  canvas.addEventListener("mouseup",my_mouseup);
 function my_mouseup(e){
     mouseEvent="mouseUP";
 }
 canvas.addEventListener("mouseleave",my_mouseleave);
 function my_mouseleave(e){
     mouseEvent="mouseleave";
 }

 