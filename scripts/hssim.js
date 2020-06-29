//-----------\\
// Variables \\
//-----------\\
var i = 0;
var per = document.getElementById('person');
var pic = document.getElementById('sprite');
var des = document.getElementById('description');
var o1 = document.getElementById('option1');
o1.onclick = function() {
  if(i!=20){
    time += cards[i].o1t;
    gpa += cards[i].o1g;
    pop += cards[i].o1p;
    inj += cards[i].o1i;
    if(inj >= 10 && i<19) {
      cards.splice(i+1, 1, injury);
    }
    i++;
    changeHTML(cards[i]);
  }
  else{
    newGame();
  }
};
var o2 = document.getElementById('option2');
o2.onclick = function() {
  if(i!=20){
    time += cards[i].o2t;
    gpa += cards[i].o2g;
    pop += cards[i].o2p;
    inj += cards[i].o2i;
    i++;
    changeHTML(cards[i]);
  }
  else {
    document.location.href = "index.html"   // Change to relative address for web release
  }
};
var t = document.getElementById('time');
var time = 1200;
var gpa = 3.0;
var pop = 1;
var inj = 0;

// HELPER METHODS

// Just places a 0 in front of second values lower than 10
function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

// Places bounds on player stats and formats output
function statsOutput(){
  let disT=810;
  let disG;
  let disP=0;
  if(time>810) {
    disT = time;
  }
  if(gpa>4) {
    disG=4;
  }
  else if(gpa<0) {
    disG=0;
  }
  else {
    disG=gpa;
  }
  if(pop>0){
    disP=pop;
  }
  return Math.floor(disT/60) + ":" + pad(disT%60) + " | " + disG.toFixed(2) + " | " + disP;
}

// Shuffles the cards according to the Fisher-Yates algorithm
function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

// Loads another card into the HTML
function changeHTML(o) {
  let check = o.description
  let temp = "assets/" + o.person + ".png";   // Remember to use relative address on file hosting website
  temp = temp.replace(/\s+/g, '');
  temp=temp.toLowerCase();
  per.innerHTML = o.person;
  pic.src = temp;
  if(i!=20) {
    des.innerHTML = o.description;
  }
  else {
    des.innerHTML = futureWriter();
  }
  o1.innerHTML = o.option1;
  o2.innerHTML = o.option2;
  t.innerHTML = statsOutput();
}

function futureWriter() {
  let sentence = "";
  if (time<=810) {
    sentence = "Congrats! You broke the national record.";
  }
  else if (time<=840&&Math.floor(gpa)==1) {
    sentence = "You go pro for Tinman but can't read.";
  }
  else if (time<=885&&Math.floor(gpa)==1) {
    sentence = "You win NXN, and have a successful freshmen year of college running before dropping out.";
  }
  else if (time<=915&&Math.floor(gpa)==1) {
    sentence = "You win Foot Locker but no D1 coaches can convince their college to accept you.";
  }
  else if (time<=960&&Math.floor(gpa)==1) {
    sentence = "You win state and enroll at full sail online university.";
  }
  else if (time<=1020&&Math.floor(gpa)==1) {
    sentence = "You win conference, and take a gap year.";
  }
  else if (time>1020&&Math.floor(gpa)==1) {
    sentence = "You are banished to lurking Letsrun.";
  }
  else if (time<=840&&Math.floor(gpa)==2) {
    sentence = "You go pro for OTC and are relatively successful after retiring.";
  }
  else if (time<=885&&Math.floor(gpa)==2) {
    sentence = "You win NXN, and do very well at NAU.";
  }
  else if (time<=915&&Math.floor(gpa)==2) {
    sentence = "You win Foot Locker go to Ole Miss where you are fairly successful.";
  }
  else if (time<=960&&Math.floor(gpa)==2) {
    sentence = "You win state and go D2.";
  }
  else if (time<=1020&&Math.floor(gpa)==2) {
    sentence = "You win conference, quit running and go to an average college.";
  }
  else if (time>1020&&Math.floor(gpa)==2) {
    sentence = "You are banished to lurking Letsrun from your college dorm.";
  }
  else if (time<=840&&Math.floor(gpa)>2) {
    sentence = "You go pro for BTC and are very successful after retiring.";
  }
  else if (time<=885&&Math.floor(gpa)>2) {
    sentence = "You win NXN, and do very well at Stanford.";
  }
  else if (time<=915&&Math.floor(gpa)>2) {
    sentence = "You win Foot Locker go to Harvard where you are fairly successful.";
  }
  else if (time<=960&&Math.floor(gpa)>2) {
    sentence = "You win state and go to a very academically strong D3.";
  }
  else if (time<=1050&&Math.floor(gpa)>2) {
    sentence = "You win conference, and go a a top college where you have your running dreams crushed.";
  }
  else if (time>1050&&Math.floor(gpa)>2) {
    sentence = "You are banished to lurking Letsrun from your $74,000/year college dorm.";
  }
  else if (gpa<1) {
    sentence = "Looks like you'll be repeating senior year."
  }
  else {
    sentence = "Congrats you broke my function";
  }
  if(pop < 2) {
    sentence += " Your friends hate you.";
  }
  else if (pop < 5) {
    sentence += " Your friends think you're weird."
  }
  else if (pop < 7) {
    sentence += " You have friends. Congrats."
  }
  else if (pop < 9) {
    sentence += " You have friends... and they actually accept you."
  }
  else {
    sentence += " You are quite popular congrats no one cares."
  }
  return sentence;
}


// MAIN METHOD
function newGame() {
  i=0;
  pop=1;
  gpa=3;
  time=1200;
  inj=0;
  cards = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35];  //Puts cards into an array
  cards = shuffle(cards);     //Shuffles the cards
  cards.splice(24, 0, end);   //Puts the end card in the 20th index
  changeHTML(cards[0]);       //Starts the game
}

newGame();
