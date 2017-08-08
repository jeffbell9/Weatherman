var latitude;
var longitude;

if (location.pathname === "/Users/jeffbell/Desktop/Projects/Weatherman/seattle.html") {
	latitude = 47.608013;
	longitude = -122.335167;
} else if (location.pathname === "/Users/jeffbell/Desktop/Projects/Weatherman/portland.html") {
	latitude = 45.512794;
	longitude = -122.679565;
}

function getWeather (callback) {
	$.ajax({
		url: "https://api.darksky.net/forecast/8225c57793375b21b3584d5b25abb022/" + latitude  + "," + longitude,
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