const quotes = [
    {
        quote : "Don't dwell on the past.",
    },
    {
        quote : "Believe in yourself.",
    },
    {
        quote : "Follow your heart.",
    },
    {
        quote : "Seize the day.",
    },
    {
        quote : "You only live once.",
    },
    {
        quote : "Past is just past.",
    },
    {
        quote : "Love yourself.",
    },
    {
        quote : "Where there is a will there is a way.",
    },
    {
        quote : "Don't beat yourself up.",
    },
    {
        quote : "Life is a journey.",
    },
    {
        quote : "Don't dream, Be it.",
    },
    {
        quote : "No Pain, No gain.",
    },
    {
        quote : "No sweat, No sweet.",
    },
    {
        quote : "The die is cast.",
    },
    {
        quote : "When they go low, we go high.",
    },
    {
        quote : "A friend is a second myself.",
    },
    {
        quote : "Appearances are deceptive.",
    },
    {
        quote : "Be brave.",
    },
    {
        quote : "Every cloud has a silver lining.",
    },
    {
        quote : "Don't judge a book by its cover.",
    },
    {
        quote : "Hang in there.",
    },
    {
        quote : "This is how life is.",
    },
    {
        quote : "Live positive.",
    },
    {
        quote : "Seeing is believing.",
    },
    {
        quote : "He can do, she can do, why not me?",
    },
    {
        quote : "If not now, then when?",
    },
    {
        quote : "You deserve to be loved.",
    },
    {
        quote : "Time waits for no one.",
    },
    {
        quote : "Don't waste your youth.",
    },
    {
        quote : "Time is gold.",
    },
    {
        quote : "Your success is up to your efforts.",
    },
    {
        quote : "This too shall pass away.",
    },
    {
        quote : "Love what you do.",
    },
    {
        quote : "Life is unfair, get used to it.",
    },
    {
        quote : "Live live there is no tomorrow.",
    },
    {
        quote : "Pain past is pleasure.",
    },
    {
        quote : "Envy and wrath shorten life.",
    },
    {
        quote : "Life is all about timing.",
    },
];

const quoteId = document.querySelector("#quote span:first-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteId.innerText = todaysQuote.quote;