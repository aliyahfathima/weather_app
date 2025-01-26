async function getweather() {
    const city = document.getElementById("city-input").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const apiKey = "962d1b000c7a49fe8fe153924252501"; 
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            const weatherInfo = document.getElementById("weather-info");
            const condition = data.current.condition.text.toLowerCase(); 
            const date = new Date().toLocaleDateString(); 
            const latitude = data.location.lat;
            const longitude = data.location.lon;


            
            weatherInfo.style.display = "block";
            weatherInfo.innerHTML = `
                <h2>City: ${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Condition: ${data.current.condition.text}</p>
                <p>Date: ${date}</p> 
                <p>Latitude: ${latitude}</p> 
                <p>Longitude: ${longitude}</p> 
            `;
        } else {
            alert(data.error.message);
        }
    } catch (error) {
        alert("An error occurred. Please try again.");
        console.error(error);
    }
}
