async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b3b6ffd719msh9b03b07492ce1c9p1bb6f6jsn7213d83ec9db',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    try {
        //const response = await fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=Dallas&days=3&dt=2023-01-16', options);
        const response = await fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=Parker%20Texas&days=3', options);
        const jsonResponse = await response.json();

       
        myJavaScriptVar = JSON.stringify(jsonResponse);
        tdata = JSON.parse(myJavaScriptVar);
        temp_f = tdata.current.temp_f
        humidity = tdata.current.humidity;
        uv = tdata.current.uv;
        wind_mph = tdata.current.wind_mph;
        wind_dir = tdata.current.wind_dir;
        feelslike_f = tdata.current.feelslike_f;
        gust_mph = tdata.current.gust_mph;


        maxtemp_f = tdata.forecast.forecastday[0].day.maxtemp_f;
        mintemp_f = tdata.forecast.forecastday[0].day.mintemp_f;

        
        daily_chance_of_rain = tdata.forecast.forecastday[0].day.daily_chance_of_rain;
        totalprecip_in = tdata.forecast.forecastday[0].day.totalprecip_in;




        const maxtemp_f_day0 = tdata.forecast.forecastday[0].day.maxtemp_f;
        const maxtemp_f_day1 = tdata.forecast.forecastday[1].day.maxtemp_f;
        const maxtemp_f_day2 = tdata.forecast.forecastday[2].day.maxtemp_f;

        const mintemp_f_day0 = tdata.forecast.forecastday[0].day.mintemp_f;
        const mintemp_f_day1 = tdata.forecast.forecastday[1].day.mintemp_f;
        const mintemp_f_day2 = tdata.forecast.forecastday[2].day.mintemp_f;
        
    
        // Extract text and icon from the API response
        const weatherText = jsonResponse.current.condition.text;
        const weatherIcon = "https:" + jsonResponse.current.condition.icon;


        const sunrise = jsonResponse.forecast.forecastday[0].astro.sunrise;
        const sunset = jsonResponse.forecast.forecastday[0].astro.sunset;


        // Update HTML elements with weather data
        document.getElementById("weather-text").textContent = weatherText;
        document.getElementById("weather-icon").setAttribute("src", weatherIcon);


        document.getElementById("sunrise").textContent = sunrise;
        document.getElementById("sunset").textContent = sunset;
        


        console.log(tdata);
        console.log("tdata.current.temp_f is: " + tdata.current.temp_f);
        // high temperatures
        console.log("tdata.forecast is: " + tdata.forecast);
        console.log("tdata.forecast.forecastday[0].day.maxtemp_f is: " + tdata.forecast.forecastday[0].day.maxtemp_f);
        document.getElementById("1h").innerHTML = maxtemp_f_day0 + "&#176";

        console.log("tdata.forecast.forecastday[1].day.maxtemp_f is: " + tdata.forecast.forecastday[1].day.maxtemp_f);
        document.getElementById("2h").innerHTML = maxtemp_f_day1 + "&#176";;

        console.log("tdata.forecast.forecastday[2].day.maxtemp_f is: " + tdata.forecast.forecastday[2].day.maxtemp_f);
        document.getElementById("3h").innerHTML = maxtemp_f_day2 + "&#176";;

        //low temperatures
        console.log("tdata.forecast.forecastday[0].day.mintemp_f is: " + tdata.forecast.forecastday[0].day.mintemp_f);
        document.getElementById("1l").innerHTML = mintemp_f_day0 + "&#176";;

        console.log("tdata.forecast.forecastday[1].day.mintemp_f is: " + tdata.forecast.forecastday[1].day.mintemp_f);
        document.getElementById("2l").innerHTML = mintemp_f_day1 + "&#176";;

        console.log("tdata.forecast.forecastday[2].day.mintemp_f is: " + tdata.forecast.forecastday[2].day.mintemp_f);
        document.getElementById("3l").innerHTML = mintemp_f_day2 + "&#176";;

        document.getElementById("rainfall").innerHTML = totalprecip_in + "in";

        document.getElementById("rain_chance").innerHTML = daily_chance_of_rain + "%";

        document.getElementById("maxtemp1").innerHTML = maxtemp_f_day0 + "&#176";

        document.getElementById("mintemp1").innerHTML = mintemp_f_day0 + "&#176";

        document.getElementById("gust").innerHTML = gust_mph + "mph";
        
        document.getElementById("feelsLike").innerHTML = feelslike_f + "&#176";;


        document.getElementById("wind").innerHTML = wind_dir + " " + wind_mph + "mph";;

        // current UV index
        document.getElementById("uv_index").innerHTML = uv;;

        // current humidity
        document.getElementById("humidity").innerHTML = humidity + "%";;

        //current temperatures
        document.getElementById("current_temp").innerHTML = temp_f + "&#176";;
        //all weather data
        document.getElementById("weather").innerHTML = myJavaScriptVar;

    } catch (error) {
        console.error(error);
    }
}
fetchData();


function updateClock() {
	// Get the current time and date
	let now = new Date();

	// Format the time and date strings
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	let time = now.toLocaleTimeString();
	let date = now.toLocaleDateString();

	// Update the HTML elements
	document.getElementById('clock').innerHTML = time;
	document.getElementById('date').innerHTML = date;
    document.getElementById("timezone").textContent = userTimezone;
}

// Update the clock every second
setInterval(updateClock, 10);
