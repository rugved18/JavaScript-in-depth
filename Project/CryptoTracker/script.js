const coinName = document.querySelector("#coinName")
const searchBtn = document.querySelector("#searchBtn")

const coin = document.querySelector("#coin")
const currentPrice = document.querySelector("#currentPrice")
const PricePercentage = document.querySelector("#PricePercentage")
const high = document.querySelector("#high")
const Low = document.querySelector("#Low")




async function search(){
  const coinInput = coinName.value.toLowerCase();
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinInput}`)

    const data = await res.json();
    console.log(data);

let coin1 = data.name;
let currentPrice1 = data.market_data.current_price.inr; 
let priceChange1 = data.market_data.price_change_percentage_24h;
let high1 = data.market_data.high_24h.inr;
let low1 = data.market_data.low_24h.inr;

coin.innerHTML = `Coin Name: <h3>${coin1}</h3>`;
currentPrice.innerHTML = `Current Price: <p>₹${currentPrice1}</p>`;
PricePercentage.innerHTML = `Price Change: <p>${priceChange1.toFixed(2)}%</p>`;
high.innerHTML = `High: <p>₹${high1}</p>`;
Low.innerHTML = `Low: <p>₹${low1}</p>`;

}

searchBtn.addEventListener("click",search);