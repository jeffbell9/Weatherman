var latitude;
var longitude;

var target = location.pathname.split('/').pop();

if (target === "seattle.html") {
	latitude = 47.608013;
	longitude = -122.335167;
} else if (target === "portland.html") {
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