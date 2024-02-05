const getWeatherBtn = () => {
    var city = document.getElementById('cityInput').value;
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={96a3bb9f3b43754fbb592c6ae9121cfe}'
    fetch(apiUrl)
    
   .then(response => response.json())
   .then(data =>{
      temp.innerHTML = `<p>${data.main.temp}</p>`;
      city.innerHTML = `<p>${data.main.city}</p>`;
      weather.innerHTML = `<p>${data.weather[0].main}</p>`;
      description.innerHTML = `<p>${data.weather[0].description}</p>`;
      wind.innerHTML = `<p>${data.wind.speed}</p>`;
      humidity.innerHTML = `<p>${data.main.humidity}</p>;`;
      tempMax = `<p>${data.main.temp_max}</p>`;
      tempMin = `<p>${data.main.temp_min}</p>`;
      pressure.innerHTML = `<p>${data.main.pressure}</p>`;
      feels.innerHTML = `<p>${data.main.feels}</p>`;
   })
   .catch(error => {
            console.log('Error fetching weather data:', error);
            var weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = '<p class="text-danger fw-bolder">Error fetching weather data. Please try again.</p>';
       });
  }
