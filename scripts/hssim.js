var i = 0;
var per = document.getElementById('person');
var pic = document.getElementById('sprite');
var des = document.getElementById('description');
var o1 = document.getElementById('option1');
o1.onclick = function() {
  time += cards[i].o1t;
  gpa += cards[i].o1g;
  pop += cards[i].o1p;
  i++;
  changeHTML(cards[i]);
};
var o2 = document.getElementById('option2');
o2.onclick = function() {
  time += cards[i].o2t;
  gpa += cards[i].o2g;
  pop += cards[i].o2p;
  i++;
  changeHTML(cards[i]);
};
var t = document.getElementById('time');
var time = 1200;
var gpa = 3.0;
var pop = 1;
var c1 = {
  person : "Hot Shot Freshman",
  description : "Challenges you to 'race' the last 2 blocks to campus after a hard workout",
  option1 : "Destroy him and teach him some respect", o1t : 10, o1g : 0, o1p : 1,
  option2 : "Laugh it off and save the effort for the race", o2t : 0, o2g : 0, o2p : -1,
}
var c2 = {
  person : "You",
  description : "Realize you don't have your running shorts for that afternoons practice.",
  option1 : "Beg to get out of practice", o1t : 5, o1g : 0, o1p : 0,
  option2 : "Run intervals in jeans", o2t : -15, o2g : 0, o2p : 0,
}
var c3 = {
  person : "Teammate",
  description : "Who's your favorite coach?",
  option1 : "Former NCAA D1 still crushing PRs", o1t : 0, o1g : 0, o1p : 1,
  option2 : "Former NAIA who was 19th in conference", o2t : 0, o2g : 0, o2p : 0,
}

var c4 = {
  person : "You",
  description : "You're more proud of:",
  option1 : "Real life social status", o1t : 0, o1g : -.25, o1p : 1,
  option2 : "Your witty registered Letsrun handle", o2t : -5, o2g : 0, o2p : -1,
}

var c5 = {
  person : "You",
  description : "Summer before senior year training:",
  option1 : "TAKE NO PRISONERS 118 days straight", o1t : -60, o1g : 0, o1p : 0,
  option2 : "A measured, balance approach", o2t : -40, o2g : 0, o2p : 0,
}

var c6 = {
  person : "Teammate",
  description : "Oh no! The track's closed.",
  option1 : "Can't beat the 'crete!", o1t : -30, o1g : 0, o1p : 0,
  option2 : "Measure out reps on the field", o2t : -20, o2g : 0, o2p : 0,
}

var c7 = {
  person : "Normie Friend",
  description : "There is a big volleyball game that starts right after practice",
  option1 : "I've got a lot of homework to do", o1t : 0, o1g : .5, o1p : 0,
  option2 : "Sounds fun", o2t : 0, o2g : -.25, o2p : 2,
}
var c8 = {
  person : "Coach",
  description : "You've got a decent chance to win this meet if you sit on the leader and make a move over the last 800.",
  option1 : "Sit and Kick", o1t : 5, o1g : .25, o1p : 1,
  option2 : "Take it from the gun", o2t : -10, o2g : 0, o2p : 0,
}
var c9 = {
  person : "Coach",
  description : "We've got a new freshman joining the team today",
  option1 : "Hang back and show him the route", o1t : 0, o1g : 0, o1p : -1,
  option2 : "Establish dominance", o2t : -5, o2g : 0, o2p : 1,
}
var c10 = {
  person : "FloTrack",
  description : "Flotrack wants to film a workout Wednesday and your coach gives you two workout options.",
  option1 : "8x1k at threshold", o1t : -15, o1g : 0, o1p : 2,
  option2 : "60x400 at mile race pace", o2t : -45, o2g : 0, o2p : 3,
}
var c11 = {
  person : "Letsrun",
  description : "Is player DONE? He absolutely bombed his last race?",
  option1 : "Respond anonymously", o1t : 0, o1g : -.25, o1p : 0,
  option2 : "Shake it off", o2t : 0, o2g : .25, o2p : -1,
}
var c12 = {
  person : "Normie Friend",
  description : "Hey are you running the Turkey Trot this year?",
  option1 : "Gobble gobble MF!", o1t : 10, o1g : 0, o1p : 1,
  option2 : "Nope I've got a big race coming up", o2t : 0, o2g : .25, o2p : -1,
}
var c13 = {
  person : "Teacher",
  description : "Remember we have an AP review session this Sunday",
  option1 : "Church of the Sunday long Run", o1t : -5, o1g : -.5, o1p : 0,
  option2 : "I'll be there", o2t : 5, o2g : .5, o2p : 0,
}
var c14 = {
  person : "Mysterious Coach",
  description : "Mysterious coach Salberto Alazar offers to coach you",
  option1 : "Sounds sketchy", o1t : 0, o1g : 0, o1p : 0,
  option2 : "Sounds legit", o2t : -15, o2g : -.75, o2p : -1,
}
var c15 = {
  person : "Teammate",
  description : "The biggest social influencer in school just posted a picture of you wearing off brand running shoes from 7th grade",
  option1 : "Uninstall all social media", o1t : 0, o1g : .5, o1p : 0,
  option2 : "Threatening Instagram post", o2t : 0, o2g : -.25, o2p : -2,
}
cards = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15];
cards = shuffle(cards);
var end = {
  person : "",
  description : "Game Over",
  option1 : "",
  option2 : "",
}
cards.push(end);
function shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}
function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}
function changeHTML(o) {
  let check = o.description
  let temp = "assets/" + o.person + ".png";
  temp = temp.replace(/\s+/g, '');
  per.innerHTML = o.person;
  pic.src = temp;
  des.innerHTML = o.description;
  o1.innerHTML = o.option1;
  o2.innerHTML = o.option2;
  t.innerHTML = statsOutput();
  if(check.valueOf() == new String("Game Over").valueOf()) {
    gameOver();
  }
}
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
    disG=0
  }
  else {
    disG=gpa;
  }
  if(pop>0){
    disP=pop;
  }
  return Math.floor(disT/60) + ":" + pad(disT%60) + " | " + disG.toFixed(2) + " | " + disP;
}
function gameOver() {
  pic.src = "assets/gameover.png";
  per.innerHTML = "Graduated";
  des.innerHTML - "I'm lazy and haven't written this function yet.";
  o1.innerHTML = "Play Again";
  o1.onclick = function() {
    time = 1200;
    gpa = 3;
    pop = 1;
    i=0;
    changeHTML(cards[0]);
  };
  o2.innerHTML = "Quit";
}
changeHTML(cards[0]);
