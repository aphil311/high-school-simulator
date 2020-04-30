var i = 0;
var per = document.getElementById('person');
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
/*
//var c8 = {
  person : "",
  description : "",
  option1 : "", o1t : , o1g : , o1p : ,
  option2 : "", o2t : , o2g : 0, o2p : ,
}
//var c9 = {
  person : "",
  description : "",
  option1 : "", o1t : , o1g : , o1p : ,
  option2 : "", o2t : , o2g : 0, o2p : ,
}
//var c10 = {
  person : "",
  description : "",
  option1 : "", o1t : , o1g : , o1p : ,
  option2 : "", o2t : , o2g : 0, o2p : ,
}
//var c11 = {
  person : "",
  description : "",
  option1 : "", o1t : , o1g : , o1p : ,
  option2 : "", o2t : , o2g : 0, o2p : ,
}
//var c12 = {
  person : "",
  description : "",
  option1 : "", o1t : , o1g : , o1p : ,
  option2 : "", o2t : , o2g : 0, o2p : ,
}
//var c13 = {
  person : "",
  description : "",
  option1 : "", o1t : , o1g : , o1p : ,
  option2 : "", o2t : , o2g : 0, o2p : ,
}
//var c14 = {
  person : "",
  description : "",
  option1 : "", o1t : , o1g : , o1p : ,
  option2 : "", o2t : , o2g : 0, o2p : ,
}
//var c15 = {
  person : "",
  description : "",
  option1 : "", o1t : , o1g : , o1p : ,
  option2 : "", o2t : , o2g : 0, o2p : ,
}
*/
cards = [c1, c2, c3, c4, c5, c6, c7];
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
  per.innerHTML = o.person;
  des.innerHTML = o.description;
  o1.innerHTML = o.option1;
  o2.innerHTML = o.option2;
  t.innerHTML = Math.floor(time/60) + ":" + pad(time%60) + " | " + gpa.toFixed(2) + " | " + pop;
  if(check.valueOf() == new String("Game Over").valueOf()) {
    o1.remove();
    o2.remove();
    per.innerHTML="Game Over";
  }
}

changeHTML(cards[0]);
