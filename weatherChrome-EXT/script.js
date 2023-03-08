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
        const response = await fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=Plano%20Texas&days=4', options);
        
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

        
        
        
        //weather text and Icon //
        const weatherText = jsonResponse.current.condition.text;
        const weatherIcon = "https:" + jsonResponse.current.condition.icon;
        const forecastDay1 = jsonResponse.forecast.forecastday[1].day;
        const forecastDay2 = jsonResponse.forecast.forecastday[2].day;
        const weatherText1 = forecastDay1.condition.text;
        const weatherIcon1 = "https:" + forecastDay1.condition.icon;
        const weatherText2 = forecastDay2.condition.text;
        const weatherIcon2 = "https:" + forecastDay2.condition.icon;
        
        document.getElementById("weather-text").textContent = weatherText;
        document.getElementById("weather-icon").setAttribute("src", weatherIcon);
        document.getElementById("weather-text-1").textContent = weatherText;
        document.getElementById("weather-icon-1").setAttribute("src", weatherIcon);
        document.getElementById("weather-text1").textContent = weatherText1;
        document.getElementById("weather-icon1").setAttribute("src", weatherIcon1);
        document.getElementById("weather-text2").textContent = weatherText2;
        document.getElementById("weather-icon2").setAttribute("src", weatherIcon2);



        // date //
        const date1 = jsonResponse.forecast.forecastday[0].date.slice(5).replace(/^0+/, '');
        const date2 = jsonResponse.forecast.forecastday[1].date.slice(5).replace(/^0+/, '');
        const date3 = jsonResponse.forecast.forecastday[2].date.slice(5).replace(/^0+/, '');

        document.getElementById("date1").innerHTML = date1;
        document.getElementById("date2").innerHTML = date2;
        document.getElementById("date3").innerHTML = date3;
        


        // Sunrise/Sunset //

        const sunrise1 = jsonResponse.forecast.forecastday[0].astro.sunrise.slice(1);
        const sunset1 = jsonResponse.forecast.forecastday[0].astro.sunset.slice(1);
        const sunrise2 = jsonResponse.forecast.forecastday[1].astro.sunrise.slice(1);
        const sunset2 = jsonResponse.forecast.forecastday[1].astro.sunset.slice(1);
        const sunrise3 = jsonResponse.forecast.forecastday[2].astro.sunrise.slice(1);
        const sunset3 = jsonResponse.forecast.forecastday[2].astro.sunset.slice(1);

        document.getElementById("sunrise").textContent = sunrise1;
        document.getElementById("sunset").textContent = sunset1;
        document.getElementById("sunrise1").textContent = sunrise1;
        document.getElementById("sunset1").textContent = sunset1;
        document.getElementById("sunrise2").textContent = sunrise2;
        document.getElementById("sunset2").textContent = sunset2;
        document.getElementById("sunrise3").textContent = sunrise3;
        document.getElementById("sunset3").textContent = sunset3;


        // Forecast Temperatures //
        const maxtemp_f_day0 = tdata.forecast.forecastday[0].day.maxtemp_f;
        const maxtemp_f_day1 = tdata.forecast.forecastday[1].day.maxtemp_f;
        const maxtemp_f_day2 = tdata.forecast.forecastday[2].day.maxtemp_f;

        console.log(tdata);
        console.log("tdata.current.temp_f is: " + tdata.current.temp_f);
        // high temperatures 
        console.log("tdata.forecast is: " + tdata.forecast);
        console.log("tdata.forecast.forecastday[0].day.maxtemp_f is: " + tdata.forecast.forecastday[0].day.maxtemp_f);
        document.getElementById("1h").innerHTML = maxtemp_f_day1 + "&#176";;

        console.log("tdata.forecast.forecastday[1].day.maxtemp_f is: " + tdata.forecast.forecastday[1].day.maxtemp_f);
        document.getElementById("2h").innerHTML = maxtemp_f_day1 + "&#176";;

        console.log("tdata.forecast.forecastday[2].day.maxtemp_f is: " + tdata.forecast.forecastday[2].day.maxtemp_f);
        document.getElementById("3h").innerHTML = maxtemp_f_day2 + "&#176";;

        //low temperatures
        const mintemp_f_day0 = tdata.forecast.forecastday[0].day.mintemp_f;
        const mintemp_f_day1 = tdata.forecast.forecastday[1].day.mintemp_f;
        const mintemp_f_day2 = tdata.forecast.forecastday[2].day.mintemp_f;

        console.log("tdata.forecast.forecastday[0].day.mintemp_f is: " + tdata.forecast.forecastday[0].day.mintemp_f);
        document.getElementById("1l").innerHTML = mintemp_f_day1 + "&#176";;

        console.log("tdata.forecast.forecastday[1].day.mintemp_f is: " + tdata.forecast.forecastday[1].day.mintemp_f);
        document.getElementById("2l").innerHTML = mintemp_f_day1 + "&#176";;

        console.log("tdata.forecast.forecastday[2].day.mintemp_f is: " + tdata.forecast.forecastday[2].day.mintemp_f);
        document.getElementById("3l").innerHTML = mintemp_f_day2 + "&#176";;






        // inches of rainfall // 
        const totalprecip_in0 = tdata.forecast.forecastday[0].day.totalprecip_in;
        const totalprecip_in1 = tdata.forecast.forecastday[1].day.totalprecip_in;
        const totalprecip_in2 = tdata.forecast.forecastday[2].day.totalprecip_in;

        document.getElementById("rainfall").innerHTML = totalprecip_in0 + "in";
        document.getElementById("rainfall1").innerHTML = totalprecip_in0 + "in";
        document.getElementById("rainfall2").innerHTML = totalprecip_in1 + "in";
        document.getElementById("rainfall3").innerHTML = totalprecip_in2 + "in";



        // chance of rain (%) //
        const daily_chance_of_rain0 = tdata.forecast.forecastday[0].day.daily_chance_of_rain;
        const daily_chance_of_rain1 = tdata.forecast.forecastday[1].day.daily_chance_of_rain;
        const daily_chance_of_rain2 = tdata.forecast.forecastday[2].day.daily_chance_of_rain;

        document.getElementById("rain_chance").innerHTML = daily_chance_of_rain0 + "%";
        document.getElementById("rain_chance1").innerHTML = daily_chance_of_rain0 + "%";
        document.getElementById("rain_chance2").innerHTML = daily_chance_of_rain1 + "%";
        document.getElementById("rain_chance3").innerHTML = daily_chance_of_rain2 + "%";



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
