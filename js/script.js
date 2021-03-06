/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'I find your lack of faith disturbing.',
    source: 'Darth Vader',
    citation: 'Star Wars: Episode IV - A New Hope',
    scene: 'Darth Vader and Admiral Motti, Imperial Fleet',
    year: 1977,
    background: 'darth-vader.jpg',
    id: 1
  },
  {
    quote: 'Do. Or do not. There is no try.',
    source: 'Yoda',
    citation: 'Star Wars: Episode V - The Empire Strikes Back',
    scene: 'Yoda trains Luke, Dagobah.',
    year: 1980,
    background: 'yoda.jpg',
    id: 2
  },
  {
    quote: 'At last we will reveal ourselves to the Jedi. At last we will have revenge.',
    source: 'Darth Maul',
    citation: 'Star Wars: Episode I - The Phantom Menace',
    scene: 'Darth Sidious and Darth Maul, Coruscant.',
    year: 1999,
    background: 'darth-maul.jpg',
    id: 3
  },
  {
    quote: 'All we have to decide is what to do with the time that is given to us.',
    source: 'Gandalf',
    citation: 'The Lord of the Rings: The Fellowship of the Ring',
    scene: 'Gandalf and Frodo, The Mines of Moria.',
    year: 2001,
    background: 'gandalf.jpg',
    id: 4
  },
  {
    quote: 'One ring to rule them all, one ring to find them, one ring to bring them all and in the darkness bind them.',
    source: 'Gandalf',
    citation: 'The Lord of the Rings: The Fellowship of the Ring',
    scene: `Gandalf and Frodo, the Shire.`,
    year: 2001,
    background: 'the-one-ring.jpg',
    id: 5
  },
  {
    quote: `He's no good to me dead!`,
    source: 'Boba Fett',
    citation: 'Star Wars: Episode V - The Empire Strikes Back',
    scene: `Boba Fett and Darth Vader, Bespin.`,
    year: 1980,
    background: 'boba-fett.jpg',
    id: 6
  },
  {
    quote: `Your focus determines your reality.`,
    source: 'Qui Gon Jinn',
    citation: 'Star Wars: Episode I - The Phantom Menace',
    scene: `Qui Gon Jin and Darth Maul, Naboo.`,
    year: 1999,
    background: 'qui-gon.jpg',
    id: 7
  },
  {
    quote: `If you build it, he will come.`,
    source: 'Whispers',
    citation: 'Field of Dreams',
    scene: `Ray, Cornfield.`,
    year: 1989,
    background: 'field-of-dreams.jpg',
    id: 8
  },
  {
    quote: `With great power, comes great responsibility.`,
    source: 'Uncle Ben',
    citation: 'Spider-Man',
    scene: `Uncle Ben and Peter Parker, Uncle Ben's Car.`,
    year: 2002,
    background: 'spiderman.jpg',
    id: 9
  },
  {
    quote: `What if you had to tell someone the most important thing in the world, but you knew they'd never believe you? I'd try.`,
    source: 'Doug Carlin',
    citation: 'Deja Vu',
    scene: `Claire's house.`,
    year: 2006,
    background: 'deja-vu.jpg',
    id: 10
  },
  {
    quote: `The dark side is a path way to many abilities some consider to be unnatural.`,
    source: 'Chancellor Palpatine',
    citation: 'Star Wars: Episode III - Revenge of the Sith',
    scene: `Chancellor Palpatine and Anakin, Galaxies Opera House`,
    year: 2005,
    background: 'palpatine.jpg',
    id: 11
  }
];

let repeat = true;
let repeater = setInterval(() => { printQuote(); }, 5000);

/***
 * `setQuoteBackgrounds` function
***/
const setQuoteBackgrounds = quotes => {
  const backgroundDiv = document.querySelector('.quote-backgrounds');
  quotes.forEach(quote => backgroundDiv.innerHTML += `<div class="background-${quote.id}" style="background: #000000 url('images/${quote.background}') no-repeat center / cover"></div>`)
};

/***
 * `getRandomQuote` function
***/
const getRandomQuote = arr => arr[Math.floor(Math.random() * arr.length)];

/***
 * `display quote` function
***/
const printQuote = e => {
  if (e !== undefined && e.target.id === 'load-quote') {
    repeat = false;
    handleRepeat();
  }
  const randomQuote = getRandomQuote(quotes);
  let html = `<p class="quote">${randomQuote.quote}</p>
                <p class="source">${randomQuote.source}`;
  if (randomQuote.citation) html += `<span class="citation">${randomQuote.citation}</span>`;
  if (randomQuote.year) html += `<span class="year">${randomQuote.year}</span>`;
  html += `</p>`;
  if (randomQuote.scene) html += `<p class="scene">${randomQuote.scene}</p>`;
  document.getElementById('quote-box').innerHTML = html;
  changeQuoteBackground(randomQuote);
};


/***
 * `changeQuoteBackground` function
***/
const changeQuoteBackground = quote => {
  const backgrounds = document.querySelectorAll('.quote-backgrounds > div');
  backgrounds.forEach(background => {
    background.classList.contains(`background-${quote.id}`)
      ? background.classList.remove('transparent')
      : background.classList.add('transparent');
  });
};

/***
 * `timing` function
***/
const handleRepeat = () => {
  if (repeat && repeater === null) {
    repeater = setInterval(() => { printQuote(); }, 5000);
  } else {
    clearInterval(repeater);
    repeater = null;
  }
  window.setTimeout(() => {
    repeat = true;
    handleRepeat();
  }, 10000);
}

/***
 * Display random quote on page load
***/
setQuoteBackgrounds(quotes);
printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false); 