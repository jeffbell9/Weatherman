var latitude;
var longitude;

if (location.pathname === "/Users/jeffbell/Documents/Projects/Weatherman/seattle.html") {
	latitude = 47.608013;
	longitude = -122.335167;
} else if (location.pathname === "/Users/jeffbell/Documents/Projects/Weatherman/portland.html") {
	latitude = 45.512794;
	longitude = -122.679565;
}

function getWeather (callback) {
	$.ajax({
		url: "https://api.forecast.io/forecast/Your_Forecast_API_Key_Here/" + latitude  + "," + longitude,
		dataType: 'jsonp',
		success: callback
	});
}	

getWeather(function(weather) {
	var values = {
		temp: weather.currently.temperature.toFixed(),
		condition: weather.currently.summary,
	};
	$("#temp").html(values.temp);
	$("#conditions").html(values.condition);

});