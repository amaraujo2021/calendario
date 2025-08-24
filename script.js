const API_KEY = "demo"; // troque pelo seu
const symbol = "IBM";
const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

async function loadData() {
  const res = await fetch(url);
  const data = await res.json();
  const price = data["Global Quote"]["05. price"];

  document.getElementById("stocks").innerHTML = `
    <h2>${symbol}</h2>
    <p>Preço Atual: $${parseFloat(price).toFixed(2)}</p>
  `;
}

loadData();
