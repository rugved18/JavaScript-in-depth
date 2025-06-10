const searchBtn = document.querySelector('#searchBtn');
const cityName = document.querySelector('#cityName');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');

searchBtn.addEventListener('click', search);

async function search() {
  const city = document.querySelector('#cityInput').value.trim();

  if (!city) {
    cityName.innerHTML = "<h3>Please enter a city name</h3>";
    temperature.innerHTML = "";
    description.innerHTML = "";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b20fb579f74a7527084c2f7632bdbadc&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === "404") {
      cityName.innerHTML = `<h3>City not found</h3>`;
      temperature.innerHTML = "";
      description.innerHTML = "";
      return;
    }

    const name = data.name;
    const temp = data.main.temp;
    const des = data.weather[0].description;

    cityName.innerHTML = `<h3>${name}</h3>`;
    temperature.innerHTML = `<p>Temperature: ${temp}°C</p>`;
    description.innerHTML = `<p>${des}</p>`;
  } catch (error) {
    cityName.innerHTML = "<h3>Error fetching data</h3>";
    temperature.innerHTML = "";
    description.innerHTML = "";
    console.error("Fetch error:", error);
  }
}
