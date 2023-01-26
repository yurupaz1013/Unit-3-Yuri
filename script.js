let title= document.querySelector(".title");
let storypart1= document.querySelector(".storypart1");
let buttons= document.querySelector(".buttons");
let storypart2Yes= document.querySelector(".option-one-screen");
let storypart2No= document.querySelector(".option-two-screen");
let storypart3No= document.querySelector(".option-one-end");
let storypart4No= document.querySelector(".option-two-end");
let planeButton = document.querySelector(".op1");
let planeButton2 = document.querySelector(".op2");
let planeButton3 = document.querySelector(".op1end");
let planeButton4 = document.querySelector(".op2end");





// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!


 planeButton.onclick=function(){
 storypart2Yes.style.display="block";
  storypart2No.style.display="none";   
};

//

planeButton2.onclick=function(){
 storypart2No.style.display="block";
    storypart2Yes.style.display="none";
};
//
 planeButton3.onclick=function(){
     storypart3No.style.display="block";   
};

 planeButton4.onclick=function(){
     storypart4No.style.display="block";   
};










