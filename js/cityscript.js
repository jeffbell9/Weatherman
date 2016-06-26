// display date

var d = new Date();
$("#date").html(d.toDateString());

function redirectMe(sbox) {
	var url = sbox[sbox.selectedIndex].value;
	window.location = url;
}

function goBack() {
	window.location = "index.html";
}

// redirect when selection is made

$("#select").change(function() {
	
	redirectMe(this);

});

	








		








