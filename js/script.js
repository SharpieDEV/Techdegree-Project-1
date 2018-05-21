// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

let quotes = [
  {
    quote: "Psychedelics are illegal not because a loving government is concerned that you may jump out of a third story window. Psychedelics are illegal because they dissolve opinion structures and culturally laid down models of behaviour and information processing. They open you up to the possibility that everything you know is wrong.",
    source: "Terence Mckenna"
  },
  {
    quote: "LSD is a psychedelic drug which occasionally causes psychotic behavior in people who have NOT taken it.",
    source: "Timothy Leary"
  },
  {
    quote: "Life lived in the absence of the psychedelic experience that primordial shamanism is based on is life trivialized, life denied, life enslaved to the ego.",
    source: "Terence Mckenna"
  },
  {
    quote:"It's a very salutary thing to realize that the rather dull universe in which most of us spend most of our time is not the only universe there is. I think it's healthy that people should have this experience.",
    source: "Aldous Huxley",
    citation: "Moska"
  }
];
function getRandomQuote(){
  let random = Math.floor((Math.random()*quotes.length));
  return quotes[random];
}
console.log(getRandomQuote());

function printQuote(){
  let randomQuote = getRandomQuote();
  let string = "<p class='quote'>"+ randomQuote.quote +"</p>";
  string +=  "<p class='source'>"+ randomQuote.source +"</p>";
  //return string;
  //let quoteDiv = document.getElementById('qoute-box')
  //quoteDiv.innnerHTML = string;
document.getElementById('quote-box').innerHTML = string;
}
