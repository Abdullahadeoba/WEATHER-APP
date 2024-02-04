document.getElementById('getWeatherBtn').addEventListener('click', function() {
    var city = document.getElementById('cityInput').value;
    var apiKey = '96a3bb9f3b43754fbb592c6ae9121cfe';
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        documemt.getElementById('city').innerHTML = data.name;
        documemt.getElementById('temp').innerHTML = data.mai.temp;



        var weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
          <h3>${data.name}</h3>
          <p>Temperature:<i class="fas fa-wind"></i> ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].main}</p>
          <p>Description: ${data.weather[0].description}</p>
        `;
      })
      .catch(error => {
        console.log('Error fetching weather data:', error);
        var weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = '<p class="text-danger fw-bolder">Error fetching weather data. Please try again.</p>';
      });
  });