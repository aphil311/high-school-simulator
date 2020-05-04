loadQuote = document.getElementById("quote");
function input() {
  name = document.getElementById("name").value;
  document.location.href = "highschoolsim.html";
}
quotes = ["College Running Simulator but worse",
  "Why would you do this to yourself?",
  "Putting freshmen in their place since sophomore year",
  "Knee hurty no good",
  "Don't look at the bugs",
  "https://www.flashframe.io/college-simulator/"
]
quote.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
