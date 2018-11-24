console.log("you are in the sample server");

fetch("https://hacker-news.firebaseio.com/v0/item/126809.json?print=pretty")
    .then((r) => r.json()).then(data => console.log(data));