const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '6adc1354089149af516153cb58ffbfb0';  

$(document).ready(function () {
    weatherFn('Mumbai');
});

async function weatherFn(cName) {
    const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
        console.log(`Fetching weather data for ${cName}`);
        const res = await fetch(temp);
        const data = await res.json();
        
        console.log('Response data:', data);

        if (res.ok) {
            weatherShowFn(data);
        } else {
            console.warn('API returned an error:', data);
            $('#weather-info').hide();
            $('#error-message').text(`City not found: ${cName}. Please try again.`).show();
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        $('#weather-info').hide();
        $('#error-message').text('Error fetching weather data. Please try again later.').show();
    }
}

function weatherShowFn(data) {
    console.log('Displaying weather data:', data);
    $('#city-name').text(data.name);
    $('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    $('#temperature').html(`${data.main.temp}°C`);
    $('#description').text(data.weather[0].description);
    $('#wind-speed').html(`Wind Speed: ${data.wind.speed} m/s`);
    $('#weather-icon').attr('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    $('#weather-info').fadeIn();
    $('#error-message').hide();
}
