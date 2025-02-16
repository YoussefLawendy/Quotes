const quotes = [
    {
        quote: `“We accept the love we think we deserve.”`,
        writer: `― Stephen Chbosky`,
    },
    {
        quote: `“A friend is someone who knows all about you and still loves you.”`,
        writer: `― Elbert Hubbard`,
    },
    {
        quote: `“Be yourself; everyone else is already taken.”`,
        writer: `― Oscar Wilde`,
    },
    {
        quote: `“You only live once, but if you do it right, once is enough.”`,
        writer: `― Mae West`,
    },
    {
        quote: `“If you tell the truth, you don't have to remember anything.”`,
        writer: `― Mark Twain`,
    },
    {
        quote: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
        writer: `― Oscar Wilde`,
    },
];

let PrevQuotes = [];
let btn = document.querySelector("#QuoteBtn");
let quote = document.querySelector(".Quote");
let writer = document.querySelector(".writer");

function GetQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    if (PrevQuotes.includes(quotes[random].quote)) {
        if (PrevQuotes.length == quotes.length) {
            PrevQuotes.splice(0)
        }
        GetQuote();
    } else {
        quote.innerHTML = quotes[random].quote;
        writer.innerHTML = quotes[random].writer;
        PrevQuotes.push(quotes[random].quote);
    }
}
