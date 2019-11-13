var key = "54fa5b40f77ee5f294c70a3cc2cd4ce9";
var city = "san diego"; // My test case was "London"
var url = "https://api.openweathermap.org/data/2.5/forecast";

$.ajax({
  url: url, //API Call
  dataType: "json",
  type: "GET",
  data: {
    q: city,
    appid: key,
    units: "metric",
    cnt: "10"
  },
  success: function(data) {
    console.log('Received data:', data) // For testing
    var wf = "";
    wf += "<h2>" + data.city.name + "</h2>"; // City (displays once)
    $.each(data.list, function(index, val) {
      wf += "<p>" // Opening paragraph tag
      wf += "<b>Day " + index + "</b>: " // Day
      wf += val.main.temp + "&degC" // Temperature
      wf += "<span> | " + val.weather[0].description + "</span>"; // Description
      wf += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
      wf += "<span> | " + data.list[index].main.humidity + "%</span>"; // Description
      wf += "<span> | " + data.list[index].wind.speed + "mph</span>"; // Description
      wf += "</p>" // Closing paragraph tag
    });
    // $("#showWeatherForcast").html(wf);
    $("#content").html(wf);

  }
});
$("#submitbutton").on("click", function(){

console.log('submitbutton')
var key = "54fa5b40f77ee5f294c70a3cc2cd4ce9";
var city = $("#input").val(); // My test case was "London"
var url = "https://api.openweathermap.org/data/2.5/forecast";
console.log(city)
$.ajax({
  url: url, //API Call
  dataType: "json",
  type: "GET",
  data: {
    q: city,
    appid: key,
    units: "metric",
    cnt: "10"
  },
  success: function(data) {
    console.log('Received data:', data) // For testing
    var wf = "";
    wf += "<h2>" + data.city.name + "</h2>"; // City (displays once)
    $.each(data.list, function(index, val) {
      wf += "<p>" // Opening paragraph tag
      wf += "<b>Day " + index + "</b>: " // Day
      wf += val.main.temp + "&degC" // Temperature
      wf += "<span> | " + val.weather[0].description + "</span>"; // Description
      wf += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
      wf += "<span> | " + data.list[index].main.humidity + "%</span>"; // Description
      wf += "<span> | " + data.list[index].wind.speed + "mph</span>"; // Description
      wf += "</p>" // Closing paragraph tag
    });
    // $("#showWeatherForcast").html(wf);
    // update..
    $("#content").html(wf);

  }
});
})