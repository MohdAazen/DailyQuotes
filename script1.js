const quote = document.getElementsByTagName("blockquote");
const author = document.getElementsByClassName('author');

const newQuote = document.querySelector('.newQuote');
const twtBtn = document.querySelector('.twtBtn');

const apiLink = "https://quotes-api-self.vercel.app/quote";
let postTwt;
const getData = async()=>{
    const  resp = await fetch(apiLink);
    const data = await resp.json();
    
    quote[0].innerText = data.quote;
    author[0].innerText = data.author;
    
    postTwt = data.quote;
}

getData();

newQuote.addEventListener("click",()=>{
    getData();
})

twtBtn.addEventListener("click",()=>{
    window.open("https://twitter.com/intent/tweet?text="+postTwt,"TweetPost","width =500, height = 500");
});



