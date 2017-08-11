// display date

var d = new Date();
$("#date").html(d.toDateString());

function cityName(sbox) {
	return sbox[sbox.selectedIndex].value;
}

function getWeather (latitude, longitude, callback) {
	$.ajax({
		url: "https://api.darksky.net/forecast/8225c57793375b21b3584d5b25abb022/" + latitude  + "," + longitude,
		dataType: 'jsonp',
		success: callback
	});
}	

$("#select").change(function() {
	let latitude,
		longitude,
		city;

	city = cityName(this);

	if (city === "Seattle") {
		latitude = 47.608013;
		longitude = -122.335167;
	} else if (city === "Portland") {
		latitude = 45.512794;
		longitude = -122.679565;
	}

	getWeather(latitude, longitude, function(weather) {
	var values = {
		temp: weather.currently.temperature.toFixed(),
		condition: weather.currently.summary,
	};

	$("#city").text(city);
	$("#temp").html(values.temp);
	$("#degrees").html("&deg");
	$("#conditions").html(values.condition);
	
	});

});

	








		








