const quotes = [
    {
        quote : "When you have faults, do not fear to abandon them.",
        author : "Confucius",
    },
    {
        quote : "They must often change who would be constant in happiness or wisdom.",
        author : "Confucius",
    },
    {
        quote : "Age is no guarantee of maturity.",
        author : "Lawana Blackwell",
    },
    {
        quote : "Youth isn’t always all it’s touted to be.",
        author : "Lawana Blackwell",
    },
    {
        quote : "You will face many defeats in life, but never let yourself be defeated.",
        author : "Maya Angelou",
    },
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author : "Nelson Mandela",
    },
    {
        quote : "Life is either a daring adventure or nothing at all.",
        author : "Helen Keller",
    },
    {
        quote : "The goal of life is living in agreement with nature.",
        author : "Zeno",
    },
    {
        quote : "This too shall pass.",
        author : "Et hoc transibit",
    },
    {
        quote : "The die is cast.",
        author : "Julius caesar",
    },
    {
        quote : "Only I can change me life, no one can do it for me.",
        author : "Carol Burnett",
    },
    {
        quote : "When in doubt, choose change.",
        author : "Lily leung",
    },
    {
        quote : "Life is unfair, get used to it.",
        author : "Bill Gates",
    },
    {
        quote : "Being happy never goes out of style.",
        author : "Lilly Pulitzer",
    },
    {
        quote : "All you need in this life is ignorance and confidence, then success is sure.",
        author : "Maxime Lagacé",
    },
    {
        quote : "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
        author : "Kamal Ravikant",
    },
    {
        quote : "Life can only be understood backwards; but it must be lived forwards.",
        author : "Søren Kierkegaard",
    },
]

const quoteId = document.querySelector("#quote span:first-child");
const authorId = document.querySelector("#quote span:last-child")
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteId.innerText = todaysQuote.quote;
authorId.innerText = `- ${todaysQuote.author}`;