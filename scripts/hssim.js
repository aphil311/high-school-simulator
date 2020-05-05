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
    i++;
    changeHTML(cards[i]);
  }
  else {
    document.location.href = "./index.html"
  }
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
  description : "Is " + name + " DONE? He absolutely bombed his last race?",
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
var c16 = {
  person : "Coach",
  description : "Wow, the sun is really blinding.  Where do I turn for the freeway?",
  option1 : "Over here", o1t : 0, o1g : -.25, o1p : -1,
  option2 : "Over there", o2t : 0, o2g : .25, o2p : 1,
}
var c17 = {
  person : "Normie Friend",
  description : "Hey! I just went for a run to train for soccer and now there's this little crown on my strava",
  option1 : "Be a good friend and explain what a CR is", o1t : 0, o1g : 0, o1p : 1,
  option2 : "Segment sniping session", o2t : -5, o2g : 0, o2p : 0,
}
var c18 = {
  person : "Parents",
  description : "We called the missing person hotline because you were gone so long running",
  option1 : "Cool", o1t : 0, o1g : -.25, o1p : 0,
  option2 : "Whatever", o2t : 0, o2g : 0, o2p : -1,
}
var c19 = {
  person : "FloTrack",
  description : "Posts a video of you throwing up in the middle of a race and makes it a meme",
  option1 : "Deny it was you", o1t : 0, o1g : -.25, o1p : -1,
  option2 : "Cry", o2t : 0, o2g : 0, o2p : 0,
}
var c20 = {
  person : "Letsrun",
  description : "A post gets number 6 on trending that claims you are doping",
  option1 : "Mail RoJo your urine", o1t : -10, o1g : 0, o1p : 1,
  option2 : "Make your dad write an angry post", o2t : 5, o2g : -.25, o2p : 0,
}
var c21 = {
  person : "Teammate",
  description : "Hey what route are we doing?",
  option1 : "Same one we always do", o1t : -5, o1g : 0, o1p : -1,
  option2 : "Let's mix it up", o2t : -10, o2g : 0, o2p : 0,
}
var c22 = {
  person : "Parents",
  description : "We think you're beginning to develop an unhealthy obsession with Eliud Kipchoge",
  option1 : "You're right... *begins taking apart altar*", o1t : 10, o1g : .5, o1p : 1,
  option2 : "\"Passion is a choice\" -Kipchoge", o2t : 0, o2g : -.5, o2p : -2,
}
var c23 = {
  person : "Mysterious Coach",
  description : "Hey man I got this gum that'll give you even more energy than RunGum",
  option1 : "Sir that is a bag of cocaine", o1t : 0, o1g : .25, o1p : 0,
  option2 : "I'll have a lifetime supply please", o2t : -35, o2g : -1, o2p : -2,
}
var c24 = {
  person : "Teacher",
  description : "You've got to stop stretching during class",
  option1 : "Fitness is a lifestyle", o1t : -5, o1g : 0, o1p : -1,
  option2 : "Fine.", o2t : 0, o2g : .5, o2p : 0,
}
var c25 = {
  person : "Normie Friend",
  description : "Dude, why are your shorts so short?",
  option1 : "Peak athletic performance", o1t : -15, o1g : 0, o1p : -1,
  option2 : "The ladies", o2t : 0, o2g : 0, o2p : -2,
}
var end = {   // Can be placed at any index to end the game
  person : "Game Over",
  description : "I'm lazy and haven't written the function to tell you what happens after you graduate based on your stats",
  option1 : "New Game", o1t : 0, o1g : 0, o1p : 0,
  option2 : "Quit", o2t : 0, o2g : 0, o2p : 0,
}


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

// Loads amother card into the HTML
function changeHTML(o) {
  let check = o.description
  let temp = "assets/" + o.person + ".png";
  temp = temp.replace(/\s+/g, '');
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
  else if (time<=1020&&Math.floor(gpa)>2) {
    sentence = "You win conference, and go a a top college where you have your running dreams crushed.";
  }
  else if (time>1020&&Math.floor(gpa)>2) {
    sentence = "You are banished to lurking Letsrun from your $74,000/year college dorm.";
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

function newGame() {
  i=0;
  pop=1;
  gpa=3;
  time=1200;
  cards = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25];  //Puts cards into an array
  cards = shuffle(cards);     //Shuffles the cards
  cards.splice(20, 0, end);   //Puts the end card in the 20th index
  changeHTML(cards[0]);       //Starts the game
}

newGame();
