var Ball,
    back="#272727"
    colDef="white",
    colors=["#e9e96f","#00d1b6","#00d172"]
    W = 1,
    A = 1,
    keys=false;

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(back)
  textAlign(CENTER);
  colDef=random(colors)
  Ball = new Palla(random(-250,250),random(-150,150),100,colDef);
  if (windowWidth > windowHeight) {W = windowHeight/500} else {W = windowWidth/500}
}

function draw() {
 translate(width/2,height/2)
 scale(W)
 scale(0.85)
 background(back)
 noFill()
 
 strokeWeight(1)
 if (keys==true) {griglia()}
 
 strokeCap(ROUND);
 strokeJoin(BEVEL);
 strokeWeight(10)
 
 Sx1 () //Prima cifra a Sinistra
 Sx2 () //Seconda cifra a Sinistra
 
 Dx1 () //Prima cifra a Destra
 Dx2 () //Seconda cifra a Destra
 
 Su1 () //Prima cifra Sopra
 Su2 () //Seconda cifra Sopra
 
 Gu1 () //Prima cifra Sotto
 Gu2 () //Seconda cifra Sotto
 
 Ball.display(); //Display la Palla
 Ball.move(); //Muovi la Palla
 Ball.updateScale(); //Scala la Palla a seconda della profondità
 
 fill(colorAlpha(colDef, A)); // Colora il testo con colDef e usa A come valore alfa. [Abilitato con la funzione colorAlpha, vedi sotto]
 text("Horizontal Digits are the Time, Vertical ones are the Date.",0,500*0.52); text("Press any key to toggle the grid, Inspired by TokyoFlash.",0,500*0.55)
 if (A>0.01 && frameCount > 400) {A = A-0.01} //"Dissolvi" il testo con fade.
 
}

function Sx1 () {
 if (hour()>19) {Sx1_2 ()}
 else if (hour()>10) {Sx1_1 ()}
 else {Sx1_0 ()}
}

function Sx2 () {
  if (hour()==0) {Sx2_0 ()}
  if (hour()==1) {Sx2_1 ()}
  if (hour()==2) {Sx2_2 ()}
  if (hour()==3) {Sx2_3 ()}
  if (hour()==4) {Sx2_4 ()}
  if (hour()==5) {Sx2_5 ()}
  if (hour()==6) {Sx2_6 ()}
  if (hour()==7) {Sx2_7 ()}
  if (hour()==8) {Sx2_8 ()}
  if (hour()==9) {Sx2_9 ()}
  if (hour()==10) {Sx2_0 ()}
  if (hour()==11) {Sx2_1 ()}
  if (hour()==12) {Sx2_2 ()}
  if (hour()==13) {Sx2_3 ()}
  if (hour()==14) {Sx2_4 ()}
  if (hour()==15) {Sx2_5 ()}
  if (hour()==16) {Sx2_6 ()}
  if (hour()==17) {Sx2_7 ()}
  if (hour()==18) {Sx2_8 ()}
  if (hour()==19) {Sx2_9 ()}
  if (hour()==20) {Sx2_0 ()}
  if (hour()==21) {Sx2_1 ()}
  if (hour()==22) {Sx2_2 ()}
  if (hour()==23) {Sx2_3 ()}
}

function Dx1 () {
 if (minute()>49) {Dx1_5 ()}
 else if (minute()>39) {Dx1_4 ()}
 else if (minute()>29) {Dx1_3 ()}
 else if (minute()>19) {Dx1_2 ()}
 else if (minute()>9) {Dx1_1 ()}
 else {Dx1_0 ()}
}

function Dx2 () {
 if (minute()==0) {Dx2_0 ()}
 if (minute()==1) {Dx2_1 ()}
 if (minute()==2) {Dx2_2 ()}
 if (minute()==3) {Dx2_3 ()}
 if (minute()==4) {Dx2_4 ()}
 if (minute()==5) {Dx2_5 ()}
 if (minute()==6) {Dx2_6 ()}
 if (minute()==7) {Dx2_7 ()}
 if (minute()==8) {Dx2_8 ()}
 if (minute()==9) {Dx2_9 ()}
 if (minute()==10) {Dx2_0 ()}
 if (minute()==11) {Dx2_1 ()}
 if (minute()==12) {Dx2_2 ()}
 if (minute()==13) {Dx2_3 ()}
 if (minute()==14) {Dx2_4 ()}
 if (minute()==15) {Dx2_5 ()}
 if (minute()==16) {Dx2_6 ()}
 if (minute()==17) {Dx2_7 ()}
 if (minute()==18) {Dx2_8 ()}
 if (minute()==19) {Dx2_9 ()}
 if (minute()==20) {Dx2_0 ()}
 if (minute()==21) {Dx2_1 ()}
 if (minute()==22) {Dx2_2 ()}
 if (minute()==23) {Dx2_3 ()}
 if (minute()==24) {Dx2_4 ()}
 if (minute()==25) {Dx2_5 ()}
 if (minute()==26) {Dx2_6 ()}
 if (minute()==27) {Dx2_7 ()}
 if (minute()==28) {Dx2_8 ()}
 if (minute()==29) {Dx2_9 ()}
 if (minute()==30) {Dx2_0 ()}
 if (minute()==31) {Dx2_1 ()}
 if (minute()==32) {Dx2_2 ()}
 if (minute()==33) {Dx2_3 ()}
 if (minute()==34) {Dx2_4 ()}
 if (minute()==35) {Dx2_5 ()}
 if (minute()==36) {Dx2_6 ()}
 if (minute()==37) {Dx2_7 ()}
 if (minute()==38) {Dx2_8 ()}
 if (minute()==39) {Dx2_9 ()}
 if (minute()==40) {Dx2_0 ()}
 if (minute()==41) {Dx2_1 ()}
 if (minute()==42) {Dx2_2 ()}
 if (minute()==43) {Dx2_3 ()}
 if (minute()==44) {Dx2_4 ()}
 if (minute()==45) {Dx2_5 ()}
 if (minute()==46) {Dx2_6 ()}
 if (minute()==47) {Dx2_7 ()}
 if (minute()==48) {Dx2_8 ()}
 if (minute()==49) {Dx2_9 ()}
 if (minute()==50) {Dx2_0 ()}
 if (minute()==51) {Dx2_1 ()}
 if (minute()==52) {Dx2_2 ()}
 if (minute()==53) {Dx2_3 ()}
 if (minute()==54) {Dx2_4 ()}
 if (minute()==55) {Dx2_5 ()}
 if (minute()==56) {Dx2_6 ()}
 if (minute()==57) {Dx2_7 ()}
 if (minute()==58) {Dx2_8 ()}
 if (minute()==59) {Dx2_9 ()}
}

function Su1 () {
 if (month()==1) {Su1_1 ()}
 if (month()==2) {Su1_2 ()}
 if (month()==3) {Su1_3 ()}
 if (month()==4) {Su1_4 ()}
 if (month()==5) {Su1_5 ()}
 if (month()==6) {Su1_6 ()}
 if (month()==7) {Su1_7 ()}
 if (month()==8) {Su1_8 ()}
 if (month()==9) {Su1_9 ()}
 if (month()==10) {Su1_0 ()}
 if (month()==11) {Su1_1 ()}
 if (month()==12) {Su1_2 ()}
}

function Su2 () {
 if (month()>9) {Su2_1 ()}
 else {Su2_0 ()}
}

function Gu1 () {
 if (day()>29) {Gu1_3 ()}
 else if (day()>19) {Gu1_2 ()}
 else if (day()>9) {Gu1_1 ()}
 else {Sx1_0 ()}
}

function Gu2 () {
 if (day()==1) {Gu2_1 ()}
 if (day()==2) {Gu2_2 ()}
 if (day()==3) {Gu2_3 ()} 
 if (day()==4) {Gu2_4 ()}
 if (day()==5) {Gu2_5 ()}
 if (day()==6) {Gu2_6 ()}
 if (day()==7) {Gu2_7 ()}
 if (day()==8) {Gu2_8 ()}
 if (day()==9) {Gu2_9 ()}
 if (day()==10) {Gu2_0 ()}
 if (day()==11) {Gu2_1 ()}
 if (day()==12) {Gu2_2 ()}
 if (day()==13) {Gu2_3 ()} 
 if (day()==14) {Gu2_4 ()}
 if (day()==15) {Gu2_5 ()}
 if (day()==16) {Gu2_6 ()}
 if (day()==17) {Gu2_7 ()}
 if (day()==18) {Gu2_8 ()}
 if (day()==19) {Gu2_9 ()}
 if (day()==20) {Gu2_0 ()}
 if (day()==21) {Gu2_1 ()}
 if (day()==22) {Gu2_2 ()}
 if (day()==23) {Gu2_3 ()} 
 if (day()==24) {Gu2_4 ()}
 if (day()==25) {Gu2_5 ()}
 if (day()==26) {Gu2_6 ()}
 if (day()==27) {Gu2_7 ()}
 if (day()==28) {Gu2_8 ()}
 if (day()==29) {Gu2_9 ()}
 if (day()==30) {Gu2_0 ()}
 if (day()==31) {Gu2_1 ()}
}



function griglia() {
stroke(colDef)
 rect(-250,-250,500,500)
 line(-250,-250,-80,-80)
 line(-250,250,-80,80)
 line(250,250,80,80)
 line(250,-250,80,-80)
beginShape();
  vertex(-80, -80);
  vertex(80, -80);
  vertex(80, 80);
  vertex(-80, 80);
endShape(CLOSE);

}
//NOTA SULLA NUMERAZIONE: la numerazione è composta dalla sigla della parte (es. Sx,Dx,Su o Gu) più il numero di cifra della parete (1 o 2) dato a scedonda che esso venga prima o dopo. poi seguito da trattino basso e infine il numero che la funzione disegna (da 0 a 9).


/*function Sx1_base () {
 stroke(colDef)
 
 beginShape();
  vertex(-230, 0);
  vertex(-230, -210);
  vertex(-160, -140);
  vertex(-160, 0);
  vertex(-230, 0);
  vertex(-230, 210);
  vertex(-160, 140);
  vertex(-160, 0);
endShape();

}*/

function Sx1_0 () {
 stroke(colDef)
 
 beginShape();
  vertex(-230, 210);
  vertex(-230, -210);
  vertex(-160, -140);
  vertex(-160, 140);
endShape(CLOSE);

}

function Sx1_1 () {
 stroke(colDef)
 
 beginShape();
  vertex(-160, -140);
  vertex(-160, 140);
endShape();

}

function Sx1_2 () {
 stroke(colDef)
 
 beginShape();
  vertex(-230, -210);
  vertex(-160, -140);
  vertex(-160, 0);
  vertex(-230, 0);
  vertex(-230, 210);
  vertex(-160, 140);
endShape();

}


function Sx2_0 () {
 stroke(colDef)
 
 beginShape();
  vertex(-135, 115);
  vertex(-135, -115);
  vertex(-90, -70);
  vertex(-90, 70);
endShape(CLOSE);

}

function Sx2_1 () {
 stroke(colDef)
 
 beginShape();
  vertex(-90, -70);
  vertex(-90, 70);
endShape();

}

function Sx2_2 () {
 stroke(colDef)
 
 beginShape();
  vertex(-135, -115);
  vertex(-90, -70);
  vertex(-90, 0);
  vertex(-135, 0);
  vertex(-135, 115);
  vertex(-90, 70);
endShape();

}

function Sx2_3 () {
 stroke(colDef)
 
 beginShape(LINES);
  vertex(-135, -115);
  vertex(-90, -70);
  vertex(-90, -70);
  vertex(-90, 70);
  vertex(-90, 70);
  vertex(-135, 115);
 endShape();

 beginShape();
  vertex(-135, 0);
  vertex(-90, 0);
 endShape(CLOSE);
}

function Sx2_4 () {
 stroke(colDef)
 
 beginShape();
  vertex(-135, -115);
  vertex(-135, 0);
  vertex(-96, 0);
 endShape();
  
 beginShape(); 
  vertex(-90, 70);
  vertex(-90, -70);
 endShape();

}

function Sx2_5 () {
 stroke(colDef)
 
 beginShape();
  vertex(-90, -70);
  vertex(-135, -115);
  vertex(-135, 0);
  vertex(-90, 0);
  vertex(-90, 70);
  vertex(-135, 115);
endShape();

}

function Sx2_6 () {
 stroke(colDef)
 
 beginShape();
  vertex(-90, -70)
  vertex(-135, -115);
  vertex(-135, 0);
  vertex(-90, 0);
  vertex(-90, 70);
  vertex(-135, 115);
  vertex(-135, 0);
endShape();

}

function Sx2_7 () {
 stroke(colDef)
 
 beginShape();
  vertex(-135, -115);
  vertex(-90, -70)
  vertex(-90, 70);
endShape();

}

function Sx2_8 () {
 stroke(colDef)
 
 line(-135,0,-96,0)
 beginShape();
  vertex(-90, -70)
  vertex(-135, -115);
  vertex(-135, 115);
  vertex(-90, 70);
endShape(CLOSE);

}

function Sx2_9 () {
 stroke(colDef)
 
 beginShape();
  vertex(-135, -115);
  vertex(-90, -70)
  vertex(-90, 0)
  vertex(-135, 0)
 endShape(CLOSE);
 beginShape();
  vertex(-90, 0)
  vertex(-90, 70)
  vertex(-135, 115)
 endShape();
}



function Dx1_0 () {
 push()
 stroke(colDef)
 
 scale(-1)
 
 beginShape();
  vertex(-135, 115);
  vertex(-135, -115);
  vertex(-90, -70);
  vertex(-90, 70);
endShape(CLOSE);
pop()
}

function Dx1_1 () {
push()
 stroke(colDef)
 
 scale(-1)
 
 beginShape();
  vertex(-135, -115);
  vertex(-135, 115);
endShape();
pop()
}

function Dx1_2 () {
 push()
 stroke(colDef)
 
 scale(-1)
 
 beginShape();
  vertex(-135, -115);
  vertex(-90, -70);
  vertex(-90, 0);
  vertex(-135, 0);
  vertex(-135, 115);
  vertex(-90, 70);
endShape();
pop()
}

function Dx1_3 () {
 push()
 stroke(colDef)
 
 scale(-1)
 
 beginShape(LINES);
  vertex(-135, -115);
  vertex(-90, -70);
  
  vertex(-135, -115);
  vertex(-135, 115);
  
  vertex(-90, 70);
  vertex(-135, 115);
 endShape();

 beginShape();
  vertex(-135, 0);
  vertex(-90, 0);
 endShape();
 pop()
}

function Dx1_4 () {
 push()
 stroke(colDef)
 
 scale(-1,1)
 
 beginShape();
  vertex(-90, -70);
  vertex(-90, 0);
  vertex(-135, 0);
 endShape();
  
 beginShape(); 
  vertex(-135, -115);
  vertex(-135, 115);
 endShape();
 pop()
}

function Dx1_5 () {
 push()
 stroke(colDef)
 
 scale(-1)
 
 beginShape();
  vertex(-90, -70);
  vertex(-135, -115);
  vertex(-135, 0);
  vertex(-90, 0);
  vertex(-90, 70);
  vertex(-135, 115);
endShape();
 pop()
}

function Dx2_0 () {
 push()
 stroke(colDef)
 
 beginShape();
  vertex(230, 210);
  vertex(230, -210);
  vertex(160, -140);
  vertex(160, 140);
 endShape(CLOSE);
 pop()
}

function Dx2_1 () {
 push()
 stroke(colDef)
 
 beginShape();
  vertex(230, -210);
  vertex(230, 210);
 endShape();
 pop()
}

function Dx2_2 () {
 push()
 stroke(colDef)
 
 beginShape();
 vertex(160, -140);
  vertex(230, -210);
  vertex(230, 0);
  vertex(160, 0);
  vertex(160, 140);
  vertex(230, 210);
endShape();
 pop()
}

function Dx2_3 () {
 push()
 stroke(colDef)
 
  beginShape();
  vertex(160, -140);
  vertex(230, -210);
  vertex(230, 210);
  vertex(160, 140);
endShape();

line(230,0,160,0)
 pop()
}

function Dx2_4 () {
 push()
 stroke(colDef)
 
  beginShape();
  vertex(160, -140);
  vertex(160, 0);
  vertex(230, 0);
endShape();

line(230,-210,230,210)
 pop()
}

function Dx2_5 () {
 push()
 stroke(colDef)
 beginShape();
 vertex(230, -210);
 vertex(160, -140);
 vertex(160, 0);
 vertex(230, 0);
 vertex(230, 210);
 vertex(160, 140);
 endShape();
 pop()
}

function Dx2_6 () {
 push()
 stroke(colDef)
 
 beginShape();
  vertex(230, -210);
  vertex(160, -140);
  vertex(160, 140);
  vertex(230, 210);
  vertex(230, 0);
  vertex(160, 0);
 endShape();
 pop()
}

function Dx2_7 () {
 push()
 stroke(colDef)
 
 beginShape();
  vertex(160, -140);
  vertex(230, -210);
  vertex(230, 210);
 endShape();
 pop()
}

function Dx2_8 () {
 push()
 stroke(colDef)
 
 scale(-1)
 
 beginShape();
  vertex(-230, 0);
  vertex(-230, -210);
  vertex(-160, -140);
  vertex(-160, 0);
  vertex(-230, 0);
  vertex(-230, 210);
  vertex(-160, 140);
  vertex(-160, 0);
 endShape();
 pop()
}

function Dx2_9 () {
 push()
 stroke(colDef)
 beginShape();
  vertex(230, 0);
  vertex(160, 0);
  vertex(160,-140);
  vertex(230, -210);
  vertex(230, 210);
  vertex(160, 140);
 endShape();
 pop()
}

function Su1_0 () {
 push()
 stroke(colDef)

 beginShape();
  vertex(-70, -90);
  vertex(-115, -135);
  vertex(115,-135);
  vertex(70, -90);
  vertex(-70, -90);
 endShape(CLOSE);
 pop()
}

function Su1_1 () {
 push()
 stroke(colDef)
 beginShape();
  vertex(70, -90);
  vertex(115, -135);
 endShape();
 pop()
}

function Su1_2 () {
 push()
 stroke(colDef)
 beginShape();
  vertex(-115, -135);
  vertex(115, -135);
  vertex(90, -110);
  vertex(-90, -110);
  vertex(-70, -90);
  vertex(-70, -90);
  vertex(70, -90);
 endShape();
 pop()
}

function Su1_3 () {
 push()
 stroke(colDef)
 beginShape();
  vertex(-115, -135);
  vertex(115, -135);
  vertex(70, -90);
  vertex(-70, -90);
 endShape();
 line(90,-110,-90,-110)
 pop()
}

function Su1_4 () {
 push()
 stroke(colDef)
 beginShape();
  vertex(-115, -135);
  vertex(-90, -110);
  vertex(90, -110);
 endShape();
 line(115,-130,70,-90)
 pop()
}

function Su1_5 () {
 push()
 stroke(colDef)
 beginShape();
 vertex(115, -135);
  vertex(-115, -135);
  vertex(-90, -110);
  vertex(90, -110);
  vertex(70, -90);
  vertex(-70, -90);
 endShape();
 pop()
}

function Su1_6 () {
 push()
 stroke(colDef)
 beginShape();
 vertex(115, -135);
 vertex(-115, -135);
 vertex(-70, -90);
 vertex(70, -90);
 vertex(90, -110);
 vertex(-90, -110);
 endShape();
 pop()
}

function Su1_7 () {
 push()
 stroke(colDef)
 beginShape();
 vertex(-115, -135);
 vertex(115, -135);
 vertex(70, -90);
 endShape();
 pop()
}

function Su1_8 () {
 push()
 stroke(colDef)
 beginShape();
 vertex(-115, -135);
 vertex(115, -135);
 vertex(70, -90);
 vertex(-70, -90);
 endShape(CLOSE);
 line(-90,-110,90,-110)
 pop()
}

function Su1_9 () {
 push()
 stroke(colDef)
 beginShape();
 vertex(90, -110);
 vertex(-90, -110);
 vertex(-115, -135);
 vertex(115, -135);
 vertex(70, -90);
 vertex(-70, -90);
 endShape();
 pop()
}

function Su2_0 () {
 push()
 stroke(colDef)
 beginShape();
 vertex(-210, -230);
 vertex(210,-230);
 vertex(145, -160);
 vertex(-145, -160);
 endShape(CLOSE);
 pop()
}

function Su2_1 () {
 push()
 stroke(colDef)
 line(210,-230,145,-160)
 pop()
}

function Su2_2 () {
 push()
 stroke(colDef)
 beginShape();
 vertex(-210,-230);
  vertex(210, -230);
  vertex(170, -190);
  vertex(-170, -190);
  vertex(-145, -160);
  vertex(145, -160);
 endShape();
 pop()
}

function Su2_3 () {
 push()
 stroke(colDef)
 beginShape();
 vertex(-210,-230);
 vertex(210, -230);
 vertex(145, -160);
 vertex(-145, -160);
 endShape();
 line(-170,-190,170,-190)
 pop()
}

function Gu1_0 () {
 push()
 stroke(colDef)
 
 scale(-1)
 
 beginShape();
  vertex(-70, -90);
  vertex(-115, -135);
  vertex(115,-135);
  vertex(70, -90);
  vertex(-70, -90);
 endShape(CLOSE);
 pop()
}

function Gu1_1 () {
 push()
 stroke(colDef)
 
 scale(1,-1)
  beginShape();
  vertex(70, -90);
  vertex(115, -135);
 endShape();

 pop()
}

function Gu1_2 () {
 push()
 stroke(colDef)
 
 scale(-1)
 
 beginShape();
  vertex(-115, -135);
  vertex(115, -135);
  vertex(90, -110);
  vertex(-90, -110);
  vertex(-70, -90);
  vertex(-70, -90);
  vertex(70, -90);
 endShape();
 pop()
}

function Gu1_3 () {
 push()
 stroke(colDef)
 
 scale(1,-1)
 
 beginShape();
  vertex(-115, -135);
  vertex(115, -135);
  vertex(70, -90);
  vertex(-70, -90);
 endShape();
 line(90,-110,-90,-110)
 pop()
}

function Gu2_0 () {
 push()
 stroke(colDef)
 scale(-1)
 
 beginShape();
 vertex(-210, -230);
 vertex(210,-230);
 vertex(145, -160);
 vertex(-145, -160);
 endShape(CLOSE);
 pop()
}

function Gu2_1 () {
 push()
 stroke(colDef)
 scale(1,-1)
 line(210,-230,145,-160)
 pop()
}

function Gu2_2 () {
 push()
 stroke(colDef)
 scale(-1)
 beginShape();
 vertex(-210,-230);
  vertex(210, -230);
  vertex(170, -190);
  vertex(-170, -190);
  vertex(-145, -160);
  vertex(145, -160);
 endShape();
 pop()
}

function Gu2_3 () {
 push()
 stroke(colDef)
 scale(1,-1)
 beginShape();
 vertex(-210,-230);
 vertex(210, -230);
 vertex(145, -160);
 vertex(-145, -160);
 endShape();
 line(-170,-190,170,-190)
 pop()
}

function Gu2_4 () {
 push()
 stroke(colDef)
 beginShape();
  vertex(-145, 160);
  vertex(-170, 190);
  vertex(170, 190);
 endShape();
 line(140,160,210,230)
 pop()
}

function Gu2_5 () {
 push()
 stroke(colDef)
 scale(1,-1)
 beginShape();
 vertex(-210,-230);
  vertex(210, -230);
  vertex(170, -190);
  vertex(-170, -190);
  vertex(-145, -160);
  vertex(145, -160);
 endShape();
 pop()
}

function Gu2_6 () {
 push()
 stroke(colDef)
 beginShape();
  vertex(145,160);
  vertex(-145,160);
  vertex(-210,230);
  vertex(210,230);
  vertex(170,190);
  vertex(-170,190);
 endShape();
 pop()
}

function Gu2_7 () {
 push()
 stroke(colDef)
 beginShape();
  vertex(-145,160);
  vertex(145,160);
  vertex(210,230);
 endShape();
 pop()
}

function Gu2_8 () {
 push()
 stroke(colDef)
 beginShape();
  vertex(145,160);
  vertex(-145,160);
  vertex(-210,230);
  vertex(210,230);
 endShape(CLOSE);
 line(-170,190,170,190)
 pop()
}

function Gu2_9 () {
 push()
 stroke(colDef)
 beginShape();
  vertex(170,190);
  vertex(-170,190);
  vertex(-145,160);
  vertex(145,160);
  vertex(210,230);
  vertex(-210,230);
 endShape();
 pop()
}

function Palla(xINI,yINI,SINI,colINI) {
 
 this.x=xINI; //cordinata x
 this.y=yINI; //cordinata y
 this.z=0; //cordinata z
 this.S=SINI; //Gransezza 
 this.col=colINI; //Colore
 this.speed = 2; //velocità
 
//Direzioni
 this.DX=true;
 this.DY=false;
 this.DZ=false;
 
 this.display = function() {
  noStroke();
  fill(this.col);
  ellipse(this.x,this.y,this.S);
  noFill()
 }
 
 this.move = function() {
 //definizione della direzione e del movimento:
  if (this.DX==true) {this.x += this.speed;} else {this.x -= this.speed;}
  if (this.DY==true) {this.y += this.speed;} else {this.y -= this.speed;}
  if (this.DZ==true) {this.z -= this.speed/sqrt(2);} else {this.z += this.speed/sqrt(2);}

//Rimbalzo sulle pareti:
//Parete di Dx:
  if (this.x > (250-this.z)-(this.S/2)) {this.DX=false;this.DY=false}

//Parete di Sx:
  if (this.x < (-250+this.z)+(this.S/2)) {this.DX=true;this.DY=true}
  
//Pavimento:
  if (this.y > (250-this.z)-(this.S/2)) {this.DX=true;this.DY=false}
  
//Soffitto:
  if (this.y < (-250+this.z)+(this.S/2)) {this.DX=false;this.DY=true}

//Parete di Sfondo:
  if (this.z > 170) {this.DZ=true}
  
//Parete in Primo Piano:
  if (this.z < 0) {this.DZ=false}
  //console.log(this.z)
 }
 
//Scala la palla a seconda della sua posizione in z.
 this.updateScale = function() {
  this.S = 100-((this.z/175)*65) //primo dato e la grandezza massima a z=0 (quindi + vicino), il secondo e di quanti pixel si rimpiciolisce prima di toccare il fondo.
 }

 
}

function colorAlpha(aColor, alpha) { //Funzione per unire sia una valore hex (o altro) con un valore alfa, codice by Squarewave Multimedia. 
  var c = color(aColor);
  return color('rgba(' +  [red(c), green(c), blue(c), alpha].join(',') + ')');
}

function keyReleased() { //Attiva Griglia con i Tasti
 keys=!keys;
}

function windowResized() { //redi la finestra Responsive
  resizeCanvas(windowWidth, windowHeight);
  
 if (windowWidth > windowHeight) {W = windowHeight/500} else {W = windowWidth/500}
}
